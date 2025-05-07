import React from "react";
import Modal from "../Modal";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<string>>;
  content: React.ReactNode;
};

const InvalidWordModal = ({ isOpen, setIsOpen, content }: Props) => {
  const closeModal = () => {
    setIsOpen("");
    content = "";
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h3 style={{ margin: "2rem" }}>{content}</h3>
    </Modal>
  );
};

export default InvalidWordModal;
