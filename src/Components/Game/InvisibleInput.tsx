import { CSSProperties, useEffect, useRef } from "react";

// Invisible input to track user keyboard input if not using onscreen keyboard

const styles: { [key: string]: CSSProperties } = {
  invisibleInput: {
    opacity: 0,
    top: "-100%",
    position: "fixed",
    zIndex: 9999,
  },
};

type Props = {
  handleKeyPress: (key: string) => void;
  disabled: boolean;
  closeModal: () => void;
  modal: string;
};

const isMobile = /Mobi|Android/i.test(navigator.userAgent);

const InvisibleInput = ({
  handleKeyPress,
  disabled,
  closeModal,
  modal,
}: Props) => {
  const invisibleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isMobile) return;

    // Focus the invisible input to capture keyboard events
    if (invisibleInputRef.current) {
      invisibleInputRef.current.focus();
    }
  }, []);

  return (
    <input
      type="text"
      style={styles.invisibleInput}
      ref={invisibleInputRef}
      onBlur={() => {
        if (isMobile) return;

        // Make sure to never lose focus on the invisible input.
        if (
          invisibleInputRef.current &&
          invisibleInputRef.current !== document.activeElement
        ) {
          invisibleInputRef.current.focus();
        }
      }}
      onKeyDown={(e) => {
        !disabled && handleKeyPress(e.key);
        if (e.key === "Enter" && modal) {
          closeModal();
        }
      }}
    />
  );
};

export default InvisibleInput;
