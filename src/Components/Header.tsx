import React, { CSSProperties } from "react";
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

type Props = {
  modal: string;
  setModal: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ modal, setModal }: Props) => {
  return (
    <header>
      <div style={styles.header}>
        <p>
          Wordle Clone - Made by{" "}
          <a href="https://danbullock.me/" target="_blank" rel="noreferrer">
            @DanBullockCS
          </a>
        </p>
        <button onClick={() => setModal("howToPlay")}>?</button>
      </div>

      <HowToPlayModal isOpen={modal === "howToPlay"} setIsOpen={setModal} />
    </header>
  );
};

export default Header;
