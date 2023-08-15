import React from 'react';
import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
import "./imageCarousel.css"
import { useNavigate } from 'react-router-dom';

function ImageCarousel({ first50Shows, setSingleMovie }) {
    const fourShows = [...first50Shows].slice(0, 10)
    const navigate = useNavigate()
    const imgOnClick = (show) => {
        setSingleMovie(show)
        navigate("singleshow")
    }



    return (
        <Carousel animation="slide" duration="700" indicators={true} height="540px" sx={{ width: "360px" }}>
            {
                fourShows.map((show, i) => <img onClick={() => imgOnClick(show)} key={i} className='imageCarousel' src={show.image.original}></img>)
            }
        </Carousel>
    )
}

// function Item({ item }) {
//     return (
//         <Paper>
//             <img className='imageCarousel' src={item.image.original}></img>
//             {/* //         {/* <h2>{props.item.name}</h2>
//         //         <p>{props.item.description}</p>

//         //         <Button className="CheckButton">
//         //             Check it out!
//         //         </Button> */}
//         </Paper>

//     )

// }

export default ImageCarousel