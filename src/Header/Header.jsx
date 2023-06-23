import React, { useState } from 'react'
import { useDebouncedCallback } from "use-debounce";
import "./header.css"
import SearchDropwdown from '../components/SearchDropdown/SearchDropwdown';
import SingleShow from '../pages/SingleShow/SingleShow';
import OptionsDropdown from '../components/OptionsDropdown/OptionsDropdown';


// const debounce = (func, delay) => {
//     let debounceTimer
//     return function () {
//         const context = this
//         const args = arguments
//         clearTimeout(debounceTimer)
//         debounceTimer
//             = setTimeout(() => func.apply(context, args), delay)
//     }
// }
function Header({ setSingleMovie, isFetched, setIsFetched }) {
    const [searchUrl, setSearchUrl] = useState("https://api.tvmaze.com/search/shows?q=")
    const [inputValue, setInputValue] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [optionsDropdown, setOptionsDropdown] = useState(false)
    const [searchOption, setSearchOption] = useState("All")

    const debounced = useDebouncedCallback(() => {
        searchFetch()
    }, 1000);


    function searchFetch() {
        setIsFetched(prev => { return (prev === true ? prev : !prev) })

        fetch(`${searchUrl}${inputValue}`)
            .then(data => data.json())
            .then(data => setSearchResults(data))

    }

    function onChange1(value) {
        setInputValue(value)
        debounced()


    }

    const makeDropdown = () => {
        if (isFetched) return <SearchDropwdown setSearchOption={setSearchOption} setIsFetched={setIsFetched} setSingleMovie={setSingleMovie} className="searchDisplayNone" searchResults={searchResults} />
    }

    // const searchOptionsDropdown = () => {

    //     console.log(optionsDropdown);

    // }

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

    const homeButtonOnClick = () => {
        // console.log(optionsDropdown);
        setOptionsDropdown(false)
        setIsFetched(false)
        setSingleMovie(null)
    }



    return (
        <header>

            {/* <p>DVDShow</p> */}
            <button className='homeButton' onClick={() => homeButtonOnClick()} >DVDShow</button>
            <div className='searchSection'>
                {createOptinsDropdown()}
                <button onClick={() => onClick()} className='filterSearch'>{searchOption}</button>
                <input onClick={() => setOptionsDropdown(false)} onChange={e => onChange1(e.target.value)} value={inputValue} type="text" placeholder='Search...' />
                <button className='searchIcon'>&#128269;</button>


            </div>



            {isFetched &&
                <SearchDropwdown setSearchOption={setSearchOption} searchOption={searchOption} setInputValue={setInputValue} setIsFetched={setIsFetched} setSingleMovie={setSingleMovie} className="searchDisplayNone" searchResults={searchResults} />
                // :
                // console.log(isFetched)


            }

            {/* {makeDropdown()} */}



        </header>
    )
}

export default Header

