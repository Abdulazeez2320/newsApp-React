import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function BusinessNews() {
  return <News pageSize={6} country="in" category="business" />;
}

function EntertainmentNews() {
  return <News pageSize={6} country="in" category="entertainment" />;
}
function HealthNews() {
  return <News pageSize={6} country="in" category="health" />;
}

function ScienceNews() {
  return <News pageSize={6} country="in" category="science" />;
}
function SportsNews() {
  return <News pageSize={6} country="in" category="sports" />;
}

function TechnologyNews() {
  return <News pageSize={6} country="in" category="technology" />;
}


export default class App extends Component {
  render() {
  return (
    <BrowserRouter>
      
      <NavBar/>
      <Routes>
      <Route exact path="/" key="home" element={<News pageSize={6} country="in" category="general" />} />
          <Route path="/business" element={<BusinessNews />} />
          <Route path="/entertainment" element={<EntertainmentNews />} />
          <Route path="/health" element={<HealthNews />} />
          <Route path="/science" element={<ScienceNews />} />
          <Route path="/sports" element={<SportsNews />} />
          <Route path="/technology" element={<TechnologyNews />} />
      </Routes>
    </BrowserRouter>
    
  );
}
}

