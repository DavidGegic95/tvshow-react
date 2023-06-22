import { ApplicationProvider } from "./context.js";
import MainPage from './pages/MainPage/MainPage';
import SingleShow from './pages/SingleShow/SingleShow';
import './App.css';
import { useEffect, useState } from 'react';
import Header from "./Header/Header.jsx";
const url = "http://api.tvmaze.com/shows"



function App() {

  const [singleMovie, setSingleMovie] = useState(null)
  const [allShows, setAllShows] = useState([])
  const [isFetched, setIsFetched] = useState(false)




  function fetchMovies() {
    fetch(url)
      .then(data => data.json())
      .then(data => setAllShows(data))


  }



  useEffect(() => {
    // setTimeout(fetchMovies, 1000)
    fetchMovies()

  }, [])


  return (
    <div className="App">
      <Header isFetched={isFetched} setIsFetched={setIsFetched} setSingleMovie={setSingleMovie} />
      <ApplicationProvider value={{ allShows, setSingleMovie }}>

        {!singleMovie ?
          <MainPage singleMovie={singleMovie}   ></MainPage>
          :
          <SingleShow setSingleMovie={setSingleMovie} singleMovie={singleMovie} />
        }
      </ApplicationProvider>

      <footer className='App-footer'>copyright2023</footer>
    </div>
  );
}

export default App;
