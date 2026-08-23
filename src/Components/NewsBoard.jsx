import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));

  }, [category]);


  return (
    <div className="container py-4">

      {/* Heading */}
      <h2 className="text-center mb-4">
        Latest{" "}
        <span className="badge bg-danger">
          News
        </span>
      </h2>


      {/* News Cards */}
      <div className="row g-4">

        {articles.map((news, index) => (

          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />

        ))}

      </div>

    </div>
  );
};