import "./button.css"

import React, { useState, } from 'react'

const Button = ({ show }) => {
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

        } else {
            setButtonText("+")
            localStorage.removeItem(`${show.id}`)
            console.log(localStorage.getItem(show.id));


        }


    }
    return (
        <div>
            <button className="addWatchlistButton" onClick={() => onClick1()}><span className="plusWatchlist">{buttonText}</span>Watchlist</button>
            <button onClick={() => onClick1()} className={`bookmark ${isClicked === true && "bookmarkChecked"}`}>{buttonText}</button>

        </div>

    )
}

export default Button