import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IArticle } from "../core/types";

interface IArticlesRenderer {
  articles: IArticle[];
}

const ArticlesRenderer: FC<IArticlesRenderer> = ({ articles }) => {
  const navigate = useNavigate();
  return (
    <div className="articles">
      {articles.map((article) => (
        <div className="article" key={article.id}>
          <div
            className="image"
            onClick={() => navigate("/article", { state: article })}
          >
            {article.media.length ? (
              <img
                src={article.media[0]["media-metadata"][2].url}
                alt="articleImage"
              />
            ) : (
              <img
                src="https://placehold.co/600x400/EEE/31343C"
                alt="articleImage"
              />
            )}
          </div>
          <div className="content">
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
        </div>
      ))}
    </div>
  );
};

export default ArticlesRenderer;
