import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({article})=>{
   console.log(article.comments);
   const [comments, setComments] = useState([{readerName:1,comment:"comment"}]);

   useEffect(()=>{
       setComments(article.comments);
   },[article.comments])
   return (
   <>
   <h2>name</h2>
   { comments !== undefined ? comments.map((comment,key)=>{
        return <div key={key}>
            <h3>{comment.readerName}</h3>
            <p>{comment.comment}</p>
        </div>

        }):<p>Comment Here</p>
    }
                </>
                );
}
export default CommentList;