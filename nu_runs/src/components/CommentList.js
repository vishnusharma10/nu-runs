import React from "react";

const CommentList = ({comments})=>{
   return  <>
   <h2>Comments</h2>
   { comments.map((comment,key)=>{
        return <div key={key}>
            <h3>{comment.name}</h3>
            <p>{comment.text}</p>
        </div>

        })}
                </>
}
export default CommentList;