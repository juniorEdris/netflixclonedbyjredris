import React, { useEffect, useState } from 'react';
import axios from './connection/axios';
import './row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseURL = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = movie => {

    if (trailer) {
      setTrailer('');
    } else {
      movieTrailer(movie?.name || movie?.original_title ||'')
        .then(url => {
          console.log('trailer',url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get('v'));
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailer && <Youtube videoId={trailer} opts={opts} />}
    </div>
  );
}

export default Row;
