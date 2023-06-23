import "./searchDropdown.css"

import React from 'react'

const SearchDropwdown = ({ searchResults, setSingleMovie, setIsFetched, setInputValue }) => {
    // console.log(searchResults[0]?.image);
    // console.log(searchResults[0].show.url);



    const movieGenre = (genre1, genre2) => {
        if (genre1 && genre2) {
            return `${genre1},${genre2}`
        } else if (genre1) {
            return `${genre1}`
        } else if (genre2) {
            return `${genre2}`
        }

    }







    return (
        <div className='searchDropdown'>

            {searchResults.map((singleMovie, index) => {
                // console.log(singleMovie?.show.image.medium);


                function onClickButton(singleMovieShow) {
                    setSingleMovie(singleMovieShow)
                    setIsFetched(prev => !prev)
                    setInputValue("")

                }
                return (

                    <div className="searchResult" onClick={() => onClickButton(singleMovie?.show)} key={index}>
                        <img className="searchReultsImage" src={singleMovie.show.image?.medium} alt="Movie-image" />
                        <div className="movieInfo">
                            {singleMovie?.show.name}
                            <br /><p className="ratingsSearch"><span>&#x2B50;</span>{singleMovie?.show?.rating?.average}</p>
                            <span>{movieGenre(singleMovie?.show?.genres[0], singleMovie?.show?.genres[1])}</span>

                        </div>

                    </div>

                    // <button onClick={() => onClickButton(singleMovie?.show)} key={index} >{singleMovie?.show.name}</button>


                )
            }
            )}


        </div>

    )
}

export default SearchDropwdown
