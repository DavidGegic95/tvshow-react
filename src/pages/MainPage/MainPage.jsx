import React, { useContext } from "react";
import { applicationContext } from "../../context";
import Button from "../../components/Button/Button.jsx"
import Tooltip from '@mui/material/Tooltip';
import "./mainPage.css"
import { v4 as uuidv4 } from 'uuid';


function MainPage({ setNumberOfBookmarks, numberOFBookmarks }) {

    const { setSingleMovie, allShows } = useContext(applicationContext);
    const sortedShows = [...allShows].sort((a, b) => b.rating.average - a.rating.average)
    const first50Shows = [...sortedShows].slice(0, 48);

    return (
        <div className="mainPage" >
            {first50Shows.map((show, index) => {




                return (
                    <div key={uuidv4()} className="movieCard" >


                        < img onClick={() => setSingleMovie(show)} key={uuidv4()} className="movieCardpct" src={show?.image.medium} alt="" />
                        <p className="ratings"><span>&#x2B50;</span>{show?.rating.average}</p>
                        <Tooltip title={show?.name} placement="top-start">
                            <p className={show?.name.length > 20 ? "nameLong" : "name"}  >
                                {show?.name}
                            </p>


                        </Tooltip>
                        {/* <button key={uuidv4()} ></button> */}
                        <Button numberOFBookmarks={numberOFBookmarks} setNumberOfBookmarks={setNumberOfBookmarks} show={show} />



                    </div>





                )
            })}

        </div >
    )
}

export default MainPage