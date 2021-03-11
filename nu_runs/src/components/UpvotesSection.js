import React from "react";
import axios from "axios";

const UpvotesSection= ({upvotes,setArticleInfo,articleName})=>{

    const addUpvotes= async()=>{
        const result = await axios.post(`http://localhost:8000/api/all-articles/${articleName}/upvote`);
        const article = result.data;
        const updatedArticle = article;
        updatedArticle["upvote"] +=1; 
        setArticleInfo(updatedArticle);
    }
    return <div>
        <button onClick={addUpvotes}>Add Upvote</button>
        <p>This article has {upvotes} upvotes</p>
    </div>
}
export default UpvotesSection;