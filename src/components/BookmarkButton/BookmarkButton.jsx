import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import "./bookmarkbutton.css";

const BookmarkButton = ({ singleMovie, setNumberOfBookmarks }) => {
  const [buttonText, setButtonText] = useState("Added to watchlist");
  const [isClicked, setIsClicked] = useState(true);

  const addToWatchlist = () => {
    setIsClicked((prev) => !prev);
    let existing = localStorage.getItem("movies");
    existing = existing ? JSON.parse(existing) : {};
    let key = `${singleMovie.id}`;
    existing[key] = singleMovie;
    localStorage.setItem("movies", JSON.stringify(existing));
    if (isClicked) {
      setButtonText("Add to watchlist");
      let existing = localStorage.getItem("movies");
      existing = existing ? JSON.parse(existing) : {};
      let key = `${singleMovie.id}`;
      delete existing[key];
      localStorage.setItem("movies", JSON.stringify(existing));
      setNumberOfBookmarks(
        Object.keys(JSON.parse(localStorage.getItem("movies"))).length
      );
    } else {
      setButtonText("Added to watchlist");
      setNumberOfBookmarks(
        Object.keys(JSON.parse(localStorage.getItem("movies"))).length
      );
    }
  };

  return (
    <button className="bookmarkButton" onClick={addToWatchlist}>
      {buttonText}
      {isClicked ? (
        <CheckIcon className="singleShowIcon" />
      ) : (
        <AddIcon className="singleShowIcon" />
      )}
    </button>
  );
};

export default BookmarkButton;
