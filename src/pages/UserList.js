// Librairies
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// Composants
import Header from '../components/Header';
import Card from '../components/Card';

export default function UserList() {
  // Variables
  const apiKey = process.env.REACT_APP_API_KEY;

  // State
  const [listData, setListData] = useState([]);

  // UseEffect
  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(',')
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=${apiKey}&language=fr-FR`,
        )
        .then((response) =>
          setListData((listData) => [...listData, response.data]),
        );
    }
  }, []);

  return (
    <div className='user-list-page'>
      <Header />
      <h2>
        Coup de coeur <span>❤️</span>
      </h2>
      <div className='result'>
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
}
