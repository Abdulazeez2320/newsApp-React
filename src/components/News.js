import React, { useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import "../news.css"

const News =(props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  
  const capitalize = (s)=> {
    return s[0].toUpperCase() + s.slice(1);
  }
  document.title = `${capitalize(props.category)} - Samachar `;

  const updateNews= async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const fetchMoreData = async() => {
    setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles));
    setTotalResults(parsedata.totalResults)
  };

    return (
      <>
        <h1 className="text-center fw-1 mt-5 pt-5">
          Top {capitalize(props.category)} HeadlInes
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row mt-5">
            {articles
              ? articles.map((element) => {
                  return (
                    <div
                      className=" col-lg-4 col-12 col-sm-6 my-3 card-item"
                      key={element.url}
                    >
                      <NewsItem
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt.slice(0, 10)}
                        source={element.source.name}
                      />
                    </div>
                  );
                })
              : ""}
          </div>
          </div>
        </InfiniteScroll>
      </>
    );

}
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
  apiKey:''
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


export default News;
