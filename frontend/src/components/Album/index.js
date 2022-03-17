import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AlbumForm from './AlbumForm';

function AlbumFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add to Album</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AlbumForm />
        </Modal>
      )}
    </>
  );
}

export default AlbumFormModal;