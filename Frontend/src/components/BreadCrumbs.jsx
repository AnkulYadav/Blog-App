import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumbs({data}) {
  return (
    <div className='flex items-center py-4 overflow-x-auto whitespace-nowrap'>
      {data.map((item, index) => (
        <div key={index} className='text-black opacity-50 text-xs md:text-sm font-roboto'>
            <Link to={item.link}>{item.name}</Link>
            {index !== data.length - 1 && <span className='mx-2'>/</span>}
        </div>
      ))}
    </div>
  )
}

export default BreadCrumbs
