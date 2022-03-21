import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import AlbumForm from './AlbumForm';
import "../../index.css";

function AlbumFormModal({singlePhoto}) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      {sessionUser.id === singlePhoto.userId ?
      <>
      {singlePhoto.albumId === null?
      <button id="add-to-album-button" onClick={() => setShowModal(true)}>Add to Album</button> :
      <div className="photo-top-right"onClick={() => setShowModal(true)}><button>Change Album</button></div>}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AlbumForm setShowModal={setShowModal} singlePhoto={singlePhoto} sessionUserId={sessionUser.id}/>
        </Modal>
      )}
      </> : null}
    </>
  );
}

export default AlbumFormModal;