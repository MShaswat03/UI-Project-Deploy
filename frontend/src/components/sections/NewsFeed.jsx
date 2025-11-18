import { Link } from "react-router-dom";
import NewsData from "../../assets/NewsData.json";

export default function NewsFeed({ selectedNewsFilters }) {
  // Normalize filters to lowercase (since data uses lowercase)
  const activeFilters = selectedNewsFilters.map((f) => f.toLowerCase());

  // If no filters selected → show ALL news
  const filteredNews =
    activeFilters.length === 0
      ? NewsData
      : NewsData.filter((item) => {
          const typeKey = item.type.toLowerCase();          // "events", "clubs", ...
          const tagKeys = item.tags.map((t) => t.toLowerCase()); // ["tech", "events", ...]

          // match either on type OR on tags
          return (
            activeFilters.includes(typeKey) ||
            tagKeys.some((tag) => activeFilters.includes(tag))
          );
        });

  return (
    <div className="newsfeed-section">
      <h2>Newsfeed</h2>

      {filteredNews.length === 0 ? (
        <p style={{ marginTop: "1rem", color: "#6b7280" }}>
          No news items match your selected filters.
        </p>
      ) : (
        <div className="news-cards">
          {filteredNews.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="news-card">
                <div className="news-card-header">
                  <span className="news-pill">{item.type}</span>
                  <span className="news-date">{item.date}</span>
                </div>

                <h3 className="news-title">{item.title}</h3>
                <p className="news-summary">{item.summary}</p>

                <div className="news-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="news-tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
