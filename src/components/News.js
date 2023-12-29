import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'

export class news extends Component {
  static defaultProps ={
    country:"in",
    pageSize:6,
    category:"general"
  };
  static propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

 handlePrev = async()=>{
  let url =
  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51ae79648918445f8ae864d3c2d8ffe5&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
  this.setState({loading:true})
  let data = await fetch(url);
  let parsedata = await data.json();
  this.setState({ 
    articles: parsedata.articles ,
    page:this.state.page-1,
    loading:false
  });
  }
  handleNext = async ()=>{
    if(!(this.state.page+1 > Math.ceil((this.state.totalResults)/this.props.pageSize)) ){

      console.log('this is next')
      let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51ae79648918445f8ae864d3c2d8ffe5&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true})
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ 
      articles: parsedata.articles ,
      page:this.state.page+1,
      loading:false
    });
    } 
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51ae79648918445f8ae864d3c2d8ffe5&page=1&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
      let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults,loading:false });
  }
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center fw-1">Top HeadLInes</h1>
        {this.state.loading  &&<Spinner/>}
        <div className="row mt-5">
          { !this.state.loding&&this.state.articles?this.state.articles.map((element) => {
            return (
              <div className=" col-lg-4 col-12 col-sm-6 my-3" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          }):''}
        </div>
        <div className=" d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick= {this.handlePrev}>
          {" "}
          &larr; previous{" "}
        </button>
        <button disabled={this.state.page+1 > Math.ceil((this.state.totalResults)/this.props.pageSize)} type="button" className="btn btn-dark " onClick= {this.handleNext}>
          {" "}
          next &rarr;{" "}
        </button>
        </div>
       
      </div>
    );
  }
}

export default news;
