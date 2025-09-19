/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useState,useEffect } from "react";
import axios from "axios";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const[loading,setLoading]=useState(true);
  const[Page,setPage]=useState(0);
    const pageSize=6;

useEffect(()=>{
   const fetchData=async()=>{
    setLoading(true);
    try{
      const response=await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setPosts(response.data);
      console.log(response.data);
      setLoading(false);
    }catch(error){
      console.error("Error fetching data:",error);
      setLoading(false);
    }
  }
fetchData();
},[])

const Start = Page *pageSize;
const current =  posts.slice(Start,Start + pageSize);
const value ={
    posts,
    current,
    loading,
    Page,
    hasPrev:Page>0,
    hasNext:Start +Page <posts.length,
    setPage,

}
    return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

    

