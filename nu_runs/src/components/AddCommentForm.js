import React,{useState} from "react";

const AddCommentForm = ({articleName,setArticleInfo})=>{
    const [username,setUserName] = useState("");
    const [comment,setComment] = useState("");

    const addComment = async() =>{
        const result = await fetch(`/api/articles/${articleName}/comment`,{method:"post",body:JSON.stringify({
            name:username,
            text:comment,
        }),
    headers:{"Content-Type":"application/json"}});
     const body = await result.json()
     setArticleInfo(body);
     setUserName("");
     setComment("");
    }
     return <div>
        <h3>Add a Comment</h3>
        <label>
            Name:
            <input type="text" value={username} onChange={(event)=>{setUserName(event.target.value)}}></input>
        </label>
        <label>
            Comment:
            <textarea rows="5"cols="50" value={comment} onChange={(event)=>setComment(event.target.value)}></textarea>
        </label>
        <button onClick={addComment}>Add Comment</button>
    </div>
}
export default AddCommentForm;