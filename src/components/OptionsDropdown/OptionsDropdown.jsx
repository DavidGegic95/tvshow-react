import "./optionsDropdown.css"
import SearchIcon from '@mui/icons-material/Search';


import React from 'react'

const OptionsDropdown = ({ setSearchOption, setSearchUrl, setOptionsDropdown, searchOption }) => {

    const allSearch = () => {
        setSearchUrl("https://api.tvmaze.com/search/shows?q=")
        setOptionsDropdown((prev) => !prev)
        setSearchOption("All")
    }
    const singleSearch = () => {
        setSearchUrl("https://api.tvmaze.com/singlesearch/shows?q=")
        setOptionsDropdown((prev) => !prev)
        setSearchOption("Single")

    }

    const peopleSearch = () => {
        setSearchUrl("https://api.tvmaze.com/search/people?q=")
        setOptionsDropdown((prev) => !prev)
        setSearchOption("People")



    }





    return (
        <div className='optionsDropdown'>
            <div onClick={() => allSearch()} className="search"><span className="spanSearch"><SearchIcon></SearchIcon></span>All</div>
            <div
                onClick={() => singleSearch()}
                className="search"><span className="spanSearch"><SearchIcon></SearchIcon></span>Single search</div>
            <div
                onClick={() => peopleSearch()}
                className="search"><span className="spanSearch"><SearchIcon></SearchIcon></span>People search</div>




        </div>
    )
}

export default OptionsDropdown