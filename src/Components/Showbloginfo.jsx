import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { GraphQLClient, gql, request } from "graphql-request"
import contextstate from '../context/blogcontext';
import axios from 'axios';
import MapingBlog from './MapingBlog';
function Showbloginfo() {
    const { slug } = useParams();
    const [data, setDetail] = useState([]);

    useEffect(() => async () => {

        const { post } = await request(
            'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcf9c2ik03ip01uebusn8wv2/master',
            `
                {
                    
                    post(where:{slug: "${slug}"}){
                        id,
                        title,
                        datePublished,
                        content{
                            html
                        }
                        coverPhoto{
                            id
                            url
                        }
                        author{
                            id,
                            name,
                            avatar{
                              
                              url
                            }
                          }
                        
                    }
                    
                }
                `,
        );
        setDetail(post)



    }, [slug]);

    const { id, title, datePublished, content, coverPhoto, author } = data;
    if (!data) return <p>Fetching data...</p>
    return (
        <div style={{ direction: "rtl" }} className='   h-screen   ' >
            <div className='relative h-full w-full ' >
                <img className='w-full fixed h-full object-cover ' src={coverPhoto && coverPhoto.url} alt="" />
                <div className='absolute flex flex-col justify-center items-center bg-black   bg-opacity-50  top-0 bottom-0 left-0 right-0  ' >
                    <div className='bg-white bg-opacity-50  overflow-y-auto overscroll-auto  ' >
                        <h1 className='text-right text-3xl py-4 font-bold mx-3 ' >{title}</h1>
                        <div className=' max-w-[1240px] font-medium matrixfont   px-8 py-8 md:mx-auto mx-4   ' dangerouslySetInnerHTML={{ __html: content && content.html }} >


                        </div>
                        <div className='flex px-4 py-3 text-left justify-start items-center   ' >
                            <img src={author && author.avatar.url} className={`w-[28px] h-[25px] mx-3 rounded-full `} alt="" />
                            <h3 className=' font-medium text-lg  ' >{author && author.name}</h3>
                            <h3 className='mx-3' >{datePublished}</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Showbloginfo