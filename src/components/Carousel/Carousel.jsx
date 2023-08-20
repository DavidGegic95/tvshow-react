import React, { useContext, useRef } from 'react'
import { applicationContext } from "../../context";
import Mycard from '../MyCard/MyCard'
import './carousel.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Carousel = () => {
    const { randomShows } = useContext(applicationContext);
    const hashSet = new Set()
    let box = useRef(null)


    const btnpressprev = () => {
        if (box.current) {
            let width = box.current.clientWidth;
            box.current.scrollLeft = box.current.scrollLeft - width;
        }
    }

    const btnpressnext = () => {
        if (box.current) {
            let width = box.current.clientWidth;
            box.current.scrollLeft = box.current.scrollLeft + width;
        }
    }
    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><div><ArrowBackIosNewIcon fontSize="large" className='nexticon' /></div></button>
            <button className="next-btn" onClick={btnpressnext}><div><ArrowForwardIosIcon fontSize="large" className='previcon' /></div></button>


            <div ref={box} className="product-container">
                {randomShows.map((show) => {
                    if (!hashSet.has(show?.id) && show?.image?.medium) {
                        hashSet.add(show.id)
                        let image = show?.image?.medium
                        return <Mycard show={show} key={show.id + 1000} image={image} />
                    } else { return undefined }

                })}

            </div>
        </div >
    )
}

export default Carousel