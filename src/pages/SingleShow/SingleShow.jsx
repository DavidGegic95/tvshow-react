// import { Accordion } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./singleShow.css"
import Accordion from "../../components/Accordion/Accordion"


const url = "http://api.tvmaze.com/shows"




function SingleShow({ singleMovie, setShowSearchDropDown }) {
    const [seasons, setSeasons] = useState([])
    const [cast, setCast] = useState([])


    function fetchSeasons() {
        fetch(`${url}/${singleMovie?.id}/seasons`)
            .then(data => data.json())
            .then(data => console.log(data) || setSeasons(data))
    }

    function fetchCast() {
        fetch(`${url}/${singleMovie?.id}/cast`)
            .then(data => data.json())
            .then(data => console.log(data) || setCast(data))

    }


    useEffect(() => {
        fetchSeasons()
        fetchCast()
    }, [])



    // let replaced = singleMovie.summary.replace(/<\/?p[^>]*>/g, "");
    // replaced = replaced.replace(/<\/?b[^>]*>/g, "")

    return (
        <div onClick={() => setShowSearchDropDown(false)} className="singleShowPage">
            <h1>{singleMovie?.name}</h1>
            <div className='singleShowContent'>
                <img className='singlePageImage' src={singleMovie?.image?.original} alt="" />
                {/* <p>{replaced}</p> */}
                <div className='summaryAccordionDiv'>
                    <div className='singleMovieSummary' dangerouslySetInnerHTML={{ __html: `${singleMovie?.summary}` }} />

                    <Accordion cast={cast} seasons={seasons} ></Accordion>

                </div>
                {/* <ul>{`Seasons(${seasons.length})`}
                    {seasons.map((season) => {
                        return (<li key={crypto.randomUUID()} >{`${season?.premiereDate} - ${season?.endDate}`}</li>)

                    })}
                </ul> */}






            </div>


        </div >
    )
}

export default SingleShow