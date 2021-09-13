import { useState } from "react";

export const useSaveButton = () => {
  const [showModal, setShowModal] = useState(false);
  const onShowModal = () => {
    setShowModal(true);
  };
  return {
    showModal,
    onShowModal,
  };
};
