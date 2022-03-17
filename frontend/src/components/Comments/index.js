import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments, deleteComment } from '../../store/comments';
import {RiEditBoxLine} from 'react-icons/ri';
import {BiTrash} from 'react-icons/bi';
import "../../../src/index.css";
import CommentEditForm from './CommentEditForm';

const Comments = ({imageId}) => {

    const commentsObject = useSelector((state) => state.comment)
    const sessionUser = useSelector(state => state.session.user);
    const comments = Object.values(commentsObject);
    const dispatch = useDispatch();
    const [render, setRender] = useState(false);
    const [edit, setEdit] = useState(false);
    const [commentId, setCommentId] = useState(null);
    const [descriptionEdit, setDescriptionEdit] = useState(false);
    const [userId, setUserId] = useState(null);
    const [editFormIsOn, setEditFormIsOn] = useState(false)
    
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
            <div className="comment-container" 
                onMouseEnter={(e) => {
                    setDescriptionEdit(true)
                    setUserId(User.id)}} 
                onMouseLeave={(e) => {
                    setDescriptionEdit(false)
                    setUserId(null)}}>
                <div className="comment-list-avatar camera"></div>
                <div className="comment-right">
                    <div className="author-and-edit-comment">
                    <div className="comment-author">{User.name}</div>
                    {userId === sessionUser.id && userId === User.id? 
                    <div className="comment-edit-delete">
                        {descriptionEdit === true && !editFormIsOn ?
                        <>
                        <button type="button" id="comment-edit-icon" onClick={(e) => {
                            setEdit(!edit)
                            setCommentId(id)
                            setEditFormIsOn(true)
                            }}><RiEditBoxLine/></button>    
                        <button type="button" id="comment-delete-icon" onClick={(e) => {
                            deleteThisComment(id)
                            setRender(!render)
                            }}><BiTrash/></button></>  : <><button id="comment-edit-icon"></button><button id="comment-delete-icon"></button></>}     
                    </div> :
                    null }
                    </div>
                    <div className="comment-body">
                    {
                    edit === true && commentId == id? 
                    <CommentEditForm 
                        setEdit={setEdit} 
                        body={body} 
                        commentId= {id} 
                        imageId={imageId} 
                        userId={User.id}
                        setUserId={setUserId}
                        setEditFormIsOn={setEditFormIsOn}/> 
                    : body
                    }
                    </div>
                </div>
            </div>
        ))}
        </>
    )
};

export default Comments;