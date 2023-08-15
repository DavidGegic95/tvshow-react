import "./searchDropdown.css"

import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import MovieIcon from '@mui/icons-material/Movie';
import { useNavigate } from "react-router-dom";

const SearchDropwdown = ({ searchResults, setSingleMovie, setIsFetched, setInputValue, searchOption, setSearchOption }) => {
    const navigate = useNavigate()





    const movieGenre = (movie) => {
        if (movie?.show?.genre?.length > 0) {
            let genre1 = movie?.show?.genres[0]
            let genre2 = movie?.show?.genres[1]
            return genre1 && genre2 ? `${genre1},${genre2}` : genre1 ? `${genre1}` : ""
        }

    }





    return (
        <div className='searchDropdown'>

            {/* {searchDropdownBasedOnOption()} */}

            {searchOption === "All"
                && searchResults !== null
                && (searchResults && searchResults?.length > 0) === true
                &&

                searchResults?.map((singleMovie, index) => {
                    // console.log(singleMovie?.show.image.medium);
                    function onClickButton(singleMovieShow) {
                        setSingleMovie(singleMovieShow)
                        navigate("singleshow")
                        setIsFetched(prev => !prev)
                        setInputValue("")

                    }
                    return (

                        <div className="searchResult" onClick={() => onClickButton(singleMovie?.show)} key={index}>
                            {singleMovie?.show?.image?.medium ?
                                <img className="searchReultsImage" src={singleMovie?.show?.image?.medium} alt="movie" />
                                :
                                <MovieIcon className="resultsIcons" fontSize="large" />
                            }
                            <div className="movieInfo">
                                {singleMovie?.show?.name}
                                {singleMovie?.show?.rating?.average
                                    &&
                                    <>
                                        <br /><p className="ratingsSearch"><span>&#x2B50;</span>{singleMovie?.show?.rating?.average}</p>
                                    </>
                                }
                                <span>{movieGenre(singleMovie)}</span>

                            </div>

                        </div>

                    )
                })
            }



            {searchOption === "People"
                && searchResults !== null
                && (searchResults && searchResults.length > 0) === true
                &&

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
                                {actor?.person?.image?.medium ?
                                    <img className="searchReultsImage" src={actor?.person?.image?.medium} alt="actor-actress" />
                                    :
                                    <PersonIcon className="resultsIcons" />

                                }
                                {/* <img className="searchReultsImage" src={actor?.person?.image?.medium} alt="actor-actress" /> */}
                                <div className="movieInfo">
                                    <div>{actor?.person?.name}</div>
                                    {/* <a className="actorInfo" href={actor?.person?.url}>More info</a> */}


                                </div>

                            </div>
                        </a>

                    )
                })
            }
            {searchOption === "Single" && searchResults !== null &&
                < div className="searchResult" >
                    {searchResults?.image?.medium ?
                        <img className="searchReultsImage" src={searchResults?.image?.medium} alt="movie" />
                        :
                        <MovieIcon className="resultsIcons" />

                    }
                    <div className="movieInfo">
                        {searchResults?.name}
                        <br /><p className="ratingsSearch"><span>&#x2B50;</span>{searchResults?.rating?.average}</p>
                        <span>{movieGenre(searchResults)}</span>

                    </div>

                </div>

            }



        </div >

    )
}

export default SearchDropwdown
