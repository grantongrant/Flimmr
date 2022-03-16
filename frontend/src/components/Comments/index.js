import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments, deleteComment } from '../../store/comments';

import "../../../src/index.css";

const Comments = ({id}) => {

    const commentsObject = useSelector((state) => state.comment)
    const commentsList = Object.values(commentsObject);
    const comments = commentsList.reverse();
    const dispatch = useDispatch();
    const [render, setRender] = useState(false);
    
    useEffect(() => {
        dispatch(getAllComments(id));
    }, [dispatch, render]);

    const deleteThisComment = (commentId) => {
        dispatch(deleteComment(commentId))
        dispatch(getAllComments(id))
    }

    return (
        <>
        {comments?.map(({id, body, User}) => (
            <div className="comment-container">
                <div className="comment-top">
                    <div className="comment-author">{User.name}</div>
                    <div className="comment-edit-delete">
                        <button>edit</button>    
                        <button type="button" onClick={(e) => {
                            deleteThisComment(id)
                            setRender(!render)
                        }}>delete</button>      
                    </div>
                </div>
                <div className="comment-body">{body}</div>
            </div>
        ))}
        </>
    )
};

export default Comments;