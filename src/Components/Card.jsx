import React from 'react'
import { Link } from 'react-router-dom'

function Card({ title, coverPhoto, datepublished, content, slug, author }) {
    return (
        <div className='bg-[#0F172A]  overflow-hidden  rounded-md shadow-lg  mx-w-sm mx-5 md:mx-auto ' >
            <img className='rounded-md w-full ' src={coverPhoto.url} alt="coverPhoto" />
            <div className=' px-5 py-8 ' >

                <h3 className='text-[#F2FFE3] font-bold' >{title}</h3>

                <p className='text-gray-500 font-medium ' >{` ارسال شده در تاریخ: ${datepublished}`}</p>
            </div>
            <Link to={`/posts/${slug}`} className='flex' >
                <button className='text-[#F2FFE3] font-medium  mx-4  bg-blue-600 hover:bg-blue-800 w-full py-3 rounded-md my-4  ' >
                    دیدن این مطلب
                </button>
            </Link>
        </div>
    )
}

export default Card