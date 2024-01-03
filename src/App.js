import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey= process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress =(progress)=>{
    this.setState({progress: progress});
  }
  render() {
  return (
    <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <NavBar/>
      <Routes>
      <Route exact path="/" key="home" element={<News key="general" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category="general" />} />
          <Route path="/business" element={<News key="business" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category="entertainment" />} />
          <Route path="/health" element={<News key="health" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category="health" />} />
          <Route path="/science" element={<News key="science" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category="science" />} />
          <Route path="/sports" element={<News key="sports" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category="sports" />} />
          <Route path="/technology" element={<News key="technology" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category="technology" />} />
      </Routes>
    </BrowserRouter>
    
  );
}
}

