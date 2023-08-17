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
            <Accordion key="cast" sx={{ backgroundColor: "#C2C2C2", color: "#242424" }} className='accordion'>
                <AccordionSummary key="cast1"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography key="cast3">Cast</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography key="cast4">
                        {max10Cast.map(({ person }) => {

                            return (
                                <>
                                    <span key={person.id} className='accordionText'  >{person?.name}</span>
                                    <br key={person.id + 1000} />
                                </>
                            )


                        })}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion key="season" sx={{ backgroundColor: "#C2C2C2", color: "#242424" }} >
                <AccordionSummary key="sesaon1"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Seasons</Typography>
                </AccordionSummary>
                <AccordionDetails key="sesaon2">
                    <Typography key="sesaon3">
                        {seasons.map((season) => {
                            return season?.premiereDate && season?.endDate ?
                                (<>
                                    <span className='accordionText' key={season?.premiereDate} >{`${season?.premiereDate} - ${season?.endDate}`}</span>
                                    <br key={season?.premiereDate + 1000} />
                                </>)

                                : null

                        })}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div >
    );
}