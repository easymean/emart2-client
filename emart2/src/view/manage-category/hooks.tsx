import { useState } from "react";

export const useSaveButton = () => {
  const [showModal, setShowModal] = useState(false);
  const onShowModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };
  return {
    showModal,
    onShowModal,
    onCloseModal,
  };
};
