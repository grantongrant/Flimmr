import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments, deleteComment } from '../../store/comments';

import "../../../src/index.css";
import CommentEditForm from './CommentEditForm';

const Comments = ({imageId}) => {

    const commentsObject = useSelector((state) => state.comment)
    const comments = Object.values(commentsObject);
    const dispatch = useDispatch();
    const [render, setRender] = useState(false);
    const [edit, setEdit] = useState(false);
    const [commentId, setCommentId] = useState(null);
    
    useEffect(() => {
        dispatch(getAllComments(imageId));
    }, [dispatch, render]);

    const deleteThisComment = (commentId) => {
        dispatch(deleteComment(commentId))
        dispatch(getAllComments(imageId))
    }

    return (
        <>
        {comments?.map(({id, body, User}) => (
            <div className="comment-container">
                <div className="comment-top">
                    <div className="comment-author">{User.name}</div>
                    <div className="comment-edit-delete">
                        <button type="button" onClick={(e) => {
                            setEdit(!edit)
                            setCommentId(id)
                            }}>edit</button>    
                        <button type="button" onClick={(e) => {
                            deleteThisComment(id)
                            setRender(!render)
                            }}>delete</button>      
                    </div>
                </div>
                <div className="comment-body">
                    {
                    edit === true && commentId == id? 
                    <CommentEditForm setEdit={setEdit} body={body} commentId= {id} imageId={imageId} userId={User.id}/> 
                    : body
                    }
                </div>
            </div>
        ))}
        </>
    )
};

export default Comments;