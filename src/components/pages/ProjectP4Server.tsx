import { Box, Chip, Typography } from '@mui/material';

import server from '../../assets/projects/p4-server/thumbnail.png';

import PureTextSection from '../sections/PureTextSection';
import Wrapper from '../Wrapper';
import ImageSection from '../sections/ImageSection';

function ProjectP4Server() {
    return (
        <>
            <PureTextSection
                title={<Typography variant='h2' fontWeight='bold'>
                    Homelab Perforce server on Linux virtual machine
                </Typography>}
                subtitle={<Box 
                    display='flex'
                    justifyContent='center'
                    gap={1}
                    py={1}
                >
                    <Chip label='Homelab'/>
                    <Chip label='Self-learn from scratch'/>
                    <Chip label='Linux'/>
                    <Chip label='Source control'/>
                </Box>}
                center
                variant='billboard'
            />
            <Wrapper width='md'>
                <PureTextSection
                    id='background'
                    title='Background'
                    content={<>
                        Me and my buddies wanted to have a cheap, remote Perforce source control server in order to collaborate on Unreal Engine.<br/><br/>
                        We were looking forward to do an Unreal game project together using this server. We explored serveral alternatives such as AWS, Github w/ LFS, but their Perforce hosting solutions were very expensive for hobbiyist like us.<br/><br/>
                        Craving for a cheap and feasible way to fuel our game dev hobby, I decided to embark on a home lab project - hosting the Perforce server on-premise using my home desktop. <br/><br/>
                    </>}
                />
                <PureTextSection
                    id='challenge'
                    title='Challenge'
                    content={<>
                        <ul>
                            <li>As none of us have legitimate cybersecurity background, it was scary to host a server, but there is always first step to everything and you'll never know if you don't try. 
                            The best I can do is to strictly follow Perforce administration guide & online tutorials to secure our server.</li>
                        </ul>
                    </>}
                    variant='contained'
                />
                <PureTextSection
                    id='product'
                    title='Final product'
                    content={<>
                        The Perforce server now runs on my home desktop behind my router. My buddies are able to access the server over the internet to push & pull Unreal project code.<br/><br/>
                        Server details are not provided due to security concerns.
                    </>}
                />
                <ImageSection
                    alt='Server'
                    src={server}
                    description='Accessing the server on my own machine'
                    maxWidth='500px'
                />
                <PureTextSection
                    id='outcome'
                    title='Outcome'
                    content={<>
                        <ul>
                            <li>A running Perforce server on home desktop with user access controls & security configuration</li>
                            <li>A running Perforce server where my buddies can pull & push Unreal project code & assets on remote locations</li>
                            <li>Learn and set up security layers of the server in <span className='stats'>2</span> weeks, including server-layer permission tables, user groups & ssl to encrypt server traffics</li>
                            <li>Learn security implications of port-forwarding</li>
                            <li>The server is a work in progress. Features like routine backup, security audits yet to be implemented.</li>
                        </ul>
                    </>}
                    variant='contained'
                />
            </Wrapper>
        </>
    );
}

export default ProjectP4Server;
