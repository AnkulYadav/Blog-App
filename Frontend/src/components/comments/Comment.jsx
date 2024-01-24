import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

import { images } from '../../constants';

const Comment = ({ comment, logginedUserId, affectedComment, setAffectedComment }) => {
    const isUserLoggedIn = Boolean(logginedUserId);
    const commentBelongsToUser = comment.user._id === logginedUserId;
    const isReplying = affectedComment?._id === comment._id;

    return (
        <div className='flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] rounded-lg'>
            <img src={images.Author} alt='user profile' className='w-9 h-9 object-cover rounded-full' />
            <div className='flex-1 flex flex-col'>
                <h5 className='font-bold text-dark-hard text-xs'>{comment.user.name}</h5>
                <span className='text-xs text-dark-light opacity-60'>
                    {new Date(comment.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                    })}
                </span>
                <p className='font-opensans mt-[10px] text-dark-light text-sm '>{comment.desc}</p>
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
                        <button className='flex items-center space-x-2'>
                            <MdModeEdit className='w-4 h-auto' />
                            <span>Edit</span>
                        </button>
                    )}
                    {commentBelongsToUser && (
                        <button className='flex items-center space-x-2'>
                            <RiDeleteBin5Line className='w-4 h-auto' />
                            <span>Delete</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Comment