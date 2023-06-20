import React, { useEffect, useState } from 'react'
import "./singleShow.css"

const url = "http://api.tvmaze.com/shows"




function SingleShow({ singleMovie }) {
    const [seasons, setSeasons] = useState([])
    const [cast, setCast] = useState([])


    function fetchSeasons() {
        fetch(`${url}/${singleMovie?.id}/seasons`)
            .then(data => data.json())
            .then(data => setSeasons(data))
    }

    function fetchCast() {
        fetch(`${url}/${singleMovie?.id}/cast`)
            .then(data => data.json())
            .then(data => setCast(data))

    }


    useEffect(() => {
        fetchSeasons()
        fetchCast()
    }, [])



    let replaced = singleMovie.summary.replace(/<\/?p[^>]*>/g, "");
    replaced = replaced.replace(/<\/?b[^>]*>/g, "")

    return (
        <div className="singleShow">
            <h1>{singleMovie.name}</h1>
            <img src={singleMovie.image.original} alt="" />
            <p>{replaced}</p>

            <div dangerouslySetInnerHTML={{ __html: `${singleMovie.summary}` }} />
            <ul>{`Seasons(${seasons.length})`}
                {seasons.map((season) => {
                    return (<li key={crypto.randomUUID()} >{`${season.premiereDate} - ${season.endDate}`}</li>)

                })}
            </ul>
            <ul>{`Cast`}
                {cast.map(({ person }) => {
                    return <li key={crypto.randomUUID()}>{person.name}</li>

                })}
            </ul>

            <p></p>

        </div >
    )
}

export default SingleShow