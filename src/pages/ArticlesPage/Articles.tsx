import { useState } from "react";
import "./Articles.css";
import ArticlesRenderer from "../../components/ArticlesRenderer";
import { IArticle } from "../../core/types";
import { useQuery } from "react-query";
import { Days } from "../../core/enums";

const url =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=KrZBodWefz6sgBGFH9yCCY5VQVSIREga";

const Articles = () => {
  const [days, setDays] = useState<Days>(Days.ONE);
  const fetchArticles = async (): Promise<IArticle[]> => {
    const response = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${days}.json?api-key=KrZBodWefz6sgBGFH9yCCY5VQVSIREga`
    );
    const data = await response.json();
    return data?.results;
  };

  const { isLoading, data: articles } = useQuery(
    ["articlesData", days],
    fetchArticles
  );
  if (isLoading) {
    return <div className="loader"></div>;
  } else if (!articles || articles.length === 0) {
    return <h1>No Articles Found</h1>;
  }
  return (
    <div className="articles-container">
      <div className="header">
        <h1>NY Times Most Popular Articles</h1>
        <div className="select-container">
          <label htmlFor="days">Select Days</label>
          <select
            className="days-select"
            name="daysCount"
            id="days"
            onChange={(e) => setDays(Number(e.target.value))}
          >
            <option value={Days.ONE}>{Days.ONE}</option>
            <option value={Days.SEVEN}>{Days.SEVEN}</option>
            <option value={Days.THIRTY}>{Days.THIRTY}</option>
          </select>
        </div>
      </div>
      <ArticlesRenderer articles={articles} />
    </div>
  );
};

export default Articles;
