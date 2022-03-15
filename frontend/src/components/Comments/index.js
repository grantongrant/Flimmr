import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments } from '../../store/comments';

import "../../../src/index.css";

const Comments = ({id}) => {

    const commentsObject = useSelector((state) => state.comment)
    const comments = Object.values(commentsObject);
    console.log(comments)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllComments(id));
    }, [dispatch]);

    return (
        <>
        <h1>Hello from comments, id # {id}</h1>
        {comments?.map(({body}) => (
            <div>{body}</div>
        ))}
        </>
    )
};

export default Comments;