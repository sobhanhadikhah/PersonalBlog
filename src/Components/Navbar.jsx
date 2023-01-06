import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CgMenuRight } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";
function Navbar() {
    const [Toggle, setToggle] = useState(false);
    function handleonToggle() {
        setToggle((prev) => !prev);
    }
    return (
        <div className='bg-[#1F222E]   sticky top-0 z-30 ' >
            <div className='animate__animated animate__fadeIn   max-w-[1240px] w-full flex justify-between items-center h-24 mx-auto px-4 text-white ' >
                <div className='flex ' >
                    <Link to={"/"} >
                        <h3 className='text-white font-bold ml-5 matrixfont   ' >
                            <span className='text-red-600 text-3xl ' >ODI</span> blog
                        </h3>
                    </Link>


                </div>
                <ul style={{ direction: "rtl" }} className='hidden md:flex font-semibold ' >
                    <NavLink to={"/"} >
                        <li className='  cursor-pointer hover:text-red-600 transition duration-100 ease-in mx-3' >خانه</li>
                    </NavLink>

                    <NavLink to={"/"} >
                        <li className='   cursor-pointer hover:text-red-600 transition duration-100 ease-in mx-3' >ارسال پست</li>
                    </NavLink>
                    <NavLink to={"users"} >
                        <li className='  cursor-pointer hover:text-red-600 transition duration-100 ease-in mx-3' > کاربران </li>
                    </NavLink>
                    <NavLink>
                        <li className='  cursor-pointer hover:text-red-600 transition duration-100 ease-in mx-3' >ورود </li>
                    </NavLink>  <NavLink>
                        <li className=' cursor-pointer hover:text-red-600 transition duration-100 ease-in  mx-3' >ثبت نام</li>
                    </NavLink>    </ul>
                <div className='flex md:hidden' >
                    {Toggle === false ? <CgMenuRight onClick={handleonToggle} size={30} /> : <TfiClose onClick={handleonToggle} size={30} />}

                </div>

                {Toggle && (
                    <div className='fixed md:hidden   bg-[#1F222E]  animate__animated animate__fadeInLeft top-0 left-0 w-[60%] h-full border-r border-r-gray-900'>
                        <h3 className='text-center font-semibold py-5 ' >
                            <span className='text-red-600 text-3xl  ' >ODI</span> blog
                        </h3>
                        <ul className='text-center  text-xl pt-24 ' >

                            <NavLink to={"/"} >
                                <li className='  py-4  cursor-pointer hover:text-red-600 transition duration-100 ease-in mx-3' >خانه</li>
                            </NavLink>
                            <NavLink to={"/"} >
                                <li className='  py-4  cursor-pointer hover:text-red-600 transition duration-100 ease-in mx-3' >ارسال پست</li>
                            </NavLink>
                            <NavLink to={"users"} >
                                <li className=' py-4 cursor-pointer hover:text-red-600 transition duration-100 ease-in mx-3' > کاربران </li>
                            </NavLink>
                            <NavLink>
                                <li className=' py-4 cursor-pointer hover:text-red-600 transition duration-100 ease-in mx-3' >ورود </li>
                            </NavLink>  <NavLink>
                                <li className=' py-4 cursor-pointer hover:text-red-600 transition duration-100 ease-in  mx-3' >ثبت نام</li>
                            </NavLink>
                        </ul>
                    </div>
                )}

            </div>
        </div>

    )
}

export default Navbar