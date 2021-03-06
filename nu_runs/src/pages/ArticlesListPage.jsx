import React from "react";
import articleContent from "./article-content";
import ArticleList from "../components/ArticleList";

const ArticlesListPage = ()=>{

    fetch("/api/articles")
    return( <React.Fragment>
       <h1>Articles</h1>
       <ArticleList articles={articleContent}></ArticleList>
   </React.Fragment>);
}
export default ArticlesListPage;