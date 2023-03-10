import React, { useContext, useEffect } from 'react'
import Card from './Card';
import Postcontext from '../context/context';
import Skeletonloading from '../loading/Skeletonloading';

function Cardlister({ loading }) {
    const context = useContext(Postcontext);

    return (
        <div className=' mx-auto max-w-[1240px] mt-5  ' >
            <div className='grid grid-cols-1  gap-8 lg:grid-cols-4 ' >
                {loading === false ? (<Skeletonloading />) : (
                    <>
                        {context.posts.map((post) => {
                            return <Card key={post.id} title={post.title}
                                content={post.content} coverPhoto={post.coverPhoto}
                                datepublished={post.datePublished} slug={post.slug}
                                author={post.author} />
                        })}
                    </>
                )}
            </div>
        </div>
    )
}

export default Cardlister;