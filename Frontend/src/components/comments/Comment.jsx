import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

import { images } from '../../constants';
import CommentsForm from './CommentsForm';

const Comment = ({
    comment,
    logginedUserId,
    affectedComment,
    setAffectedComment,
    addComment,
    parentId = null,
    updateComment,
    deleteCommentHandler,
    replies,
}) => {
    const isUserLoggedIn = Boolean(logginedUserId);
    const commentBelongsToUser = comment.user._id === logginedUserId;
    const isReplying = affectedComment && affectedComment.type === "replying" && affectedComment._id === comment._id;
    const isEditing = affectedComment && affectedComment.type === "editing" && affectedComment._id === comment._id;
    const repliedCommentId = parentId ? parentId : comment._id;
    const replyOnUser = comment.user._id;

    return (
        <div className='flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] rounded-lg'>
            <img src={images.Author} alt='user profile' className='w-9 h-9 object-cover rounded-full' />
            <div className='flex-1 flex flex-col'>
                <h5 className='font-bold text-dark-hard text-xs lg:text-sm'>{comment.user.name}</h5>
                <span className='text-xs text-dark-light opacity-60'>
                    {new Date(comment.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                    })}
                </span>
                {
                    !isEditing && (
                        <p className='font-opensans mt-[10px] text-dark-light text-sm '>{comment.desc}</p>
                    )
                }
                {
                    isEditing && (
                        <CommentsForm
                            btnLabel="Update"
                            formSubmitHandler={(value) => updateComment(value, comment._id)}
                            formCancelHandler={() => setAffectedComment(null)}
                            defaultValue={comment.desc}
                        />
                    )
                }
                <div className='flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3'>
                    {isUserLoggedIn && (
                        <button className='flex items-center space-x-2'
                            onClick={() =>
                                setAffectedComment({ type: "replying", _id: comment._id })
                            }
                        >
                            <FiMessageSquare className='w-4 h-auto' />
                            <span>Reply</span>
                        </button>

                    )}

                    {commentBelongsToUser && (
                        <>
                            <button className='flex items-center space-x-2'
                                onClick={() =>
                                    setAffectedComment({ type: "editing", _id: comment._id })
                                }
                            >
                                <MdModeEdit className='w-4 h-auto' />
                                <span>Edit</span>
                            </button>

                            <button className='flex items-center space-x-2'
                            onClick={() => deleteCommentHandler(comment._id)}
                            >
                                <RiDeleteBin5Line className='w-4 h-auto' />
                                <span>Delete</span>
                            </button>
                        </>
                    )}
                </div>
                {isReplying && (
                    <CommentsForm
                        btnLabel="Reply"
                        formSubmitHandler={(value) =>
                            addComment(value, repliedCommentId, replyOnUser)
                        }
                        formCancelHandler={() => setAffectedComment(null)}
                    />
                )}
                {
                    replies.length > 0 && (
                        <div>
                            {
                                replies.map((reply) => (
                                    <Comment
                                        key={reply._id}
                                        comment={reply}
                                        logginedUserId={logginedUserId}
                                        affectedComment={affectedComment}
                                        setAffectedComment={setAffectedComment}
                                        addComment={addComment}
                                        updateComment={updateComment}
                                        deleteCommentHandler={deleteCommentHandler}
                                        replies={[]}
                                        parentId={comment._id}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Comment