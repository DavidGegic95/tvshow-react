import React, { useState } from 'react'
import { useDebouncedCallback } from "use-debounce";
import "./header.css"
import SearchDropwdown from '../components/SearchDropdown/SearchDropwdown';
import OptionsDropdown from '../components/OptionsDropdown/OptionsDropdown';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useNavigate } from 'react-router-dom';



function Header({ setHomeButtonClicked, setShowSearchDropDown, showSearchDropDown, setSingleMovie, isFetched, setIsFetched, numberOFBookmarks, isWatchlist, setIsWatchlist }) {
    const [searchUrl, setSearchUrl] = useState("https://api.tvmaze.com/search/shows?q=")
    const [inputValue, setInputValue] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [optionsDropdown, setOptionsDropdown] = useState(false)
    const [searchOption, setSearchOption] = useState("All")
    const navigate = useNavigate()


    const debounced = useDebouncedCallback(() => {
        searchFetch()
    }, 1000);


    function searchFetch() {
        setIsFetched(prev => { return (prev === true ? prev : !prev) })
        setShowSearchDropDown(true)

        fetch(`${searchUrl}${inputValue}`)
            .then(data => data.json())
            .then(data => console.log(data) || setSearchResults(data))

    }

    function onChange1(value) {
        setInputValue(value)
        debounced()


    }


    const createOptinsDropdown = () => {

        if (optionsDropdown === true) {
            return <OptionsDropdown searchOption={searchOption} setSearchOption={setSearchOption} setOptionsDropdown={setOptionsDropdown} setSearchUrl={setSearchUrl} />
        }
    }


    const onClick = () => {
        setIsFetched(false)
        setOptionsDropdown((prev) => !prev)
        setInputValue("")

    }
    const onClickShowsPage = () => {
        setIsFetched(false)
        setOptionsDropdown(false)
        setInputValue("")
        navigate("shows/page/1")

    }

    const homeButtonOnClick = () => {
        // console.log(optionsDropdown);
        setOptionsDropdown(false)
        setIsFetched(false)
        setSingleMovie(null)
        setIsWatchlist(false)
        setHomeButtonClicked(prev => !prev)
        setInputValue("")
        navigate("/")
    }
    const watchlistButton = () => {
        navigate("watchlist")
        setIsWatchlist(true)
        setOptionsDropdown(false)
        setIsFetched(false)
    }

    const numberOfBookmarks = JSON.parse(localStorage?.getItem("movies")) ? Object.values(JSON.parse(localStorage?.getItem("movies")))?.length : 0



    return (
        <header>
            <nav>
                <button className='homeButton' onClick={homeButtonOnClick} >Home</button>
                <button className='homeButton' onClick={onClickShowsPage}>Shows</button>
            </nav>

            <div className='searchSection'>
                <button onClick={() => onClick()} className='filterSearch'>{searchOption}</button>
                <input onClick={() => setOptionsDropdown(false)} onChange={e => onChange1(e.target.value)} value={inputValue} type="text" placeholder='Search...' />
                {/* <button className='searchIcon'>&#128269;</button> */}
            </div>
            {createOptinsDropdown()}

            <div onClick={watchlistButton} className={numberOfBookmarks > 0 ? 'bookmarkDiv' : " bookmarkDiv bookmarkDivDisabled"}>

                <BookmarkIcon className='BookmarkIcon' color="white"></BookmarkIcon>
                <span className='plusSpan'>+</span><span className='bookmarkSpan'>Watchlist</span>

                {numberOFBookmarks !== 0 &&
                    <div className='numberOfBookmarks'>{numberOFBookmarks}</div>}

            </div>


            {isFetched
                && showSearchDropDown
                && <SearchDropwdown setSearchOption={setSearchOption} searchOption={searchOption} setInputValue={setInputValue} setIsFetched={setIsFetched} setSingleMovie={setSingleMovie} className="searchDisplayNone" searchResults={searchResults} />
            }



        </header>
    )
}

export default Header

