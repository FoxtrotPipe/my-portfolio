import { Box, Chip, Typography } from '@mui/material';

import system from '../../assets/projects/smart-cam-man/system.jpg';
import front from '../../assets/projects/smart-cam-man/front-view.jpg';
import side from '../../assets/projects/smart-cam-man/side-view.jpg';
import estimate from '../../assets/projects/smart-cam-man/estimate.jpg';
import face from '../../assets/projects/smart-cam-man/face.png';

import PureTextSection from '../sections/PureTextSection';
import Wrapper from '../Wrapper';
import ImageSection from '../sections/ImageSection';

function ProjectSmartCamMan() {
    return (
        <>
            <PureTextSection
                title={<Typography variant='h2' fontWeight='bold'>
                    "Smart cam man" face-tracking robot
                </Typography>}
                subtitle={<Box 
                    display='flex'
                    justifyContent='center'
                    gap={1}
                    py={1}
                >
                    <Chip label='Course project'/>
                    <Chip label='ECE'/>
                    <Chip label='Robotics'/>
                </Box>}
                center
                variant='billboard'
            />
            <Wrapper width='md'>
                <PureTextSection
                    id='background'
                    title='Background'
                    content={<>
                        We were required to do an embedded system in a course project and we thought why not make a face-tracking robot. <br/><br/>
                        This project idea stemmed from the observation that many vloggers find it difficult to shoot cinematic footage from a distance by themselves.
                        They'd either have to hire a camera man to hold a camera or control a flying drone. <br/><br/>
                        We want to build a robot car that is equipped with a camera, face-tracking capabilities, obstacle detection, and other features that allow it to autonomously track a human face.
                    </>}
                />
                <PureTextSection
                    id='challenge'
                    title='Challenge'
                    content={<>
                        <ul>
                            <li>How do we make sure the robot doesn't bump into obstacle?</li>
                            <li>How do we make sure it tracks only the face of a single person, but won't track other pedestrians in the background?</li>
                            <li>How do we make sure the recorded footage is not bumpy or is smooth enough that it is comparable to a real-life camera man?</li>
                        </ul>
                    </>}
                    variant='contained'
                />
                <PureTextSection
                    id='product'
                    title='Final product'
                    content={<>
                        We built the entire system centered around a STM32 microcontroller. The robot car system consists of: <br/><br/>
                        <b>Obstacle detection</b>
                        <ul>
                            <li>IR sensor (installed near the bottom of the robot car)</li>
                            <li>Trigger warning LED and buzzer when obstacle is in proximity of car</li>
                        </ul>
                        <b>Face tracking</b>
                        <ul>
                            <li>Out-of-the-box Haar-cascade classifier to detect face</li>            
                            <li>Pan-tilt arm to control camera orientation</li>
                            <li>Track and pan to user face</li>
                        </ul>
                        <b>Fixed distance following</b>
                        <ul>
                            <li>Estimate distance to user face based on face rectangle size</li>
                            <li>Drive car forward / backward based on estimated distance</li>
                            <li>Robot attempts to follow the user at a fixed distance so vlogging experience is smoother</li>
                        </ul>
                    </>}
                />
                <ImageSection
                    alt='Front view of robot car'
                    src={front}
                    description='Front view of robot car. We made the car frame with cardboards and taped the STM32 microcontroller to the car front. The screen of the microcontroller is faced up to show user the real-time footage of the recording camera'
                    maxWidth='500px'
                />
                <ImageSection
                    alt='Side view of robot car'
                    src={side}
                    description='Side view of robot car. We can see inside the car there is breadboard and H bridge IC that drives the wheels (hidden inside the car for aesthetics)'
                    maxWidth='500px'
                />
                <ImageSection
                    alt='Face rectangle'
                    src={face}
                    description='Face detection result of robot car'
                    maxWidth='500px'
                />
                <ImageSection
                    alt='Distance estimation'
                    src={estimate}
                    description='To achieve fixed-distance following, we need to estimate distance. The robot estimates the distance based on face rectangle size. The bigger the rectangle, the shorter the distance.'
                    maxWidth='500px'
                />
                <ImageSection
                    alt='System diagram of robot car'
                    src={system}
                    description='System diagram of robot car'
                    maxWidth='700px'
                />
                <PureTextSection
                    id='outcome'
                    title='Outcome'
                    content={<>
                        <ul>
                            <li>A face-tracking robot that can detect obstacles in proximity and follow user</li>
                            <li>The robot has mixed result in responding promptly where response time is roughly &gt;1.5s. The design can be improved by having a microcontroller of greater computing power & storage, 
                                so the robot can get the face detection result at a faster rate.</li>
                            <li>The robot has mixed result capturing face at range &gt;2m. The design can be improved by using a higher resolution camera to capture faces at long range.</li>
                        </ul>
                    </>}
                    variant='contained'
                />
            </Wrapper>
        </>
    );
}

export default ProjectSmartCamMan;
