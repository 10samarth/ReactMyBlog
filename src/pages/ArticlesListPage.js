import React, { useState, useEffect } from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";
import NotFoundPage from './NotFoundPage';

const ArticlesListPage = () => {
  const [articles, setarticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`/api/articles/getAll`);
        const article = await response.json();
        setarticles(article);
    }
    fetchData();
}, []);

if (!articles) return <NotFoundPage />


  //   fetchArticles().then(function(result){
  //     return result
  //   });

  return (
    <>
      <ArticlesList articles={articles} />
    </>
  );
};

export default ArticlesListPage;
