import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useHistory, NavLink } from "react-router-dom";
import * as imageActions from "../../store/images";

import "../../../src/index.css";


const PhotoUpload = () => {

    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors] = useState([]);


    const dispatch = useDispatch();
    const history = useHistory();

    let dropArea = document.getElementById('drop-area')
      
    function preventDefaults (e) {
        e.preventDefault()
        e.stopPropagation()
    };

      
    function highlight(e) {
        dropArea.classList.add('highlight')
    }
      
    function unhighlight(e) {
        dropArea.classList.remove('highlight')
    }

    function handleFiles(files) {
        ([...files]).forEach(uploadFile)
    }

    function handleDrop(e) {
        let dt = e.dataTransfer
        let files = dt.files
    
        handleFiles(files)
    };

    const uploadFile = async (e) => {
        e.preventDefault();
        setErrors([]);
    
        const newPhoto = {
          userId,
          imageUrl
        };
    
        // await dispatch(imageActions.createImage(newPhoto)).then(() => history.push("/photos"));
      await dispatch(imageActions.createImage(newPhoto))
      .then(() => {
        alert("Successfully added!")
        history.push("/photos")
      })
      .catch (async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            })
    };

    dropArea?.addEventListener('dragenter', preventDefaults, false)
    dropArea?.addEventListener('dragover', preventDefaults, false)
    dropArea?.addEventListener('dragleave', preventDefaults, false)
    dropArea?.addEventListener('drop', preventDefaults, false)

    dropArea?.addEventListener('dragenter', highlight, false)
    dropArea?.addEventListener('dragover', highlight, false)

    dropArea?.addEventListener('dragleave', unhighlight, false)
    dropArea?.addEventListener('drop', unhighlight, false)
    dropArea?.addEventListener('drop', handleDrop, false)


    return (
        <div id="drop-area">
            <form className="my-form">
            <p>Upload multiple files with the file dialog or by dragging and dropping images onto the dashed region</p>
            <input type="file" id="fileElem" accept=".png,.jpg,.jpeg"/>
            <label className="button" >Select some files</label>
            </form>
        </div>
    )

}

export default PhotoUpload;