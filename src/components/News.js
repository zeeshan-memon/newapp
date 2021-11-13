import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News =(props)=> {
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
   
    // document.title = `${this.capitalizeFirstLetter(
    //   props.category
    // )} - NewsMonkey`;

  const updateNews = async () => {
    props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=98c5fbfc0baa4d9e9bf1b05341d977ea&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parseData = await data.json();
    props.setProgress(70);
    console.log(parseData);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
  }, [])
  //   handlePrevClick = async () => {
  //     this.setState({ page: this.state.page - 1 });
  //     this.updateNews();
  //   };

  //   handleNextClick = async () => {
  //     this.setState({ page: this.state.page + 1 });
  //     this.updateNews();
  //   };
  // async componentDidMount() {
  //   this.updateNews();
  // }

   const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=98c5fbfc0baa4d9e9bf1b05341d977ea&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };

    return (
      <>
        <h2 className="text-center my-3">
          NewsMonkey - {capitalizeFirstLetter(props.category)} Top
          Headline
        </h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner />}
        >
          <div className="container">
            <div className="row justify-content-center">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 row my-3" key={element.url}>
                    {/* <NewsItem title={element.title?element.title.slice(0, 90):""} description={element.description?element.description.slice(0, 60):""} imageUrl={element.urlToImage} newUrl={element.url}/>       */}
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newUrl={element.url}
                      author={element.author ? element.author : "Unknow"}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;{" "}
          </button>
        </div> */}
      </>
    );
  
}

News.defautProps = {
  country: "in",
  pageSize: 5,
  category: "general",
};

News.propstypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
