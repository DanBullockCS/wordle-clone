import React from "react";
import Modal from "../Modal";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<string>>;
};

const InvalidWordModal = ({ isOpen, setIsOpen }: Props) => {
  const closeModal = () => {
    setIsOpen("");
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h3 style={{ margin: "2rem" }}>Invalid Word! Try again!</h3>
    </Modal>
  );
};

export default InvalidWordModal;
