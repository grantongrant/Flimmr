import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AlbumForm from './AlbumForm';

function AlbumFormModal({singlePhoto}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="add-to-album-button" onClick={() => setShowModal(true)}>Add to Album</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AlbumForm setShowModal={setShowModal} singlePhoto={singlePhoto}/>
        </Modal>
      )}
    </>
  );
}

export default AlbumFormModal;