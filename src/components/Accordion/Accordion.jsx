import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./accordion.css"

export default function SimpleAccordion({ cast, seasons }) {
    let max10Cast;
    if (cast.length > 10) {
        max10Cast = cast.slice(0, 10)

    } else { max10Cast = cast }

    return (
        <div>
            <Accordion sx={{ backgroundColor: "#C2C2C2", color: "#242424" }} className='accordion'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Cast</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography >
                        {max10Cast.map(({ person }) => {
                            return (<p className='accordionText' key={crypto.randomUUID()} >{person?.name}</p>)

                        })}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#C2C2C2", color: "#242424" }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Seasons</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {seasons.map((season) => {
                            return (<p key={crypto.randomUUID()} >{`${season?.premiereDate} - ${season?.endDate}`}</p>)

                        })}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div >
    );
}