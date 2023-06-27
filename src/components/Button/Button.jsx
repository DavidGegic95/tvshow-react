import "./button.css"
import CheckIcon from '@mui/icons-material/Check';
import BasicModal from "../Modal/Modal";

import React, { useState, } from 'react'

const Button = ({ show, setNumberOfBookmarks, numberOFBookmarks }) => {
    const [buttonText, setButtonText] = useState("+")
    const [isClicked, setIsClicked] = useState(false)


    function checkLocalStorage() {
        if (localStorage.getItem(show.id)) {
            setButtonText("✓")
            setIsClicked(true)
            return (buttonText)
        }
    }

    useState(() => {
        checkLocalStorage()

    }, [])



    const onClick1 = () => {
        setIsClicked(prev => !prev)
        localStorage.setItem(`${show.id}`, `${show.name}`)

        if (!isClicked) {
            setButtonText("✓")
            console.log(localStorage.getItem(show.id));
            setNumberOfBookmarks(Object.keys(localStorage).length)
            console.log(numberOFBookmarks);
        } else {
            setButtonText("+")
            localStorage.removeItem(`${show.id}`)
            console.log(localStorage.getItem(show.id));
            setNumberOfBookmarks(Object.keys(localStorage).length)
            console.log(numberOFBookmarks);
        }


    }
    return (
        <div className="buttonDiv">
            <BasicModal show={show} />
            <button className="addWatchlistButton" onClick={() => onClick1()}><span className="plusWatchlist">{buttonText === "+" ? buttonText : <CheckIcon></CheckIcon>}</span>Watchlist</button>
            <button onClick={() => onClick1()} className={`bookmark ${isClicked === true && "bookmarkChecked"}`}>{buttonText === "+" ? buttonText : <CheckIcon></CheckIcon>}</button>


        </div>

    )
}

export default Button