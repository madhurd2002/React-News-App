import image from "../assets/news.jpeg";

export const NewsItem = ({ title, description, src, url }) => {

  return (
    <div className="col-12 col-sm-6 col-lg-4">

      <div className="card bg-dark text-white h-100 mb-3">

        {/* News Image */}
        <img
          src={src ? src : image}
          className="card-img-top"
          alt="News"
          style={{
            height: "200px",
            objectFit: "cover"
          }}
        />

        {/* Card Body */}
        <div className="card-body">

          <h5 className="card-title">
            {title
              ? `${title.slice(0, 50)}${title.length > 50 ? "..." : ""}`
              : "No Title Available"}
          </h5>

          <p className="card-text">
            {description
              ? `${description.slice(0, 90)}${description.length > 90 ? "..." : ""}`
              : "No Description Available"}
          </p>

          <a
            href={url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>

        </div>

      </div>

    </div>
  );
};