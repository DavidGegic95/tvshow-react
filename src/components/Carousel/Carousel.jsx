import React, { useContext } from 'react'
import { applicationContext } from "../../context";
import { v4 as uuidv4 } from 'uuid';
import Mycard from '../MyCard/MyCard'
import './carousel.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Carousel = () => {
    let box = document.querySelector('.product-container');
    const { randomShows } = useContext(applicationContext);



    const btnpressprev = () => {
        if (box) {
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
            console.log(width)
        }
    }

    const btnpressnext = () => {
        if (box) {
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft + width;
            console.log(width)
        }
    }
    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><div><ArrowBackIosNewIcon className='nexticon' /></div></button>
            <button className="next-btn" onClick={btnpressnext}><div><ArrowForwardIosIcon className='previcon' /></div></button>


            <div className="product-container">
                {randomShows.map((show) => {
                    if (show?.image?.medium) {
                        let image = show?.image?.medium
                        return <Mycard show={show} key={show.id + 1000} image={image} />
                    }
                })}

                {/* <Mycard cardno='1' />
                <Mycard cardno='2' />
                <Mycard cardno='3' />
                <Mycard cardno='4' />
                <Mycard cardno='5' />
                <Mycard cardno='6' />
                <Mycard cardno='7' />
                <Mycard cardno='8' />
                <Mycard cardno='9' />
                <Mycard cardno='10' />
                <Mycard cardno='11' />
                <Mycard cardno='12' />
                <Mycard cardno='13' /> */}
            </div>
        </div>
    )
}

export default Carousel