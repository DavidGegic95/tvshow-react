import React, { useState } from "react";
import "./summary.css";

const Summary = ({ tempMovie, isGrid }) => {
  const [moreInfoWatchList, setMoreInfoWatchList] = useState(false);
  const displayNone = () => {
    return isGrid ? "displayNone" : "";
  };
  return (
    <div className="summaryDiv">
      <p
        className={`${
          moreInfoWatchList ? "summaryModal" : "summaryModal cut-text"
        } ${displayNone()}`}
      >
        {tempMovie?.summary
          ?.replace(/<\/?b[^>]*>/g, "")
          .replace(/<\/?i[^>]*>/g, "")
          .replace(/<\/?p[^>]*>/g, "")}
      </p>
      <button
        onClick={() => setMoreInfoWatchList((prev) => !prev)}
        className={`summaryInfo ${displayNone()}`}
      >
        {moreInfoWatchList ? "less info" : "more info"}
      </button>
    </div>
  );
};

export default Summary;
