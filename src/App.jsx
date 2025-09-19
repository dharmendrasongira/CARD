import React, { useContext } from 'react'
import {PostContext } from './Context/PostContext'
import PostList from './Component/PostList'
import Paginations from './Component/Paginations'



function App() {
 const {loading}=useContext(PostContext);

 if(loading) return <h2>Loading...</h2>

  return (
    <>
    <h1>Posts</h1>
    <PostList/>
    <Paginations/>
    </>
  )
}

export default App
