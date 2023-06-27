import React, { useContext } from "react";
import { applicationContext } from "../../context";
import Button from "../../components/Button/Button.jsx"

import "./mainPage.css"
import { v4 as uuidv4 } from 'uuid';

function MainPage({ setNumberOfBookmarks,numberOFBookmarks }) {

    const { setSingleMovie, allShows } = useContext(applicationContext);
    const sortedShows = [...allShows].sort((a, b) => b.rating.average - a.rating.average)
    const first50Shows = [...sortedShows].slice(0, 49);



    return (
        <div className="mainPage" >
            {first50Shows.map((show) => {




                return (
                    <div key={uuidv4()} className="movieCard" >

                        < img onClick={() => setSingleMovie(show)} key={uuidv4()} className="movieCardpct" src={show?.image.medium} alt="" />
                        <p className="ratings"><span>&#x2B50;</span>{show?.rating.average}</p>
                        <p className="name" >{show?.name}</p>
                        {/* <button key={uuidv4()} ></button> */}
                        <Button numberOFBookmarks={numberOFBookmarks} setNumberOfBookmarks={setNumberOfBookmarks} show={show} />


                    </div>

                )
            })}
        </div >
    )
}

export default MainPage