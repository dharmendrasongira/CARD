import React from "react";
import { PostContext} from "../Context/PostContext";
import { useContext } from "react";

function Paginations() {
    const {Page,setPage,hasPrev,hasNext}=useContext(PostContext);

    return(
        <div className="div">
        <button disabled={!hasPrev} onClick={()=>setPage(Page -1)}>Prev</button>
        <button disabled={!hasNext} onClick={()=>setPage(Page +1)}>Next</button>
        </div>
    );

}
export default Paginations;