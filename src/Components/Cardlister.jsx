import React, { useContext, useEffect } from 'react'
import Card from './Card';
import Postcontext from '../context/context';

function Cardlister() {
    const context = useContext(Postcontext);

    return (
        <div className=' mx-auto max-w-[1240px] mt-5  ' >
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 ' >
                {context.posts.map((post) => {
                    return <Card key={post.id} title={post.title}
                        content={post.content} coverPhoto={post.coverPhoto}
                        datepublished={post.datePublished} slug={post.slug}
                        author={post.author} />
                })}
            </div>
        </div>
    )
}

export default Cardlister;