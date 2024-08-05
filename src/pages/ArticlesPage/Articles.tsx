import "./Articles.css";
import ArticlesRenderer from "../../components/ArticlesRenderer";
import { IArticle } from "../../core/types";
import { useQuery } from "react-query";
const url =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=KrZBodWefz6sgBGFH9yCCY5VQVSIREga";

const Articles = () => {
  const fetchArticles = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data?.results as IArticle[];
  };

  const {isLoading, data:articles} = useQuery("articlesData", fetchArticles);
  if (isLoading) {
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
