import { CSSProperties } from "react";

type Props = {
  board: string[][];
  scoreBoard: number[][];
};

const styles: { [key: string]: CSSProperties } = {
  board: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    marginBottom: "20px",
  },
  row: {
    display: "flex",
    gap: "5px",
  },
  cell: {
    width: "58px",
    height: "58px",
    border: "2px solid var(--wordleBorder)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

// helper to get the correct background color
const getCellBackground = (score: number) => {
  switch (score) {
    case 2:
      return "var(--correct)";
    case 1:
      return "var(--present)";
    case 0:
      return "var(--wrong)";
    default:
      return "none";
  }
};

const Board = ({ board, scoreBoard }: Props) => {
  return (
    <div style={styles.board}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {row.map((letter, colIndex) => (
            <div
              key={colIndex}
              style={{
                ...styles.cell,
                backgroundColor: getCellBackground(
                  scoreBoard[rowIndex][colIndex]
                ),
                border:
                  scoreBoard[rowIndex][colIndex] !== -1
                    ? "2px solid transparent"
                    : "2px solid var(--wordleBorder)",
              }}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
