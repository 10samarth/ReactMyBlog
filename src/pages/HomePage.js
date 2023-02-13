import React from 'react';
import ArticlesListPage from './ArticlesListPage';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const HomePage = () => (
    <>

        <h1 className="text-6xl font-bold pb-5 pt-5" >Welcome</h1>
        <p className="text-4xl font-bold pb-5 pt-5">Read cool blogs</p>
        <ArticlesListPage />

    </>

);

export default HomePage;