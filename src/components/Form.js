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
  const [searchInput, setSearchInput] = useState('star');
  const [voteFilter, setVoteFilter] = useState('goodToBad');

  // UseEffect
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}&language=fr-FR`,
      )
      .then((response) => setMoviesData(response.data.results));
  }, [searchInput]);

  return (
    <div className='form-component'>
      <div className='form-container'>
        <form>
          <input
            type='text'
            placeholder="Entrez le titre d'un film"
            id='search-input'
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <input type='submit' value='Rechercher' />
        </form>
        <div className='btn-sort-container'>
          <div
            className='btn-sort'
            id='goodToBad'
            onClick={() => setVoteFilter('goodToBad')}
          >
            Top<span>→</span>
          </div>
          <div
            className='btn-sort'
            id='badToGood'
            onClick={() => setVoteFilter('badToGood')}
          >
            Flop<span>→</span>
          </div>
        </div>
      </div>
      <div className='result'>
        {moviesData
          .slice(0, 12)
          .sort((a, b) => {
            if (voteFilter === 'goodToBad') {
              return b.vote_average - a.vote_average;
            } else if (voteFilter === 'badToGood') {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}
