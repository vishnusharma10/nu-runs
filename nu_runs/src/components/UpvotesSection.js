import React from "react";

const UpvotesSection= ({upvotes,setArticleInfo,articleName})=>{

    const addUpvotes= async()=>{
        const result = await fetch(`/api/articles/${articleName}/upvote`,{method:"post"});
        const body = await result.json();
        console.log(body);
        setArticleInfo(body);
    }
    return <div>
        <button onClick={addUpvotes}>Add Upvote</button>
        <p>This article has {upvotes} upvotes</p>
    </div>
}
export default UpvotesSection;