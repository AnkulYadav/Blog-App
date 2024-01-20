import React from 'react'
import { images } from '../../../constants'
import { Link } from 'react-router-dom'

function SuggestedPosts({ className, heading, posts = [] , tags = []}) {
    return (
        <div className={` ${className} w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4`}>
            <h2 className='font-roboto font-medium text-dark-hard md:text-xl'>{heading}</h2>
            <div className='grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1'>
                {posts.map((post) => (
                    <div key={post._id} className='flex space-x-3 flex-nowrap items-center'>
                        <img src={post.image} alt={post.title} className='aspect-square object-cover rounded-lg w-1/5' />
                        <div className='text-dark-hard font-roboto font-medium text-sm'>
                            <h3 className='text-sm  font-roboto text-dark-hard font-bold md:text-base lg:text-lg'>{post.title}</h3>
                            <span className='text-xs opacity-60'>{post.createdAt}</span>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className='font-roboto font-medium text-dark-hard mt-8 md:text-xl'>Tags</h2>
            <div className='flex flex-wrap gap-x-2 gap-y-2 mt-4'>
                {tags.map((tag) => (
                    <Link to={`/blog/?category=${tag.name}`} className='inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm'>{tag.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default SuggestedPosts
