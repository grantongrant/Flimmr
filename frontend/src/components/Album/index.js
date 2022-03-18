import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AlbumForm from './AlbumForm';
import "../../index.css";

function AlbumFormModal({singlePhoto}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {singlePhoto.albumId === null?
      <button id="add-to-album-button" onClick={() => setShowModal(true)}>Add to Album</button> :
      <div className="photo-top-right"onClick={() => setShowModal(true)}><button>Change Album</button></div>}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AlbumForm setShowModal={setShowModal} singlePhoto={singlePhoto}/>
        </Modal>
      )}
    </>
  );
}

export default AlbumFormModal;