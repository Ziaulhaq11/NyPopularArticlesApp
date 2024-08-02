import { FC } from "react";
import { Link } from "react-router-dom";
import { IArticle } from "../core/types";

interface IArticlesRenderer {
  articles: IArticle[];
}

const ArticlesRenderer: FC<IArticlesRenderer> = ({ articles }) => {
  return (
    <div className="articles">
      {articles.map((article) => (
        <div className="article" key={article.id}>
          <Link to="/article" state={article}>
            <h3>{article.title}</h3>
          </Link>
          <h5>{article.abstract}</h5>
          <div className="details">
            <p>
              Published on <b>{article.published_date.toString()}</b>
            </p>
            <p>
              <b>{article.byline}</b>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesRenderer;
