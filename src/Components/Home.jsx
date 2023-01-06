import React from 'react'
import Cardlister from './Cardlister';
import matrixback from "../assets/matrix-back.jpg";
import Typewriter from "typewriter-effect";
function Home({ skeletonloading }) {
    return (
        <div>
            <div className='mx-6 md:mx-auto max-w-[1240px] mb-[8vh]  text-green-600 text-center uppercase text-3xl matrixfont py-24 bg-black rounded-lg  ' >

                <h3 className='text-white' >
                    <span className='text-red-600' >ODI</span>blog
                </h3>
                <Typewriter
                    options={{
                        strings: ['Wake up NEO....', 'The matrix has waiting you'],
                        autoStart: true,
                        loop: true
                    }}
                />
            </div>
            <Cardlister loading={skeletonloading} />


        </div>
    )
}

export default Home