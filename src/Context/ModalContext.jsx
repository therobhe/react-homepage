import { createContext, useContext, useState } from 'react';
import Modal from '../components/Modal';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    content: null
  });

  const openModal = (content) => {
    setModalConfig({ isOpen: true, content });
  };

  const closeModal = () => {
    setModalConfig({ isOpen: false, content: null });
  };

  return (
    <ModalContext.Provider value={{ modalConfig, openModal, closeModal }}>
      {children}
      <Modal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
      >
        {modalConfig.content}
      </Modal>
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);