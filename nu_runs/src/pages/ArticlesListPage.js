import React, { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";
import axios from "axios";
const ArticlesListPage = ()=>{

    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const result = await axios.get("http://localhost:8000/api/all-articles");
        const articles = result.data.data["all-articles"]
        setArticles(articles);
    }

    return( <React.Fragment>
        <div style={{textAlign:"center"}}>
        <h1>Articles</h1>
       <ArticleList articles={articles}></ArticleList>
        </div>
       
   </React.Fragment>);
}
export default ArticlesListPage;