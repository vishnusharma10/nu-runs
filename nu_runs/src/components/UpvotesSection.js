import React from "react";
import axios from "axios";
import "../css/upvotes.css";

const UpvotesSection= ({upvotes,setArticleInfo,articleName})=>{

    const addUpvotes= async()=>{
        const result = await axios.post(`http://localhost:8000/api/all-articles/${articleName}/upvote`);
        const article = result.data;
        const updatedArticle = article;
        updatedArticle["upvote"] +=1; 
        setArticleInfo(updatedArticle);
    }
    return <div>
        <button style={{backgroundColor:"#3c6e71"}}id="upvotes-button"onClick={addUpvotes}>Add Upvote</button><br></br>
        <p>This article has <strong>{upvotes} </strong> upvotes</p>
    </div>
}
export default UpvotesSection;