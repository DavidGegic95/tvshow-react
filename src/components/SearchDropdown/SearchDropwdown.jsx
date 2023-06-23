import "./searchDropdown.css"

import React from 'react'

const SearchDropwdown = ({ searchResults, setSingleMovie, setIsFetched, setInputValue, searchOption, setSearchOption }) => {
    // console.log(searchResults[0]?.image);
    // console.log(searchResults[0].show.url);
    console.log(searchOption);
    console.log(searchResults);



    const movieGenre = (genre1, genre2) => {
        if (genre1 && genre2) {
            return `${genre1},${genre2}`
        } else if (genre1) {
            return `${genre1}`
        } else if (genre2) {
            return `${genre2}`
        }

    }

    console.log(searchResults);




    // function searchDropdownBasedOnOption() {

    //     if (searchOption === "all") {
    //         console.log("allllllll");

    //         searchResults.map((singleMovie, index) => {
    //             // console.log(singleMovie?.show.image.medium);
    //             function onClickButton(singleMovieShow) {
    //                 setSingleMovie(singleMovieShow)
    //                 setIsFetched(prev => !prev)
    //                 setInputValue("")

    //             }
    //             return (

    //                 <div className="searchResult" onClick={() => onClickButton(singleMovie?.show)} key={index}>
    //                     <img className="searchReultsImage" src={singleMovie.show?.image?.medium} alt="Movie-image" />
    //                     <div className="movieInfo">
    //                         {singleMovie?.show.name}
    //                         <br /><p className="ratingsSearch"><span>&#x2B50;</span>{singleMovie?.show?.rating?.average}</p>
    //                         <span>{movieGenre(singleMovie?.show?.genres[0], singleMovie?.show?.genres[1])}</span>

    //                     </div>

    //                 </div>

    //             )
    //         })





    //     }



    // }






    return (
        <div className='searchDropdown'>

            {/* {searchDropdownBasedOnOption()} */}

            {searchOption === "All" && Array.isArray(searchResults) === true &&

                searchResults.map((singleMovie, index) => {
                    // console.log(singleMovie?.show.image.medium);
                    function onClickButton(singleMovieShow) {
                        setSingleMovie(singleMovieShow)
                        setIsFetched(prev => !prev)
                        setInputValue("")

                    }
                    return (

                        <div className="searchResult" onClick={() => onClickButton(singleMovie?.show)} key={index}>
                            <img className="searchReultsImage" src={singleMovie.show?.image?.medium} alt="Movie-image" />
                            <div className="movieInfo">
                                {singleMovie?.show?.name}
                                <br /><p className="ratingsSearch"><span>&#x2B50;</span>{singleMovie?.show?.rating?.average}</p>
                                <span>{movieGenre(singleMovie?.show?.genres[0], singleMovie?.show?.genres[1])}</span>

                            </div>

                        </div>

                    )
                })
            }



            {searchOption === "People" &&

                searchResults.map((actor, index) => {
                    console.log(actor);
                    // console.log(singleMovie?.show.image.medium);
                    function onClickButton() {
                        // setSingleMovie(singleMovieShow)
                        setIsFetched(prev => !prev)
                        setInputValue("")

                    }
                    return (

                        <div className="searchResult" onClick={() => onClickButton()} key={index}>
                            {/* <img className="searchReultsImage" src={singleMovie.show?.image?.medium} alt="Movie-image" /> */}
                            <div className="movieInfo">
                                {actor.person?.name}
                                {/* <br /><p className="ratingsSearch"><span>&#x2B50;</span>{singleMovie?.show?.rating?.average}</p> */}
                                {/* <span>{movieGenre(singleMovie?.show?.genres[0], singleMovie?.show?.genres[1])}</span> */}

                            </div>

                        </div>

                    )
                })
            }
            {searchOption === "Single" &&
                <div className="searchResult" >
                    <img className="searchReultsImage" src={searchResults?.image?.medium} alt="Movie-image" />
                    <div className="movieInfo">
                        {searchResults?.name}
                        <br /><p className="ratingsSearch"><span>&#x2B50;</span>{searchResults?.rating?.average}</p>
                        {/* <span>{movieGenre(searchResults?.genres[0], searchResults?.genres[1])}</span> */}

                    </div>

                </div>

            }



        </div>

    )
}

export default SearchDropwdown
