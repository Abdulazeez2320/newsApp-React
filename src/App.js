import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
 const  apiKey= process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  return (
    <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <NavBar/>
      <Routes>
      <Route exact path="/" key="home" element={<News key="general" setProgress={setProgress} apiKey={apiKey} pageSize={6} country="us" category="general" />} />
          <Route path="/business" element={<News key="business" setProgress={setProgress} apiKey={apiKey} pageSize={6} country="us" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" setProgress={setProgress} apiKey={apiKey} pageSize={6} country="us" category="entertainment" />} />
          <Route path="/health" element={<News key="health" setProgress={setProgress} apiKey={apiKey} pageSize={6} country="us" category="health" />} />
          <Route path="/science" element={<News key="science" setProgress={setProgress} apiKey={apiKey} pageSize={6} country="us" category="science" />} />
          <Route path="/sports" element={<News key="sports" setProgress={setProgress} apiKey={apiKey} pageSize={6} country="us" category="sports" />} />
          <Route path="/technology" element={<News key="technology" setProgress={setProgress} apiKey={apiKey} pageSize={6} country="us" category="technology" />} />
      </Routes>
    </BrowserRouter>
    
  );

}
 export default App;
