import React from "react";
import { PostContext} from "../Context/PostContext";
import "./PostList.css"
import Card from "./Card";

function PostList() {
const {current}=React.useContext(PostContext);


    return(
        <div className="post-list">
        
        {current.map((post)=>(
            <Card key={post.id} post={post}/>
        ))}
        </div>
    );
}

export default PostList;