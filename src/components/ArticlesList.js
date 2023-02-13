import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <>
        <Link
          className="article-list-item"
          key={key}
          to={`/article/${article.name}`}
        >
          <div className="text-4xl font-bold pb-5 pt-5">
            {article.title}
          </div>
          
        </Link>
        <hr  className="text-4xl font-bold pb-5 pt-5"/>
      </>
    ))}
  </>
);

export default ArticlesList;
