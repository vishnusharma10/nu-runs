import React, { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";
import axios from "axios";
import BackgroundImage from "../assets/img/theme/profile-cover.jpg";
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
        <div style={{textAlign:"center",backgroundImage: `url(${BackgroundImage})`, paddingBottom:"20px",borderRadius:"20px"}}>
        <h1 style={{color:"white",padding:"40px"}}>Articles</h1>
       <ArticleList articles={articles}></ArticleList>
        </div>
       
   </React.Fragment>);
}
export default ArticlesListPage;