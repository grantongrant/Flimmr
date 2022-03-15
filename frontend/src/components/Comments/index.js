import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments, deleteComment } from '../../store/comments';

import "../../../src/index.css";

const Comments = ({id}) => {

    const commentsObject = useSelector((state) => state.comment)
    const comments = Object.values(commentsObject);
    const [commentId, setCommentId] = useState(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllComments(id));
    }, [dispatch]);

    const deleteThisComment = (commentId) => {
        dispatch(deleteComment(commentId))
        dispatch(getAllComments(id))
    }

    return (
        <>
        {comments?.map(({id, body, User}) => (
            <div className="comment-container"
            onMouseEnter={() => setCommentId(id)}
            onMouseLeave={() => setCommentId(null)}>
                <div className="comment-author">{User.name}</div>
                <div className="comment-body">{body}</div>
                {commentId === id && 
                <div>
                    <button type="button">edit</button>
                    <button type="button">delete</button>
                </div>}
            </div>
        ))}
        </>
    )
};

export default Comments;