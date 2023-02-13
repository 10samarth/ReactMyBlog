import React, { useState, useEffect } from "react";
import NotFoundPage from "./NotFoundPage";
import ArticlesList from "../components/ArticlesList";
import CommentsList from "../components/CommentsList";
import articleContent from "./article-content";
import UpvotesSection from "../components/UpvotesSection";
import AddCommentForm from "../components/AddCommentForm";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
//   const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ name:'', content:[], upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, []);

  if (!articleInfo) return <NotFoundPage />;

  // const otherArticles = articleContent.filter(article => article.name !== name);
  return (
    <div>
      <div className="text-4xl font-bold pb-5 pt-5">{articleInfo.title}</div>

      <div className="pb-5 pt-5">
        <div>
          {articleInfo.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="pb-5 pt-5">
        <UpvotesSection
          articleName={name}
          upvotes={articleInfo.upvotes}
          setArticleInfo={setArticleInfo}
        />
      </div>

      <div className="pb-5 pt-5">
        <CommentsList comments={articleInfo.comments} />
      </div>
      <div className="pb-5 pt-5">
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      </div>
      {/* <h3>Other Articles:</h3> */}
      {/* <ArticlesList articles={otherArticles}></ArticlesList> */}
    </div>
  );
};

export default ArticlePage;
