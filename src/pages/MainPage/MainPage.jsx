import React, { useContext } from "react";
import { applicationContext } from "../../context";
import Button from "../../components/Button/Button.jsx"
import Tooltip from '@mui/material/Tooltip';
import Carousel from "../../components/Carousel/Carousel"
import StarIcon from '@mui/icons-material/Star';
import "./mainPage.css"
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import { useNavigate } from "react-router-dom";




function MainPage({ setShowSearchDropDown, setNumberOfBookmarks, numberOFBookmarks }) {

    const { setSingleMovie, allShows } = useContext(applicationContext);
    const sortedShows = [...allShows].sort((a, b) => b.rating.average - a.rating.average)
    const first50Shows = [...sortedShows].slice(0, 48);
    const navigate = useNavigate()
    const imgOnClick = (show) => {
        setSingleMovie(show)
        navigate("singleshow")
    }


    return (
        <div onClick={() => setShowSearchDropDown(false)} className="mainPage" >
            <div className="ImageCarouselContainer">
                <h1 className="h1Title">Discover the best films to enjoy. <br />
                    Save those you want to see.</h1>
                <ImageCarousel setSingleMovie={setSingleMovie} first50Shows={first50Shows} />
            </div>
            <h2 className="topPicksTitle">Top picks for today</h2>
            <Carousel />

            <div className="top50Div">
                <h3 className="top50tittle">Top rated shows</h3>

                {first50Shows.map((show) => {

                    return (
                        <div key={show.id} className="movieCard" >


                            < img onClick={() => imgOnClick(show)} key={show.id} className="movieCardpct" src={show?.image.medium} alt="" />
                            <p className="ratings"><span><StarIcon className="starIcon" /></span>{show?.rating.average}</p>
                            <Tooltip title={show?.name} placement="top-start">
                                <p className={show?.name.length > 20 ? "nameLong" : "name"}  >
                                    {show?.name}
                                </p>

                            </Tooltip>
                            <Button numberOFBookmarks={numberOFBookmarks} setNumberOfBookmarks={setNumberOfBookmarks} show={show} id={show.id} />
                        </div>

                    )
                })}
            </div>
        </div >
    )
}

export default MainPage