import React, { useState } from 'react';
import styles from "./Modal.module.css"

const Modal = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <>
      {modalOpen && (
        <div className={styles.modal_overlay}>
          <div className={styles.modal}>
            <div className={styles.modal_content}>
              <button className={styles.close} onClick={closeModal}>
                &times;
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;