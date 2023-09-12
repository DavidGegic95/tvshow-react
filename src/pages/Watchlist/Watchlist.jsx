import "./watchlist.css";
import ViewListIcon from "@mui/icons-material/ViewList";
import AppsIcon from "@mui/icons-material/Apps";
import StarIcon from "@mui/icons-material/Star";

import React, { useMemo, useState } from "react";
import Summary from "../../components/Summary/Summary";
import BookmarkButton from "../../components/BookmarkButton/BookmarkButton";
import { useNavigate } from "react-router-dom";

const Watchlist = ({
  setSingleMovie,
  setNumberOfBookmarks,
  setShowSearchDropDown,
}) => {
  const memoCallBack = () => {
    return localStorage.getItem("movies")
      ? [...Object.values(JSON.parse(localStorage.getItem("movies")))]
      : [];
  };
  const moviesWatchlist = useMemo(() => memoCallBack(), []);
  const [isGrid, setIsGrid] = useState(false);
  const movieGenre = (genre1, genre2) => {
    return genre1 && genre2 ? `${genre1},${genre2}` : genre1 ? `${genre1}` : "";
  };
  const classIsGrid = () => {
    return isGrid ? "viewGrid" : "viewFlex";
  };
  const displayNone = () => {
    return isGrid ? "displayNone" : "";
  };
  const navigate = useNavigate();
  const imgOnClick = (show) => {
    setSingleMovie(show);
    navigate("/singleshow");
  };

  return (
    <div onClick={() => setShowSearchDropDown(false)} className="watchlistPage">
      <div className="gridFlexViewButton">
        <span>{moviesWatchlist.length} titles</span>
        <h2 className="watchListtitle">Your Watchlist</h2>
        <button
          className="viewButton"
          onClick={() => setIsGrid((prev) => !prev)}
        >
          {isGrid ? (
            <ViewListIcon sx={{ backgroundColor: "#C2C2C2" }} />
          ) : (
            <AppsIcon sx={{ backgroundColor: "#C2C2C2" }} />
          )}
        </button>
      </div>

      <section className={`${classIsGrid()}`}>
        {moviesWatchlist.map((movie) => {
          const tempMovie = movie;

          const date = (tempMovie) => {
            let dateStart = tempMovie?.premiered
              ?.split("")
              .slice(0, 4)
              .join("");
            let dateEnd = tempMovie?.ended
              ? tempMovie?.ended?.split("").slice(0, 4).join("")
              : "";
            return dateStart !== dateEnd
              ? `${dateStart}-${dateEnd}`
              : `${dateStart}`;
          };

          return (
            <div
              key={tempMovie.id}
              className={isGrid ? "movieCartinGrid" : "watchlistMovieCard"}
            >
              <div key={tempMovie.id}>
                <img
                  onClick={() => imgOnClick(tempMovie)}
                  className="movieCardImg"
                  src={tempMovie?.image?.medium}
                  alt=""
                />
              </div>

              <div
                className={
                  isGrid ? "movieCardContentGrid" : "movieCardContentFlex"
                }
              >
                <div className="placeStart">
                  <p className="movieName">{tempMovie?.name}</p>
                  <span className={displayNone()}>{date(tempMovie)}|</span>
                  <span className={displayNone()}>
                    {movieGenre(tempMovie?.genres[0], tempMovie?.genres[1])}|
                  </span>
                  <span>
                    <StarIcon
                      className="starIconWatchist"
                      style={{ fill: "#f5c518" }}
                      sx={{ fontSize: 20 }}
                    />{" "}
                    {tempMovie?.rating?.average}
                  </span>
                </div>
                <BookmarkButton
                  setNumberOfBookmarks={setNumberOfBookmarks}
                  singleMovie={tempMovie}
                />
                <Summary isGrid={isGrid} tempMovie={tempMovie} />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Watchlist;
