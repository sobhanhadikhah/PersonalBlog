import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function Skeletonloading() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444" >
            <div className='bg-[#000022] hover:scale-105  transition duration-100 ease-in overflow-hidden  rounded-md shadow-lg  max-w-sm mx-5  ' >
                <Skeleton className='rounded-md max-w-sm h-[200px] ' />
                <div className=' px-5 py-8 ' >

                    <Skeleton className='text-[#F2FFE3] font-bold' ></Skeleton>
                    <div className='flex text-center ' >
                        <Skeleton className={`rounded-full w-[25px] h-[19px] mx-4 my-4 `} />
                        <div className='justify-center flex items-center' >

                            <Skeleton className='text-[#F2FFE3] font-bold justify-center items-center text-center ' ></Skeleton>
                        </div>
                    </div>

                    <Skeleton className='text-gray-500 font-medium ' ></Skeleton>
                </div>

            </div>
        </SkeletonTheme>
    )
}

export default Skeletonloading