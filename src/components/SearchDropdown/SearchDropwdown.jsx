import "./searchDropdown.css"

import React from 'react'

const SearchDropwdown = ({ searchResults, setSingleMovie, setIsFetched, setInputValue, searchOption, setSearchOption }) => {
    // console.log(searchResults[0]?.image);
    // console.log(searchResults[0].show.url);
    console.log(searchOption);
    console.log(searchResults);



    const movieGenre = (genre1, genre2) => {
        return genre1 && genre2 ? `${genre1},${genre2}` : genre1 ? `${genre1}` : ""

    }

    console.log(searchResults);




    return (
        <div className='searchDropdown'>

            {/* {searchDropdownBasedOnOption()} */}

            {searchOption === "All" && (searchResults.length > 0) === true &&

                searchResults.map((singleMovie, index) => {
                    // console.log(singleMovie?.show.image.medium);
                    function onClickButton(singleMovieShow) {
                        setSingleMovie(singleMovieShow)
                        setIsFetched(prev => !prev)
                        setInputValue("")

                    }
                    return (

                        <div className="searchResult" onClick={() => onClickButton(singleMovie?.show)} key={index}>
                            <img className="searchReultsImage" src={singleMovie.show?.image?.medium} alt="movie" />
                            <div className="movieInfo">
                                {singleMovie?.show?.name}
                                <br /><p className="ratingsSearch"><span>&#x2B50;</span>{singleMovie?.show?.rating?.average}</p>
                                <span>{movieGenre(singleMovie?.show?.genres[0], singleMovie?.show?.genres[1])}</span>

                            </div>

                        </div>

                    )
                })
            }



            {searchOption === "People" && (searchResults.length > 0) === true &&

                searchResults.map((actor, index) => {
                    console.log(actor);
                    // console.log(singleMovie?.show.image.medium);
                    function onClickButton() {
                        // setSingleMovie(singleMovieShow)
                        setIsFetched(prev => !prev)
                        setInputValue("")


                    }
                    return (
                        <a className="peopleResults" rel="noreferrer" target="_blank" href={actor?.person?.url}>
                            <div className="searchResult" onClick={() => onClickButton()} key={index}>
                                <img className="searchReultsImage" src={actor?.person?.image?.medium} alt="actor-actress" />
                                <div className="movieInfo">
                                    <div>{actor.person?.name}</div>
                                    {/* <a className="actorInfo" href={actor?.person?.url}>More info</a> */}


                                </div>

                            </div>
                        </a>

                    )
                })
            }
            {searchOption === "Single" &&
                <div className="searchResult" >
                    <img className="searchReultsImage" src={searchResults?.image?.medium} alt="movie" />
                    <div className="movieInfo">
                        {searchResults?.name}
                        <br /><p className="ratingsSearch"><span>&#x2B50;</span>{searchResults?.rating?.average}</p>
                        <span>{movieGenre(searchResults?.genres[0], searchResults?.genres[1])}</span>

                    </div>

                </div>

            }



        </div>

    )
}

export default SearchDropwdown
