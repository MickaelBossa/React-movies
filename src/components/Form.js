// Librairies
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Composants
import Card from './Card';

export default function Form() {
  // Variables
  const apiKey = process.env.REACT_APP_API_KEY;

  // States
  const [moviesData, setMoviesData] = useState([]);
  console.log(moviesData);

  // UseEffect
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=star&language=fr-FR`,
      )
      .then((response) => setMoviesData(response.data.results));
  }, []);

  return (
    <div className='form-component'>
      <div className='form-container'>
        <form>
          <input
            type='text'
            placeholder="Entrez le titre d'un film"
            id='search-input'
          />
          <input type='submit' value='Rechercher' />
        </form>
        <div className='btn-sort-container'>
          <div className='btn-sort' id='goodToBad'>
            Top<span>→</span>
          </div>
          <div className='btn-sort' id='badToGood'>
            Flop<span>→</span>
          </div>
        </div>
      </div>
      <div className='result'>
        {moviesData.slice(0, 12).map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}
