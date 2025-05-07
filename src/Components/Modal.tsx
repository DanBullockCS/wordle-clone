import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

// General Modal component
type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
};

const styles: { [key: string]: CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: "1.25rem",
    borderRadius: "5px",
    position: "relative",
    border: "1px solid var(--wordleBorder)",
    backgroundColor: "var(--wordleBlack)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  },
};

const Modal = ({ children, isOpen, closeModal }: ModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [animateOpen, setAnimateOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setAnimateOpen(true);
      });
    } else {
      setAnimateOpen(false);
    }
  }, [isOpen]);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  if (!isOpen) {
    return <></>;
  }

  return (
    <div style={styles.overlay} onClick={handleClickOutside}>
      <div
        ref={contentRef}
        style={{
          ...styles.content,
          maxHeight: animateOpen ? "1000px" : "0px",
          opacity: animateOpen ? 1 : 0,
          transform: animateOpen ? "translateY(0)" : "translateY(-10px)",
          transition: "all 0.5s ease-in-out",
          overflow: "hidden",
        }}
      >
        <button style={styles.closeButton} onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
