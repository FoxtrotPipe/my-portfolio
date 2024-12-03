import { Box, Chip, Typography } from '@mui/material';

import demo from '../../assets/projects/web-appointment-system/demo.gif';
import doc from '../../assets/projects/web-appointment-system/doc.jpg';

import PureTextSection from '../sections/PureTextSection';
import Wrapper from '../Wrapper';
import ImageSection from '../sections/ImageSection';

function ProjectWebAppointmentSystem() {
    return (
        <>
            <PureTextSection
                title={<Typography variant='h2' fontWeight='bold'>
                    Diploma Collection Appointment System
                </Typography>}
                subtitle={<Box 
                    display='flex'
                    justifyContent='center'
                    gap={1}
                    py={1}
                >
                    <Chip label='On-the-job project'/>
                    <Chip label='Web app'/>
                </Box>}
                center
                variant='billboard'
            />
            <Wrapper width='md'>
                <PureTextSection
                    id='background'
                    title='Background'
                    content={<>
                        This is a PowerApp web app I developed as an IT intern under the Academic Registry of HKUST. <br/><br/>
                        
                        The department wanted an web app to handle diploma colleciton appointment so it is built for graduates to make appointments on when to collect their diplomas. Within the app, each student can pick time slot of their choosing to collect their diploma.
                    </>}
                />
                <PureTextSection
                    id='challenge'
                    title='Challenge'
                    content={<>
                        <ul>
                            <li>At the time, I had rather little knowledge about web programming so I had to learn the related knowledge head-on then implement the app</li>
                        </ul>
                    </>}
                    variant='contained'
                />
                <PureTextSection
                    id='product'
                    title='Final product'
                    content={<>
                        The app was then published and proved to be a successful project by handling the diploma collection appointments from more than 3000 students.
                    </>}
                />
                <ImageSection
                    alt='Demo of the appointment system'
                    src={demo}
                    description='A demo clip of the appointment system'
                    maxWidth='500px'
                />
                <ImageSection
                    alt='Glimpse of the system documentation that I wrote years ago'
                    src={doc}
                    description='Glimpse of the system documentation that I wrote years ago'
                    maxWidth='500px'
                />
                <PureTextSection
                    id='outcome'
                    title='Outcome'
                    content={<>
                        <ul>
                            <li>A web app that helps Academic Registry to handle diploma collection appointment of yearly graduates</li>
                            <li>Used by Academic Registry to handle diploma collection starting from 2021 to present (as of time of writing in 2024)</li>
                        </ul>
                    </>}
                    variant='contained'
                />
            </Wrapper>
        </>
    );
}

export default ProjectWebAppointmentSystem;
