import React from "react";
import Modal from "../Modal";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<string>>;
  content: React.ReactNode;
};

const videoList = ["MdN0NXgjsn8", "NSU2hJ5wT08", "SC4xMk98Pdc"]; // Random videos to congratulate the player for guessing right :)

const GameOverModal = ({ isOpen, setIsOpen, content }: Props) => {
  const closeModal = () => {
    setIsOpen("");
    content = "";
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h3 style={{ margin: "2rem" }}>{content}</h3>
      {content && content.toString().includes("Congratulations") && (
        <iframe
          title="You Did It Video!"
          src={`https://www.youtube.com/embed/${videoList[Math.floor(Math.random() * videoList.length)]}?autoplay=1&loop=1`}
          width="100%"
          height="320px"
          frameBorder={0}
          style={{ borderRadius: "1rem" }}
        ></iframe>
      )}
    </Modal>
  );
};

export default GameOverModal;
