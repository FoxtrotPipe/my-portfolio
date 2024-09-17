import { Box, Chip, Typography } from '@mui/material';

import web from '../../assets/projects/homelab-web/thumbnail.png';

import VisibilityIcon from '@mui/icons-material/Visibility';
import PureTextSection from '../sections/PureTextSection';
import Wrapper from '../Wrapper';
import ImageSection from '../sections/ImageSection';

function ProjectHomelabWeb() {
    return (
        <>
            <PureTextSection
                title={<Typography variant='h2' fontWeight='bold'>
                    Homelab web design project
                </Typography>}
                subtitle={<Box 
                    display='flex'
                    justifyContent='center'
                    gap={1}
                    py={1}
                >
                    <Chip label='Homelab'/>
                    <Chip label='Web development'/>
                </Box>}
                center
                variant='billboard'
            />
            <Wrapper width='md'>
                <PureTextSection
                    id='demo'
                    title={<>
                        <VisibilityIcon fontSize='large'/> See it in action
                    </>}
                    content={<>
                        Jump straight into the <a href='https://foxtrotpipe.github.io/football-page/'><u>website</u></a> on my Github to see the project in action.
                    </>}
                    variant='contained'
                />
                <PureTextSection
                    id='background'
                    title='Background'
                    content={<>
                        This is just a website I coded for fun. I writes about my favourite football matchups & players there. If you feel interested, you can check it out.
                    </>}
                />
                <PureTextSection
                    id='product'
                    title='Finished product'
                    content={<>
                        The website now runs on my Github.
                    </>}
                />
                <ImageSection
                    alt='Web'
                    src={web}
                    description='Website screenshot'
                    maxWidth='500px'
                />
                <PureTextSection
                    id='outcome'
                    title='Outcome'
                    content={<>
                        <ul>
                            <li>Design and coded a website (in fact this portfolio also is)</li>
                            <li>Practice the use of web technologies</li>
                        </ul>
                    </>}
                    variant='contained'
                />
            </Wrapper>
        </>
    );
}

export default ProjectHomelabWeb;
