import React, { useEffect, useContext, useState } from 'react'
import { GraphQLClient, gql, request } from "graphql-request";
import Postcontext from "../context/context";
import axios from 'axios';
function Users() {
    const context = useContext(Postcontext);
    const [users, setUsers] = useState([])
    useEffect(() => async () => {
        const { posts } = await request('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcf9c2ik03ip01uebusn8wv2/master', `
            {
                posts{
    
                    id,
                    title,
                    datePublished,
                    slug
                    content{
                      html
                    }
                  author{
                    id,
                    name,
                    createdAt
                    avatar{
                      url
                    }
                    
                    
                  }
                  coverPhoto {
                    
                     url,
                    }
                   
                      
                    }
            }
                
        `)
        setUsers(posts)

    }, [])

    return (

        <div className=' ' >
            <div className='max-w-[1240px] mx-auto rounded-md text-white my-[10vh] grid grid-cols   ' >
                <div className="table w-full rounded-md ">
                    <div className="table-header-group ...">
                        <div className="table-row  text-2xl  uppercase " style={{ direction: `rtl` }} >
                            <div className="table-cell  bg-[#0892A5] text-left ...">Name</div>
                            <div className="table-cell bg-[#06908f] text-left ...">ID</div>
                            <div className="table-cell  bg-[#0ca4a5] text-left ...">createdAt</div>
                        </div>
                    </div>
                    {users && users.map((post, index) => (
                        <div key={index} className="table-row-group text-gray-300 font-mono  font-medium ">
                            <div className="table-row">
                                <div className="table-cell px-5  py-3 border-b ...">{post.author.name}</div>
                                <div className="table-cell border-b ...">{post.id}</div>
                                <div className="table-cell border-b ...">{post.author.createdAt}</div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Users