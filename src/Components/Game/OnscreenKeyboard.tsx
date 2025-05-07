import { CSSProperties } from "react";

type Props = {
  onKeyPress: (key: string) => void;
  activeKey: string | null;
  letterStates: { [letter: string]: number };
  disabled: boolean;
};

const KEYS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
];

const styles: { [key: string]: CSSProperties } = {
  keyboard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "5px",
  },
  key: {
    padding: "10px 15px",
    margin: "0 2px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.25em",
    width: "2.688rem",
    height: "3.625rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  specialKey: {
    width: "100%",
    fontSize: "0.75em",
    textTransform: "uppercase",
  },
  activeKey: {
    transform: "scale(1.05)",
  },
};

const OnscreenKeyboard = ({
  onKeyPress,
  activeKey,
  letterStates,
  disabled,
}: Props) => {
  const getKeyColor = (key: string) => {
    const status = letterStates[key.toUpperCase()];
    switch (status) {
      case 2:
        return "var(--correct)";
      case 1:
        return "var(--present)";
      case 0:
        return "var(--wrong)";
      default:
        return "var(--keyColor)";
    }
  };

  return (
    <div style={styles.keyboard}>
      {KEYS.map((row, rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {row.map((key) => (
            <button
              key={key}
              style={{
                ...styles.key,
                ...(key === "Enter" || key === "Backspace"
                  ? styles.specialKey
                  : {}),
                ...(key.toUpperCase() === activeKey?.toUpperCase()
                  ? styles.activeKey
                  : {}),
                backgroundColor: getKeyColor(key),
              }}
              className="key"
              onClick={() => !disabled && onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OnscreenKeyboard;
