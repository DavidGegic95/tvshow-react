import "./watchlist.css"
import { v4 as uuidv4 } from 'uuid';
import ViewListIcon from '@mui/icons-material/ViewList';
import AppsIcon from '@mui/icons-material/Apps';
import StarIcon from '@mui/icons-material/Star';

// import { useEffect } from "react"

import React, { useState } from 'react'
import Summary from "../../components/Summary/Summary";

const Watchlist = ({ isWatchlist, allShows }) => {
    const moviesWatchlist = localStorage.getItem("movies") ? [...Object.values(JSON.parse(localStorage.getItem("movies")))] : []
    const [isGrid, setIsGrid] = useState(false)
    const movieGenre = (genre1, genre2) => {
        return genre1 && genre2 ? `${genre1},${genre2}` : genre1 ? `${genre1}` : ""
    }
    const classIsGrid = () => {
        return isGrid ? "viewGrid" : "viewFlex"
    }
    const displayNone = () => {
        return isGrid ? "displayNone" : ""
    }


    return (
        <div className="watchlistPage">
            {/* <section className="watchListTitle">
                <h2>Your Watchlist</h2>

            </section> */}
            <div className="gridFlexViewButton">

                <span>{moviesWatchlist.length} titles</span>
                <h2>Your Watchlist</h2>
                <button className="viewButton" onClick={() => setIsGrid(prev => !prev)}>
                    {!isGrid && <ViewListIcon />}
                    {isGrid && <AppsIcon />}
                </button>

            </div>

            <section className={`${classIsGrid()}`}>

                {moviesWatchlist.map((movie) => {

                    const tempMovie = movie

                    const date = (tempMovie) => {
                        let dateStart = tempMovie?.premiered?.split("").slice(0, 4).join("")
                        let dateEnd = tempMovie?.ended ? tempMovie?.ended?.split("").slice(0, 4).join("") : ""
                        return dateStart !== dateEnd ? `${dateStart}-${dateEnd}` : `${dateStart}`
                    }

                    return (<div id={uuidv4()} className={isGrid ? "movieCartinGrid" : "watchlistMovieCard"}>
                        <div id={uuidv4()} >
                            <img className="movieCardImg" src={tempMovie?.image?.medium} alt="" />

                        </div>

                        <div className={isGrid ? "movieCardContentGrid" : "movieCardContentFlex"}>
                            <div className="placeStart">
                                <p className="movieName">{tempMovie?.name}</p>
                                <p className={displayNone()}>{date(tempMovie)}</p>
                                <span className={displayNone()}>{movieGenre(tempMovie?.genres[0], tempMovie?.genres[1])}</span>
                                <p><StarIcon style={{ fill: "#f5c518" }} sx={{ fontSize: 14 }} /> {tempMovie?.rating?.average}</p>

                            </div>

                            <Summary isGrid={isGrid} tempMovie={tempMovie} />

                        </div>




                    </div>)



                })}
            </section >




        </div >
    )
}

export default Watchlist