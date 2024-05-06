import LogoImg from "../assets/newyork.png";

/**
 * ArticleItem Component
 * 
 * Component responsible for rendering individual article items.
 *
 * isLoading - Flag indicating whether data is being loaded.
 * articles - Array of articles to be displayed.
 * 
 * ArticleItem component displaying list of articles or a fallback message.
 */

const ArticleItem = ({ isLoading, articles }) => {

  const getListItem = (articles) => {
    return articles.map((article) => {
      const metaMedia = article?.media[0]?.[`media-metadata`];
      const caption =  article.media && article?.media[0]?.caption ? article?.media[0].caption : "Testing";
      let image =
        (metaMedia && metaMedia.find((e) => e.height > 200)?.url) || LogoImg;
      return (
        <li key={`img-${article.id}`} className="article-item">
          <article>
            <img src={image} alt={caption} />
            <div>
              <h3>{article.title}</h3>
              <p className="article-item-description">{article.abstract}</p>
            </div>
          </article>
        </li>
      );
    });
  };

  return (
    <>
      {!isLoading && articles?.length === 0 ? (
        <p className="fallback-text">No Articles available...</p>
      ) : (
        <ul id="articles">{getListItem(articles)}</ul>
      )}
    </>
  );
};

export default ArticleItem;
