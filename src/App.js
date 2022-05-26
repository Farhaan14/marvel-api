import React, {useState, useEffect} from 'react';
import axios from 'axios';

import PokemonList from './components/PokemonList';

import './App.css';
import Pagination from './components/Pagination';


function App() {
  const [pokemonURL, setPokemonURL] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageURL, setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    try {
      axios.get(currentPageURL, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setLoading(false);
        setNextPageURL(res.data.next);
        setPrevPageURL(res.data.previous);
        setPokemonURL(res.data.results.map(p => p.url))})
    } catch (error) {
      console.log(error);
    }

    return () => cancel()

  }, [currentPageURL])


  function handleNextPage() {
    setCurrentPageURL(nextPageURL);
  }

  function handlePrevPage() {
    setCurrentPageURL(prevPageURL);
  }


  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <PokemonList pokemonURL={pokemonURL} />
      <Pagination handleNextPage={nextPageURL ? handleNextPage : null} handlePrevPage={prevPageURL ? handlePrevPage : null} />
    </>
  );
}

export default App;
