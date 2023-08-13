import "./button.css"
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import BasicModal from "../Modal/Modal";

import React, { useEffect, useState, } from 'react'

const Button = ({ show, setNumberOfBookmarks, numberOFBookmarks, id }) => {
    const [isClicked, setIsClicked] = useState(false)

    function checkLocalStorage() {
        if (JSON.parse(localStorage?.getItem("movies"))) {
            const allmovies = Object.values(JSON.parse(localStorage?.getItem("movies")))
            allmovies.forEach((movie) => {
                if (movie.id === id) {
                    setIsClicked(true)

                }
            })
        }
    }

    useEffect(() => {
        checkLocalStorage()
        console.log("check");

        // eslint-disable-next-line
    }, [])



    const onClick1 = () => {
        setIsClicked(prev => !prev)
        let existing = localStorage.getItem("movies");
        existing = existing ? JSON.parse(existing) : {};
        let key = `${show.id}`
        existing[key] = show;
        console.log(existing);
        localStorage.setItem('movies', JSON.stringify(existing));
        if (!isClicked) {
            setNumberOfBookmarks(Object.keys(JSON.parse(localStorage.getItem("movies"))).length)
        } else {
            let existing = localStorage.getItem("movies");
            existing = existing ? JSON.parse(existing) : {};
            let key = `${show.id}`
            delete existing[key]
            console.log(existing);
            localStorage.setItem('movies', JSON.stringify(existing));
            setNumberOfBookmarks(Object.keys(JSON.parse(localStorage.getItem("movies"))).length)
        }

    }
    return (
        <div className="buttonDiv">
            <BasicModal show={show} />
            <button className="addWatchlistButton" onClick={() => onClick1()}><span className="plusWatchlist">{!isClicked ? <AddIcon /> : <CheckIcon></CheckIcon>}</span>Watchlist</button>
            <button onClick={() => onClick1()} className={`bookmark ${isClicked === true && "bookmarkChecked"}`}>{!isClicked ? <AddIcon /> : <CheckIcon></CheckIcon>}</button>


        </div>

    )
}

export default Button