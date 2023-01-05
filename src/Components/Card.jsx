import React from 'react'
import { Link } from 'react-router-dom'

function Card({ title, coverPhoto, datepublished, content, slug, author }) {
    return (
        <Link to={`/posts/${slug}`} className='flex' >
            <div className='bg-[#0F172A] hover:scale-105 transition duration-100 ease-in overflow-hidden  rounded-md shadow-lg  max-w-sm mx-5  ' >
                <img className='rounded-md w-full ' src={coverPhoto.url} alt="coverPhoto" />
                <div className=' px-5 py-8 ' >

                    <h3 className='text-[#F2FFE3] font-bold' >{title}</h3>
                    <div className='flex text-center ' >
                        <img src={author.avatar.url} className={`rounded-full w-[25px] h-[19px] mx-4 my-4 `} />
                        <div className='justify-center flex items-center' >

                            <h3 className='text-[#F2FFE3] font-bold justify-center items-center text-center ' >{author.name}</h3>
                        </div>
                    </div>

                    <p className='text-gray-500 text-sm font-semibold  ' >{` ارسال شده در تاریخ: ${datepublished}`}</p>
                </div>

            </div>
        </Link>
    )
}

export default Card