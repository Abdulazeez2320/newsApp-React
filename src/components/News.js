import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";

export class news extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalize(s)
  {
      return s[0].toUpperCase() + s.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    }
    document.title=`${this.capitalize(this.props.category)} - Samachar `
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51ae79648918445f8ae864d3c2d8ffe5&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center fw-1">Top {this.capitalize(this.props.category)} HeadlInes</h1>
        {this.state.loading && <Spinner />}
        <div className="row mt-5">
          {!this.state.loding && this.state.articles
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
        <div className=" d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            {" "}
            &larr; previous{" "}
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark "
            onClick={this.handleNext}
          >
            {" "}
            next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default news;
