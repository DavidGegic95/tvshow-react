import "./watchlist.css"
import { v4 as uuidv4 } from 'uuid';
import ViewListIcon from '@mui/icons-material/ViewList';
import AppsIcon from '@mui/icons-material/Apps';

// import { useEffect } from "react"

import React, { useState } from 'react'

const Watchlist = ({ isWatchlist, allShows }) => {
    const moviesWatchlist = [...Object.values(localStorage)]
    const [isGrid, setIsGrid] = useState(false)
    const [moreInfoWatchList, setMoreInfoWatchList] = useState(false)
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
            <section className="watchListTitle">
                <h2>Your Watchlist</h2>
                <span>{moviesWatchlist.length} titles</span>

            </section>
            <button onClick={() => setIsGrid(prev => !prev)}>
                {!isGrid && <ViewListIcon />}
                {isGrid && <AppsIcon />}
            </button>
            <section className={`${classIsGrid()}`}>

                {moviesWatchlist.map((movie) => {

                    const tempMovie = JSON.parse(movie)

                    const date = (tempMovie) => {
                        let dateStart = tempMovie?.premiered?.split("").slice(0, 4).join("")
                        let dateEnd = tempMovie.ended ? tempMovie?.ended?.split("").slice(0, 4).join("") : ""
                        return dateStart !== dateEnd ? `${dateStart}-${dateEnd}` : `${dateStart}`
                    }

                    return (<div id={uuidv4()} className={isGrid ? "movieCartinGrid" : "watchlistMovieCard"}>
                        <div >
                            <img className="movieCardImg" src={tempMovie?.image?.medium} alt="" />

                        </div>

                        <div className={isGrid ? "movieCardContentGrid" : "movieCardContentFlex"}>
                            <div className="placeStart">
                                <p>{tempMovie?.name}</p>
                                <p className={displayNone()}>{date(tempMovie)}</p>
                                <span className={displayNone()}>{movieGenre(tempMovie?.genres[0], tempMovie?.genres[1])}</span>
                                <p>{tempMovie?.rating?.average}</p>

                            </div>

                            <div className="summaryDiv">

                                <p className={`${moreInfoWatchList ? 'summaryModal' : 'summaryModal cut-text'} ${displayNone()}`}>
                                    {tempMovie.summary.replace(/<\/?b[^>]*>/g, "").replace(/<\/?i[^>]*>/g, "").replace(/<\/?p[^>]*>/g, "")}</p>
                                <button onClick={() => setMoreInfoWatchList(prev => !prev)} className={`'summaryButtonMoreInfo' ${displayNone()}`} >
                                    {moreInfoWatchList ? 'less info' : 'more info'}</button>
                                {/* <p className={`summary ${displayNone()}`} dangerouslySetInnerHTML={{ __html: tempMovie?.summary }}></p> */}
                            </div>

                        </div>




                    </div>)



                })}
            </section >




        </div >
    )
}

export default Watchlist