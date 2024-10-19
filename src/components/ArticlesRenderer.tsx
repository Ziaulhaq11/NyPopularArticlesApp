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
      {articles.map((article) => {
        const imageUrl = article.media.length
          ? article.media[0]["media-metadata"][
              article.media[0]["media-metadata"].length - 1
            ].url
          : "https://placehold.co/600x400/EEE/31343C";
        return (
          <div className="article" key={article.id}>
            <div
              className="image"
              onClick={() => navigate("/article", { state: article })}
            >
              <img src={imageUrl} alt="articleImage" loading="lazy" />
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
        );
      })}
    </div>
  );
};

export default ArticlesRenderer;
