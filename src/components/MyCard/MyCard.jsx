import React, { useContext } from 'react'
import { applicationContext } from '../../context';
import './myCard.css'
const Mycard = ({ image, cardno, show }) => {
    const { setSingleMovie } = useContext(applicationContext);

    return (
        <img className='carouselCard' onClick={() => setSingleMovie(show)} src={image} alt="" />
    )
}

export default Mycard