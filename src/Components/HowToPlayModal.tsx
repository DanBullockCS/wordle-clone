import React, { useEffect } from "react";
import Modal from "./Modal";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const HowToPlayModal = ({ isOpen, setIsOpen }: Props) => {
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Open the modal when game begins
  useEffect(() => {
    openModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h2>How To Play</h2>
      <h3>Guess the Wordle in 6 tries.</h3>
      <ul>
        <li>Each guess must be a valid 5-letter word.</li>
        <li>
          The color of the tiles will change to show how close your guess was to
          the word.
        </li>
      </ul>
      <p>
        Re-created by{" "}
        <a href="https://danbullock.me/" target="_blank" rel="noreferrer">
          @DanBullockCS
        </a>
        . Inspired by{" "}
        <a
          href="https://www.nytimes.com/games/wordle/index.html"
          target="_blank"
          rel="noreferrer"
        >
          New York Times Game
        </a>
        .
      </p>
    </Modal>
  );
};

export default HowToPlayModal;
