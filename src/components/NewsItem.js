import React from "react";

const NewsItem = (props) =>{
  
    let { title, description, imageUrl, newUrl, author, date, source } = props;
    return (
      <div>
        <div className="card" style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flexEnd",
              position: "absolute",
              right: 0,
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toDateString()}
              </small>
            </p>
            <a href={newUrl} target=" _blank" className="btn btn-sm btn-dark">
              Load More
            </a>
          </div>
        </div>
      </div>
    )
  }
export default NewsItem;
