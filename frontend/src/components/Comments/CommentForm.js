import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import "../../../src/index.css"
import { createComment, getAllComments} from '../../store/comments';
import {BsCamera2} from 'react-icons/bs';

const CommentForm = ({imageId, userId}) => {

    const [body, setBody] = useState("");
    const updateComment = (e) => setBody(e.target.value);
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const handleSubmit =  async (e) => {
        e.preventDefault();
        setErrors([]);

        const newComment = {
            userId,
            imageId,
            body
        }

        await dispatch(createComment(newComment))
        await dispatch(getAllComments(imageId));
        setBody("")
    };

    return (
        <div className="add-comment-container">
        <div className="comment-list-avatar camera"></div>
        <div className="comment-right comment-body">
        <form onSubmit={handleSubmit}>
          <textarea
            value={body}
            required
            onChange={updateComment}
            name='comment'
            placeholder='Add a comment'
            rows='2'
            className="photo-description-input"
          ></textarea>
          <button className="photo-edit-form-button" type='submit'>Comment</button>
        </form>
        </div>
        </div>
    )
};

export default CommentForm;