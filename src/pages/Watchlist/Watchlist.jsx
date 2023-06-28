import "./watchlist.css"

import { useEffect } from "react"

import React from 'react'

const Watchlist = ({ isWatchlist }) => {
    let moviesWatchlist = []

    useEffect(() => {

        moviesWatchlist = [...Object.keys(localStorage)]
        console.log(moviesWatchlist);





    }, []);

    return (
        <div className="watchlistPage">
            <section className="watchListTitle">
                <h2>Your Watchlist</h2>
            </section>
            <section className="viewOptionsWatchList">
                <span>9 titles</span>
                <button>Grid,List view</button>
            </section>



        </div>
    )
}

export default Watchlist