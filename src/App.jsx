import MainPage from './pages/MainPage/MainPage';
import SingleShow from './pages/SingleShow/SingleShow';
import './App.css';
import { useEffect, useState } from 'react';
const url = "http://api.tvmaze.com/shows"
// const urlSeasons = "https://api.tvmaze.com/shows/1/seasons"

function App() {


  const [singleMovie, setSingleMovie] = useState(null)
  const [allShows, setAllShows] = useState([])


  function fetchMovies() {
    fetch(url)
      .then(data => data.json())
      .then(data => setAllShows(data))
  }

  console.log(crypto.randomUUID());



  useEffect(() => {
    fetchMovies()
  }, [])





  return (
    <div className="App">
      <header className="App-header">BitShow
      </header>
      {!singleMovie ?
        <MainPage singleMovie={singleMovie} allShows={allShows} setSingleMovie={setSingleMovie} ></MainPage>
        :
        <SingleShow singleMovie={singleMovie} />


      }


      <footer className='App-footer'>copyright2023</footer>
    </div>
  );
}

export default App;
