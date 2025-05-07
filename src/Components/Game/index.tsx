import React, { CSSProperties, useEffect, useRef, useState } from "react";
import Board from "./Board";
import OnscreenKeyboard from "./OnscreenKeyboard";
import InvisibleInput from "./InvisibleInput";

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 20px",
  },
};

const Game = () => {
  const invisibleInputRef = useRef<HTMLInputElement>(null);

  const [board, setBoard] = useState<string[][]>(
    Array(6).fill(Array(5).fill(""))
  ); // The visual game board
  const [scoreBoard, setScoreBoard] = useState<number[][]>(
    Array(6).fill(Array(5).fill(-1))
  ); // The score board
  const [currentWord, setCurrentWord] = useState(""); // The current word being typed
  const [currentRow, setCurrentRow] = useState(0); // The current row of the game board
  const [activeKey, setActiveKey] = useState<string | null>(null); // Keep track of the active key so we can animate it
  const [validating, setValidating] = useState(false); // Flag to indicate if the word is being validated by backend
  const [letterStates, setLetterStates] = useState<{
    [letter: string]: number;
  }>({}); // Keep track of the state of each letter
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  useEffect(() => {
    // Focus the invisible input to capture keyboard events
    if (invisibleInputRef.current) {
      invisibleInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (activeKey) {
      const timeout = setTimeout(() => {
        setActiveKey(null);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [activeKey]);

  const isValidKey = (key: string) => /^[a-z]$|^(enter|backspace)$/i.test(key);

  // Handle key press events (on screen or physical keyboard)
  const handleKeyPress = (key: string) => {
    if (!isValidKey(key)) {
      return;
    }

    setActiveKey(key);

    if (key.toUpperCase() === "BACKSPACE") {
      setCurrentWord((prev) => {
        const newWord = prev.slice(0, -1);

        setBoard((prevBoard) => {
          const newBoard = prevBoard.map((row, index) =>
            index === currentRow ? newWord.padEnd(5, " ").split("") : row
          );
          return newBoard;
        });

        return newWord;
      });
    } else if (key.toUpperCase() === "ENTER") {
      if (currentWord.length === 5) {
        handleSubmit(currentWord);
      }
    } else {
      setCurrentWord((prev) => {
        if (prev.length < 5) {
          const newWord = prev + key.toUpperCase();

          setBoard((prevBoard) => {
            const newBoard = prevBoard.map((row, index) =>
              index === currentRow ? newWord.padEnd(5, " ").split("") : row
            );
            return newBoard;
          });

          return newWord;
        }
        return prev;
      });
    }
  };

  // Call API to validate word
  const handleSubmit = async (word: string) => {
    if (currentRow >= 6) {
      console.log("No more rows left!");
      return;
    }

    if (validating) {
      console.log("Already validating...");
      return;
    }

    setValidating(true);

    const formData = {
      guess: word,
    };

    try {
      const response = await fetch(
        "https://wordle-apis.vercel.app/api/validate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        console.error("Network response was not ok...");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.is_valid_word) {
        console.error("Invalid word:", currentWord);
        setValidating(false);
        alert("Invalid word! Try again.");
        return;
      }

      if (data.score) {
        // Update board and scoreboard
        const newBoard = [...board];
        newBoard[currentRow] = word.split("");

        const newScoreBoard = [...scoreBoard];
        newScoreBoard[currentRow] = data.score;

        const newLetterStates = { ...letterStates };
        for (let i = 0; i < word.length; i++) {
          const letter = word[i];
          const score = data.score[i];
          if (
            newLetterStates[letter] === undefined ||
            score > newLetterStates[letter]
          ) {
            newLetterStates[letter] = score;
          }
        }

        setBoard(newBoard);
        setScoreBoard(newScoreBoard);
        setLetterStates(newLetterStates);

        // Move to the next row
        setCurrentRow((prev) => prev + 1);
        setCurrentWord("");

        setValidating(false);
      }
    } catch (error) {
      console.error(
        "There was an error sending the request to the server:",
        error
      );
      alert(
        "There was an error sending the request to the server. Please try again later."
      );
    }
  };

  return (
    <div style={styles.container}>
      <InvisibleInput handleKeyPress={handleKeyPress} />
      <Board board={board} scoreBoard={scoreBoard} />
      <OnscreenKeyboard
        onKeyPress={handleKeyPress}
        activeKey={activeKey}
        letterStates={letterStates}
      />
    </div>
  );
};

export default Game;
