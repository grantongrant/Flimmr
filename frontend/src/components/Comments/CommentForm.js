import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import "../../../src/index.css"
import { createComment, getAllComments} from '../../store/comments';

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
        <>
        <form onSubmit={handleSubmit}>
          <textarea
            value={body}
            required
            onChange={updateComment}
            name='comment'
            placeholder='Add a comment'
            rows='2'
          ></textarea>
          <button className="edit-submit-button" type='submit'>Comment</button>
        </form>
        </>
    )
};

export default CommentForm;