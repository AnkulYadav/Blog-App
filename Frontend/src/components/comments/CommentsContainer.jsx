import React, { useEffect, useState } from 'react'

import { getCommentsData } from '../../data/comments';
import CommentsForm from './CommentsForm'
import Comment from './Comment'

function CommentsContainer({ classname , logginedUserId }) {
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
            _id: "13",
            user: {
                _id: "c",
                name: "Jessica C. Stephens",
            },
            desc: value,
            post: "1",
            parent: parent,
            replyOnUser: replyOnUser,
            createdAt: "2022-12-31T17:22:05.092+0000",
        };

        setComments((curState) => { return [newComment, ...curState] });
    };
    return (
        <div className={`${classname}`}>
            <CommentsForm btnLabel="Send" formSubmitHandler={(value) => addCommentHandler(value)} />
            <div className='space-y-4 mt-8'>
               { mainComments.map((comment) =>(
                <Comment key={comment._id} comment={comment} logginedUserId={logginedUserId} affectedComment={affectedComment} setAffectedComment={setAffectedComment} />
               ))}
            </div>
        </div>
    )
}

export default CommentsContainer