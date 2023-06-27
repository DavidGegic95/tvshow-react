import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({ cast, seasons }) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Cast</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {cast.map(({ person }) => {
                            return (<p key={crypto.randomUUID()} >{person?.name}</p>)

                        })}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
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
            {/* <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion> */}
        </div>
    );
}