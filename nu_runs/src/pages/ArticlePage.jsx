import React, {useState,useEffect} from "react";
import ArticleList from "../components/ArticleList";
import articleContent from "./article-content";
import NotFoundPage from "./NotFouldPage";

import CommentList from "../components/CommentList";
import UpvotesSection from "../components/UpvotesSection";
import AddCommentForm from "../components/AddCommentForm";
const ArticlePage = ({match})=>{
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo,setArticleInfo] = useState({upvotes:0,comments:[]});

    useEffect(()=>{
        const fetchData =async()=>{
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json()
            setArticleInfo(body);
            console.log(articleInfo);
        }
        fetchData();
    },[name]);
    if(!article){return <NotFoundPage></NotFoundPage>}
    const otherArticles = articleContent.filter(article => article.name !== name);

   return (
   <React.Fragment>
       <h1>{article.title}</h1>
       <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}></UpvotesSection>
       {article.content.map((paragraph,key)=>(
           <p key={key}>{paragraph}</p>
       ))}
       <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}></AddCommentForm>
       <h2>Other Articles</h2>
       <CommentList comments={articleInfo.comments}></CommentList>
       <ArticleList articles={otherArticles}></ArticleList>
   </React.Fragment> );
}
export default ArticlePage;