import { useState, useContext, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import Postcontext from './context/context';
import { GraphQLClient, gql } from "graphql-request";
import { Card, Cardlister, Showbloginfo } from "./Components/"
import { Route, Routes } from 'react-router-dom';
function App() {
  const Conetxpost = useContext(Postcontext);
  const grapcms = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcf9c2ik03ip01uebusn8wv2/master");
  const QUERY = gql`
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
    name,
    avatar{
      url
    }
    
    
  }
  coverPhoto {
    
     url,
    }
   
      
    }
  }`
  const [mepostss, setPostss] = useState([]);
  useEffect(() => async () => {
    const { posts } = await grapcms.request(QUERY);
    console.log(posts);
    setPostss(posts)


  }, [])
  return (
    <div   >
      <Postcontext.Provider value={{ posts: mepostss }}  >
        <Routes>
          <Route path='/' element={<Cardlister />} />
          <Route path='/posts/:id' element={<Showbloginfo />} />
        </Routes>

      </Postcontext.Provider>
    </div>
  )
}

export default App
