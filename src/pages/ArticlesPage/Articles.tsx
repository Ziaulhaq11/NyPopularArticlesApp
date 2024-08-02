import { useEffect, useState } from "react";
import "./Articles.css";
import ArticlesRenderer from "../../components/ArticlesRenderer";
import { IArticle } from "../../core/types";
const url =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=KrZBodWefz6sgBGFH9yCCY5VQVSIREga";

const Articles = () => {
  const [articles, setArticles] = useState<IArticle[]>();
  const [loading, setLoading] = useState(true);
  const fetchArticles = async () => {
    setLoading(true);
    await fetch(url)
      .then((res) => res.json())
      .then((articles) => setArticles(articles.results))
      .catch((err) => console.log(err));
    setLoading(false);
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  } else if (!articles || articles.length === 0) {
    return <h1>No Articles Found</h1>;
  }

  return (
    <div className="articles-container">
      <h1>NY Times Most Popular Articles</h1>
      <ArticlesRenderer articles={articles} />
    </div>
  );
};

export default Articles;
