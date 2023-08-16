import * as React from 'react';
// import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import "./pagination.css"


export default function PaginationControlled({ page, setPage }) {
    const navigate = useNavigate()

    const handleScrollToTop =
        () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    const handleChange = (event, value) => {
        setPage(value);
        navigate(`/shows/page/${value}`)
        handleScrollToTop()
    };

    return (
        <Stack spacing={2}>
            {/* <Typography>Page: {page}</Typography> */}
            <Pagination className='paginationBar' variant="outlined" color='primary' count={10} page={page} onChange={handleChange} />
        </Stack>
    );
}