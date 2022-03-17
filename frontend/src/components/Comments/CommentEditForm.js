import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import "../../../src/index.css"
import { getAllComments, updateAComment} from '../../store/comments';

const CommentEditForm = ({setEditFormIsOn, setUserId, setEdit, body, commentId, imageId, userId}) => {

    const [updatedBody, setUpdatedBody] = useState(body)
    const updateComment = (e) => setUpdatedBody(e.target.value);
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const handleSubmit =  async (e) => {
        e.preventDefault();
        setErrors([]);

        const updatedComment = {
            commentId,
            userId,
            imageId,
            updatedBody
        }

        await dispatch(updateAComment(updatedComment))
        await dispatch(getAllComments(imageId));
        setEdit(false)
        setUserId(null)
        setEditFormIsOn(false)
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
          <textarea
            defaultValue={body}
            required
            onChange={updateComment}
            name='comment'
            placeholder={body}
            className="photo-description-input"
          ></textarea>
          <button className="photo-edit-form-button" type='submit'>Done</button>
        </form>
        </>
    )
};

export default CommentEditForm;