// import { Accordion } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./singleShow.css"
import Accordion from "../../components/Accordion/Accordion"
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';


const url = "http://api.tvmaze.com/shows"




function SingleShow({ singleMovie, setShowSearchDropDown, setNumberOfBookmarks }) {
    const [seasons, setSeasons] = useState([])
    const [cast, setCast] = useState([])
    let savedMovies = JSON.parse(localStorage.getItem("movies"));
    let key = singleMovie.id
    let text;
    let is
    if (savedMovies[key] = savedMovies) {
        text = "Added to watchlist"
        is = true


    } else {
        text = "Add to watchlist"
        is = false
    }

    const [buttonText, setButtonText] = useState(text)
    const [isClicked, setIsClicked] = useState(is)






    const addToWatchlist = () => {
        setIsClicked(prev => !prev)
        let existing = localStorage.getItem("movies");
        existing = existing ? JSON.parse(existing) : {};
        let key = `${singleMovie.id}`
        existing[key] = singleMovie;
        localStorage.setItem('movies', JSON.stringify(existing));
        if (!isClicked) {
            setButtonText("Added to watchlist")
            setNumberOfBookmarks(Object.keys(JSON.parse(localStorage.getItem("movies"))).length)
        } else {
            setButtonText("Add to watchlist")
            let existing = localStorage.getItem("movies");
            existing = existing ? JSON.parse(existing) : {};
            let key = `${singleMovie.id}`
            delete existing[key]
            localStorage.setItem('movies', JSON.stringify(existing));
            setNumberOfBookmarks(Object.keys(JSON.parse(localStorage.getItem("movies"))).length)
        }



    }



    function fetchSeasons() {
        fetch(`${url}/${singleMovie?.id}/seasons`)
            .then(data => data.json())
            .then(data => console.log(data) || setSeasons(data))
    }

    function fetchCast() {
        fetch(`${url}/${singleMovie?.id}/cast`)
            .then(data => data.json())
            .then(data => console.log(data) || setCast(data))

    }


    useEffect(() => {
        fetchSeasons()
        fetchCast()
    }, [])



    // let replaced = singleMovie.summary.replace(/<\/?p[^>]*>/g, "");
    // replaced = replaced.replace(/<\/?b[^>]*>/g, "")

    return (
        <div onClick={() => setShowSearchDropDown(false)} className="singleShowPage">
            <h1>{singleMovie?.name}</h1>
            <div className='singleShowContent'>
                <img className='singlePageImage' src={singleMovie?.image?.original} alt="" />

                <div className='summaryAccordionDiv'>
                    <div className='singleMovieSummary' dangerouslySetInnerHTML={{ __html: `${singleMovie?.summary}` }} />

                    <Accordion cast={cast} seasons={seasons} ></Accordion>
                    <button className="singleShowWatchlistButton" onClick={() => addToWatchlist()}>
                        {buttonText}
                        {isClicked ?
                            <CheckIcon className='singleShowIcon' />
                            :
                            <AddIcon className='singleShowIcon' />}
                    </button>
                </div>
                {/* <ul>{`Seasons(${seasons.length})`}
                    {seasons.map((season) => {
                        return (<li key={crypto.randomUUID()} >{`${season?.premiereDate} - ${season?.endDate}`}</li>)

                    })}
                </ul> */}






            </div>


        </div >
    )
}

export default SingleShow