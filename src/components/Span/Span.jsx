import "./span.css"


import React, { useState } from 'react'

const Span = () => {
    const [buttonText, setButtonText] = useState("+")
    const onClick1 = () => {
        // setIsClicked(prev => !prev)
        // setSavedMovies([...savedMovies, show])

        // if (!isClicked) {
        setButtonText("-")
        // } else { setButtonText("+") }

    }

    return (
        <span onClick={() => onClick1} className="plusWatchlist">{buttonText}</span>
    )
}

export default Span