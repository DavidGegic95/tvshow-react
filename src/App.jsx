import { ApplicationProvider } from "./context.js";
import MainPage from "./pages/MainPage/MainPage";
import SingleShow from "./pages/SingleShow/SingleShow";
import Watchlist from "./pages/Watchlist/Watchlist.jsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Header/Header.jsx";
import ShowsPage from "./pages/ShowsPage/ShowsPage.jsx";
const url = "http://api.tvmaze.com/shows";

function App() {
  const [singleMovie, setSingleMovie] = useState(null);
  const [allShows, setAllShows] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [numberOFBookmarks, setNumberOfBookmarks] = useState(0);
  const [isWatchlist, setIsWatchlist] = useState(false);
  const [showSearchDropDown, setShowSearchDropDown] = useState(false);
  const [randomShows] = useState([]);
  const [homeButtonClicked, setHomeButtonClicked] = useState(false);

  const randomShowsFun = (data) => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (let i = 0; i < 15; i++) {
      let random = getRandomInt(1, 240);
      randomShows[i] = data[random];
    }
  };

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisiblity);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisiblity);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function fetchMovies() {
    fetch(url)
      .then((data) => data.json())
      .then((data) => setAllShows(data) || randomShowsFun(data));
  }

  useEffect(() => {
    fetchMovies();

    if (localStorage.getItem("movies")) {
      setNumberOfBookmarks(
        Object.values(JSON.parse(localStorage.getItem("movies")))?.length
      );
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header
        setHomeButtonClicked={setHomeButtonClicked}
        setShowSearchDropDown={setShowSearchDropDown}
        showSearchDropDown={showSearchDropDown}
        isWatchlist={isWatchlist}
        setIsWatchlist={setIsWatchlist}
        numberOFBookmarks={numberOFBookmarks}
        isFetched={isFetched}
        setIsFetched={setIsFetched}
        setSingleMovie={setSingleMovie}
      />

      <ApplicationProvider
        value={{
          homeButtonClicked,
          singleMovie,
          allShows,
          setSingleMovie,
          randomShows,
        }}
      >
        {showButton && (
          <div className={`scrollToTop`}>
            <button className="scrollUpButton" onClick={handleScrollToTop}>
              <img
                className="scrollUpImg"
                src={
                  "https://www.shareicon.net/data/256x256/2015/09/20/643612_arrows_512x512.png"
                }
                alt="scrollToTop"
              />
              Back to top
            </button>
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                setShowSearchDropDown={setShowSearchDropDown}
                numberOFBookmarks={numberOFBookmarks}
                setNumberOfBookmarks={setNumberOfBookmarks}
                singleMovie={singleMovie}
              />
            }
          />
          <Route
            path="shows/page/:num"
            element={
              <ShowsPage
                setSingleMovie={setSingleMovie}
                numberOFBookmarks={numberOFBookmarks}
                setNumberOfBookmarks={setNumberOfBookmarks}
              />
            }
          />
          <Route
            path="singleshow"
            element={
              <SingleShow
                setNumberOfBookmarks={setNumberOfBookmarks}
                setShowSearchDropDown={setShowSearchDropDown}
                setSingleMovie={setSingleMovie}
                singleMovie={singleMovie}
              />
            }
          />
          <Route
            path="watchlist"
            element={
              <Watchlist
                setSingleMovie={setSingleMovie}
                setNumberOfBookmarks={setNumberOfBookmarks}
                setShowSearchDropDown={setShowSearchDropDown}
                allShows={allShows}
                isWatchlist={isWatchlist}
              />
            }
          />
          <Route
            path="*"
            element={
              <MainPage
                setShowSearchDropDown={setShowSearchDropDown}
                numberOFBookmarks={numberOFBookmarks}
                setNumberOfBookmarks={setNumberOfBookmarks}
                singleMovie={singleMovie}
              />
            }
          />
        </Routes>
      </ApplicationProvider>

      <footer className="App-footer">Developed by David Gegic</footer>
    </div>
  );
}

export default App;
