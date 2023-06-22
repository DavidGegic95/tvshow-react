import "./searchDropdown.css"

import React from 'react'

const SearchDropwdown = ({ searchResults, setSingleMovie, setIsFetched }) => {
    // console.log(searchResults[0].show.url);

    return (
        <div className='searchDropdown'>

            {searchResults.map((singleMovie, index) => {

                function onClickButton(singleMovieShow) {
                    setSingleMovie(singleMovieShow)
                    setIsFetched(prev => !prev)

                }
                return (<button onClick={() => onClickButton(singleMovie?.show)} key={index} >{singleMovie?.show.name}</button>


                )
            }
            )}


        </div>

    )
}

export default SearchDropwdown
