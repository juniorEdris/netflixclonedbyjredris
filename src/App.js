import React from 'react';
import Row from './Row';
import Banner from './Banner';
import requests from './connection/request';
import Navbar from './Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        isLargeRow
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}

export default App;
