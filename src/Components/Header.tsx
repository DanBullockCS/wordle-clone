import React, { CSSProperties, useState } from "react";
import HowToPlayModal from "./HowToPlayModal";

const styles: { [key: string]: CSSProperties } = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "var(--headerBackground)",
    color: "var(--headerText)",
  },
};

const Header = () => {
  const [isOpen, setIsHowToPlayModalOpen] = useState(false);

  return (
    <header>
      <div style={styles.header}>
        <p>
          Wordle Clone - Made by{" "}
          <a href="https://danbullock.me/" target="_blank" rel="noreferrer">
            @DanBullockCS
          </a>
        </p>
        <button onClick={() => setIsHowToPlayModalOpen(true)}>?</button>
      </div>

      <HowToPlayModal isOpen={isOpen} setIsOpen={setIsHowToPlayModalOpen} />
    </header>
  );
};

export default Header;
