import { createContext, useContext, useState } from 'react';
import Modal from '../components/Modal';

// Global context for managing multiple modals
const ModalContext = createContext();

// ModalProvider component that wraps the application to enable it to call modals
export function ModalProvider({ children }) {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    content: null
  });

  // Opens a modal with the provided content
  const openModal = (content) => {
    setModalConfig({ isOpen: true, content });
  };

  // Closes the modal and resets the content
  const closeModal = () => {
    setModalConfig({ isOpen: false, content: null });
  };

  // Modal uses the context information which can be changed in the application (e.g. Footer.jsx)
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

// Custom hook to enable each component to call the methods of the ModalContext
export const useModal = () => useContext(ModalContext);