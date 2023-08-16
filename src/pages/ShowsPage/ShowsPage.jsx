import { Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import "./showspage.css"
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import PaginationControlled from '../../components/Pagination/Pagination';
import { useParams } from "react-router-dom";


const ShowsPage = ({ setSingleMovie, numberOFBookmarks, setNumberOfBookmarks }) => {
    const [page, setPage] = useState(1)
    const [showsPage, setShowsPage] = useState(null)
    const navigate = useNavigate()
    const { num } = useParams()
    const handleScrollToTop =
        () => {
            if (window.pageYOffset > 300) {
                window.scrollTo({ top: 0, behavior: 'smooth' });

            }
        };

    const imgOnClick = (show) => {
        setSingleMovie(show)
        navigate("/singleshow")
    }
    const handleData = (data) => {
        const first48 = data.slice(0, 48)
        setShowsPage(first48)

    }

    const fetchPage = (page) => {
        fetch(`https://api.tvmaze.com/shows?page=${page - 1}`)
            .then(res => res.json())
            .then(data => handleData(data))
    }
    useEffect(() => {
        setPage(parseInt(num))
        fetchPage(page)
        handleScrollToTop()
        // eslint-disable-next-line
    }, [page, num])

    return (
        <div className='showsPage'>

            {showsPage?.map((show => {
                return (
                    <div key={show?.id} className="movieCard" >

                        < img onClick={() => imgOnClick(show)} key={show?.id} className="movieCardpct" src={show?.image?.medium} alt="" />
                        <p className="ratings"><span><StarIcon className="starIcon" /></span>{show?.rating?.average}</p>
                        <Tooltip title={show?.name} placement="top-start">
                            <p className={show?.name.length > 20 ? "nameLong" : "name"}  >
                                {show?.name}
                            </p>

                        </Tooltip>
                        <Button numberOFBookmarks={numberOFBookmarks} setNumberOfBookmarks={setNumberOfBookmarks} show={show} id={show.id} />
                    </div>


                )
            }))}
            <PaginationControlled setPage={setPage} page={page} />

        </div>
    )
}

export default ShowsPage