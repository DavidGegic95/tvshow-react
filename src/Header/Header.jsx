import React, { useState } from 'react'
import { useDebouncedCallback } from "use-debounce";
import "./header.css"
import SearchDropwdown from '../components/SearchDropdown/SearchDropwdown';
import SingleShow from '../pages/SingleShow/SingleShow';
const searchUrl = "https://api.tvmaze.com/search/shows?q="

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


    const [inputValue, setInputValue] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const debounced = useDebouncedCallback(() => {
        searchFetch()
    }, 1000);


    function searchFetch() {
        setIsFetched(prev => { return (prev === true ? prev : !prev) })

        fetch(`${searchUrl}${inputValue}`)
            .then(data => data.json())
            .then(data => console.log(data) || setSearchResults([...data]))

    }

    function onChange1(value) {
        setInputValue(value)
        debounced()

    }

    const makeDropdown = () => {
        if (isFetched) return <SearchDropwdown setIsFetched={setIsFetched} setSingleMovie={setSingleMovie} className="searchDisplayNone" searchResults={searchResults} />
    }



    return (
        <header>

            {/* <p>DVDShow</p> */}
            <button className='homeButton' onClick={() => setSingleMovie(null)} >DVDShow</button>
            <div className='searchSection'>
                <input onChange={e => onChange1(e.target.value)} value={inputValue} type="text" placeholder='Search...' />
                <button className='searchIcon'>&#128269;</button>


            </div>


            
            {isFetched &&
                <SearchDropwdown setInputValue={setInputValue} setIsFetched={setIsFetched} setSingleMovie={setSingleMovie} className="searchDisplayNone" searchResults={searchResults} />
                // :
                // console.log(isFetched)


            }

            {/* {makeDropdown()} */}



        </header>
    )
}

export default Header

