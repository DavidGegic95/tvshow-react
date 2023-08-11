import React, { useContext, useEffect, useState } from "react";
import { applicationContext } from "../../context";
import Button from "../../components/Button/Button.jsx"
import Tooltip from '@mui/material/Tooltip';
import Carousel from "../../components/Carousel/Carousel"
import "./mainPage.css"
import { v4 as uuidv4 } from 'uuid';



function MainPage({ setShowSearchDropDown, setNumberOfBookmarks, numberOFBookmarks }) {

    const { setSingleMovie, allShows } = useContext(applicationContext);
    const sortedShows = [...allShows].sort((a, b) => b.rating.average - a.rating.average)
    const first50Shows = [...sortedShows].slice(0, 48);
    // //////Back to top button
    // const [showButton, setShowButton] = useState(false)
    // useEffect(() => {
    //     // Button is displayed after scrolling for 300 pixels
    //     const handleScrollButtonVisiblity = () => {
    //         window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    //     };
    //     window.addEventListener('scroll', handleScrollButtonVisiblity);
    //     return () => {
    //         window.removeEventListener('scroll', handleScrollButtonVisiblity);
    //     };
    // }, []);

    // const handleScrollToTop =
    //     () => {
    //         window.scrollTo({ top: 0, behavior: 'smooth' });
    //     };

    // ////

    return (
        <div onClick={() => setShowSearchDropDown(false)} className="mainPage" >
            <Carousel />

            {first50Shows.map((show) => {




                return (
                    <div key={show.id} className="movieCard" >


                        < img onClick={() => setSingleMovie(show)} key={uuidv4()} className="movieCardpct" src={show?.image.medium} alt="" />
                        <p className="ratings"><span>&#x2B50;</span>{show?.rating.average}</p>
                        <Tooltip title={show?.name} placement="top-start">
                            <p className={show?.name.length > 20 ? "nameLong" : "name"}  >
                                {show?.name}
                            </p>


                        </Tooltip>
                        {/* <button key={uuidv4()} ></button> */}
                        <Button numberOFBookmarks={numberOFBookmarks} setNumberOfBookmarks={setNumberOfBookmarks} show={show} id={show.id} />



                    </div>





                )
            })}
            {/* {showButton && (
                <div className={`scrollToTop`}>
                    <button
                        className="scrollUpButton"

                        onClick={handleScrollToTop}>
                        <img className="scrollUpImg" src={"https://www.shareicon.net/data/256x256/2015/09/20/643612_arrows_512x512.png"} alt="scrollToTop" />
                        Back to top
                    </button>
                </div>)
            } */}

        </div >
    )
}

export default MainPage