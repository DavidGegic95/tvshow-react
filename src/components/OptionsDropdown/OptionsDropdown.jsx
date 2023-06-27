import "./optionsDropdown.css"
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';


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
            <div onClick={() => allSearch()} className="search"><span className="spanSearch"><SearchIcon></SearchIcon></span>All movies</div>
            <div
                onClick={() => singleSearch()}
                className="search"><span className="spanSearch"><SearchIcon></SearchIcon></span>Single movie search</div>
            <div
                onClick={() => peopleSearch()}
                className="search"><span className="spanSearch"><GroupIcon></GroupIcon></span>People search</div>




        </div>
    )
}

export default OptionsDropdown