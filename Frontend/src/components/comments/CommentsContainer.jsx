import React, { useEffect, useState } from 'react'

import { getCommentsData } from '../../data/comments';
import CommentsForm from './CommentsForm'
import Comment from './Comment'

function CommentsContainer({ classname, logginedUserId }) {
    const [comments, setComments] = useState([]);
    const mainComments = comments.filter((comment) => comment.parent === null);
    const [affectedComment, setAffectedComment] = useState(null);


    console.log(comments);
    useEffect(() => {
        const fetchData = async () => {
            const commentsData = await getCommentsData();
            setComments(commentsData);
        };
        fetchData();
    }, []);


    const addCommentHandler = (value, parent = null, replyOnUser = null) => {
        const newComment = {
            _id: Math.random().toString(),
            user: {
                _id: "c",
                name: "Jessica C. Stephens",
            },
            desc: value,
            post: "1",
            parent: parent,
            replyOnUser: replyOnUser,
            createdAt: new Date().toISOString(),
        };

        setComments((curState) => { return [newComment, ...curState] });
        setAffectedComment(null);
    };

    const updateCommentHandler = (value, commentId) => {
        const updateComments = comments.map((comment) => {
            if (comment._id === commentId) {
                return {
                    ...comment,
                    desc: value,
                };
            }
            return comment;
        });
        setComments(updateComments);
        setAffectedComment(null);
    };

    const deleteCommentHandler = (commentId) => {
        const updatedComments = comments.filter((comment) => comment._id !== commentId);
        setComments(updatedComments);
    };

    const getRepliesHandler = (commentId) => {
        return comments.filter((comment) => comment.parent === commentId)
            .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    };

    return (
        <div className={`${classname}`}>
            <CommentsForm btnLabel="Send" formSubmitHandler={(value) => addCommentHandler(value)} />
            <div className='space-y-4 mt-8'>
                {mainComments.map((comment) => (
                    <Comment
                        key={comment._id}
                        comment={comment}
                        logginedUserId={logginedUserId}
                        affectedComment={affectedComment}
                        setAffectedComment={setAffectedComment}
                        addComment={addCommentHandler}
                        updateComment={updateCommentHandler}
                        deleteCommentHandler={deleteCommentHandler}
                        replies={getRepliesHandler(comment._id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default CommentsContainer