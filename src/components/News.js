import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
    apiKey:''
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    
    };
    document.title = `${this.capitalize(this.props.category)} - Samachar `;
  }
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      loading: false,
      totalResults: parsedata.totalResults,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async() => {
    this.setState({page:this.state.page+1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
    });
  };
  render() {
    return (
      <>
        <h1 className="text-center fw-1">
          Top {this.capitalize(this.props.category)} HeadlInes
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row mt-5">
            {this.state.articles
              ? this.state.articles.map((element) => {
                  return (
                    <div
                      className=" col-lg-4 col-12 col-sm-6 my-3"
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
}

export default news;
