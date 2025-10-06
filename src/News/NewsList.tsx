
import React, { useEffect, useState } from "react";
import axios from "axios";

interface NewsArticle {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
}

const NewsList: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    axios
      .get<{ results: NewsArticle[] }>(
        "https://api.spaceflightnewsapi.net/v4/articles?limit=10"
      )
      .then((res) => setNews(res.data.results))
      .catch((err) => console.error("Lỗi khi tải tin tức:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}></h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {news.map((article) => (
          <div
            key={article.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              background: "#fff",
            }}
          >
            {}
            <img
              src={article.image_url}
              alt={article.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            {}
            <h3 style={{ marginTop: "10px", fontSize: "18px" }}>
              {article.title}
            </h3>

            {}
            <p style={{ fontSize: "14px", color: "#555" }}>
              {article.summary.length > 100
                ? article.summary.slice(0, 100) + "..."
                : article.summary}
            </p>

            {}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "blue",
                
              }}
            >
              Đọc thêm tại {article.news_site}
            </a>

            {}
            <p style={{ fontSize: "12px", color: "gray", marginTop: "5px" }}>
              🕒 {new Date(article.published_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
