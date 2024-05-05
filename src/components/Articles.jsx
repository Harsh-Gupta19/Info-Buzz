import { useEffect, useState } from "react";
import ArticleItem from "./ArticleItem.jsx";
import ArticleContext from "../store/ArticleContext";
import Error from "./Error.jsx";
import { useContext } from "react";
import { key } from "../utils/env.js";

/**
 * Articles Component
 * 
 * Component responsible for fetching and displaying popular articles from The New York Times API.
 * Articles component displaying fetched articles or loading/fallback messages/Error message.
 * This is Container Component
 */

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const articleCtx = useContext(ArticleContext);
  const durationId = articleCtx.durationId;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.nytimes.com/svc/mostpopular/v2/viewed/${durationId}.json?api-key=${key}`, { signal }
        );
        if (!response.ok && response.status!==200) {
          setError({
            message:"Failed to Fetch Popular Articles",
          });
        }
        const result = await response.json();
        const data = await result.results;
        setArticles(data);
        setIsLoading(false);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch request cancelled');
        } else {
          setError({
            message:"Failed to Fetch Popular Articles",
          });
          setIsLoading(false);
        }
      }
    };
    fetchArticles();
    return () => controller.abort();
  }, [durationId]);

  if (error) {
    return <Error title="Error Occured" message={error.message} />
  }

  return (
    <>
      {isLoading && <p className="fallback-text">Fetching the data...</p>}
      {!isLoading && articles?.length > 0 && <ArticleItem isLoading={isLoading} articles={articles} />}
    </>
  );
};
export default Articles;
