import { CSSProperties } from "react";

type Props = {
  isLoading: boolean;
};

const styles: { [key: string]: CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  loader: {
    display: "flex",
    gap: "1rem",
  },
  dot: {
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    animation: "bounce 0.4s infinite alternate",
  },
};

// Define the bounce animation using a style tag
const Loader = ({ isLoading }: Props) => {
  if (!isLoading) return null;

  return (
    <>
      <style>
        {`
            @keyframes bounce {
                from { transform: translateY(0); }
                to { transform: translateY(-20px); }
            }
            .dot:nth-child(1) {
                animation-delay: 0s;
            }
            .dot:nth-child(2) {
                animation-delay: 0.2s;
            }
            .dot:nth-child(3) {
                animation-delay: 0.4s;
            }
        `}
      </style>
      <div style={styles.overlay}>
        <div style={styles.loader}>
          <div
            className="dot"
            style={{ ...styles.dot, backgroundColor: "var(--wrong)" }}
          />
          <div
            className="dot"
            style={{ ...styles.dot, backgroundColor: "var(--present)" }}
          />
          <div
            className="dot"
            style={{ ...styles.dot, backgroundColor: "var(--correct)" }}
          />
        </div>
      </div>
    </>
  );
};

export default Loader;
