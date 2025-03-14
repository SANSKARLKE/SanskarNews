import React, { Component } from "react";
import "./component.css";
const NewsItem = (props) => {
  let { title, des, img, page, author, date, source } = props;
  let ldate = new Date(date);
  const lstyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : props.colour,
    border: "2px solid green",
  };
  return (
    <>
      <div className="card" style={lstyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-success">
            {source ? source : "Unknown"}
          </span>
        </div>
        <img
          src={
            img
              ? img
              : "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/Majorana-1-005-4000px.jpg?quality=90&strip=all&crop=0%2C10.752607989199%2C100%2C78.494784021602&w=1200"
          }
          className="card-img-top"
          alt="news-image"
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title : "default"}</h5>
          <p className="card-text">
            {des
              ? des
              : "default desc Some quick example text to build on the card title and make up the bulk of the card's content."}
          </p>
          <p className="card-text">
            <small className="text-primary text-small">
              By {author} on {ldate.toGMTString()}
            </small>
          </p>
          <a href={page} target="_blank" className="btn btn-sm btn-success">
            See details
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
