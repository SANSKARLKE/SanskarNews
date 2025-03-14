import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./component.css";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(24);
  const lstyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : props.colour,
  };
  const hlstyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : props.colour,
    paddingTop: "75px",
    paddingBottom: "5px",
  };
  document.title =
    "Sanskar News - " +
    props.category.slice(0, 1).toUpperCase() +
    props.category.slice(1);

  useEffect(() => {
    updateNews(page);
  }, []);

  const updateNews = async (lpage) => {
    props.setProg(10);
    let url = "";
    if (props.searchCheck === "NO") {
      url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${lpage}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?q=${props.query}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${lpage}`;
    }
    setLoading(true);
    let data = await fetch(url);
    props.setProg(30);
    let parsedData = await data.json();
    props.setProg(50);
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    props.setProg(100);
  };
  const fetchMoreData = () => {
    setPage(page + 1);
    updateNews(page + 1);
  };
  const checker = (a, b) => {
    if (a <= b) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div style={lstyle}>
        <h1 className="text-center" style={hlstyle}>
          Latest{" "}
          {props.category.charAt(0).toUpperCase() +
            props.category.slice(1) +
            " "}{" "}
          Headlines
        </h1>
        {/* {this.state.loading && <Loading />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={checker(articles.length, total)}
          loader={<Loading />}
          style={lstyle}
        >
          <div className="container">
            <div className="row">
              {articles.map((ele) => {
                return (
                  <div className="col-md-3 my-3" key={ele.url}>
                    <NewsItem
                      title={ele.title ? ele.title : "NO TILTLE FOUND"}
                      des={
                        ele.description
                          ? ele.description
                          : "NO DESCRIPTION FOUND"
                      }
                      img={ele.urlToImage ? ele.urlToImage : "vite.svg"}
                      page={ele.url ? ele.url : "/"}
                      author={ele.author ? ele.author : "Unknown"}
                      date={ele.publishedAt ? ele.publishedAt : "Unknown"}
                      source={ele.source.name}
                      colour={props.colour}
                      mode={props.mode}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.PropTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
