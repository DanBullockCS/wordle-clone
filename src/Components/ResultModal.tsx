import React from "react";
import Modal from "./Modal";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  content: React.ReactNode;
};

const ResultModal = ({ isOpen, setIsOpen, content }: Props) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      {content}
    </Modal>
  );
};

export default ResultModal;
