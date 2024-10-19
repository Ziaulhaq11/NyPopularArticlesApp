import { useLocation } from "react-router-dom";
import "./Article.css";
import { IArticle } from "../../core/types";
const Article = () => {
  const article: IArticle = useLocation().state;
  const keywords = article.adx_keywords.replaceAll(";", ", ");
  const imageUrl = article.media.length
    ? article.media[0]["media-metadata"][
        article.media[0]["media-metadata"].length - 1
      ].url
    : "https://placehold.co/600x400/EEE/31343C";
  return (
    <div className="article-container">
      <h1>{article.title}</h1>
      <h3>Description : {article.abstract}</h3>
      <img src={imageUrl} alt="articleImage" loading="lazy" />
      <p>Keywords of this article are:-</p>
      <div className="keywords-container">
        {article.des_facet.map((key) => (
          <b key={key}>{key},</b>
        ))}
      </div>
      <p>Description of Fascets are:-</p>
      <b>{keywords}</b>
      <p>
        Source of this article is <b>{article.source}</b>
      </p>
      <p>
        Published on <b>{article.published_date.toString()}</b>
      </p>
      <p>
        Updated on <b>{article.updated.toString()}</b>
      </p>
      <p>
        Section is <b>{article.section} & </b> SubSection is{" "}
        <b>{article.subsection}</b>
      </p>
      <p>
        <b>{article.byline}</b>
      </p>
    </div>
  );
};

export default Article;
