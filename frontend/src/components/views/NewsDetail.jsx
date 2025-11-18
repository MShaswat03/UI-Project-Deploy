import { useParams, Link } from "react-router-dom";
import NewsData from "../../assets/NewsData.json";

export default function NewsDetail() {
  const { id } = useParams();
  const item = NewsData.find((news) => news.id === id);

  if (!item) {
    return <div style={{ padding: "2rem" }}>News item not found.</div>;
  }

  return (
    <div className="grid-container news-detail-page">
      <Link to="/news" style={{ textDecoration: "none", color: "#2563eb" }}>
        ← Back to Newsfeed
      </Link>

      <article className="news-detail-card">
        <p className="news-date">{item.date}</p>
        <h1 className="news-detail-title">{item.title}</h1>

        <p className="news-detail-summary">{item.summary}</p>

        {item.about && (
          <section className="news-about">
            <h2>About</h2>
            <p>{item.about}</p>
          </section>
        )}

        <section className="news-meta">
          <h3>Tags</h3>
          <div className="news-tags">
            {item.tags.map((tag) => (
              <span key={tag} className="news-tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
