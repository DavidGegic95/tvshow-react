import React, { useContext } from "react";
import { applicationContext } from "../../context";

import "./mainPage.css"
import { v4 as uuidv4 } from 'uuid';

function MainPage() {
    const { setSingleMovie, allShows } = useContext(applicationContext);
    const sortedShows = allShows.sort((a, b) => b.rating.average - a.rating.average)
    const first50Shows = [...sortedShows].slice(0, 49);

    return (
        <div className="mainPage" >
            {first50Shows.map((show) => {

                return (
                    <div onClick={() => setSingleMovie(show)} key={uuidv4()} className="movieCard" >

                        < img src={show?.image.medium} alt="" />
                        <p className="ratings"><span>&#x2B50;</span>{show?.rating.average}</p>
                        <p className="name">{show?.name}</p>



                    </div>

                )
            })}
        </div>
    )
}

export default MainPage