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
  const [numberOFBookmarks, setNumberOfBookmarks] = useState(0)






  //////Back to top button
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    // Button is displayed after scrolling for 300 pixels
    const handleScrollButtonVisiblity = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener('scroll', handleScrollButtonVisiblity);
    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisiblity);
    };
  }, []);

  const handleScrollToTop =
    () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  ////





  function fetchMovies() {
    fetch(url)
      .then(data => data.json())
      .then(data => setAllShows(data))


  }



  useEffect(() => {
    fetchMovies()
    setNumberOfBookmarks(Object.keys(localStorage).length)


  }, [])


  return (
    <div className="App">
      <Header numberOFBookmarks={numberOFBookmarks} isFetched={isFetched} setIsFetched={setIsFetched} setSingleMovie={setSingleMovie} />

      <ApplicationProvider value={{ allShows, setSingleMovie }}>
        {showButton && (
          <div className={`scrollToTop`}>
            <button
              className="scrollUpButton"

              onClick={handleScrollToTop}>
              <img className="scrollUpImg" src={"https://www.shareicon.net/data/256x256/2015/09/20/643612_arrows_512x512.png"} alt="scrollToTop" />
              Back to top
            </button>
          </div>)
        }

        {
          !singleMovie ?
            <MainPage numberOFBookmarks={numberOFBookmarks} setNumberOfBookmarks={setNumberOfBookmarks} singleMovie={singleMovie}></MainPage>
            :
            <SingleShow setSingleMovie={setSingleMovie} singleMovie={singleMovie} />
        }
      </ApplicationProvider >

      <footer className='App-footer'>copyright2023</footer>
    </div >
  );
}

export default App;
