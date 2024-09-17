import { Box, Chip } from '@mui/material';

import proj1 from '../../assets/projects/nlu-in-rts-game/thumbnail.png';
import proj2 from '../../assets/projects/smart-cam-man/thumbnail.jpg';
import proj3 from '../../assets/projects/p4-server/thumbnail.png';
import proj4 from '../../assets/projects/homelab-web/thumbnail.png';
import cleaning from '../../assets/jobs/growgreen/clean.jpg';
import assembling from '../../assets/jobs/growgreen/assemble.jpg';

import PureTextSection from '../sections/PureTextSection';
import ImageSection from '../sections/ImageSection';
import HGallerySection from '../sections/HGallerySection';
import Wrapper from '../Wrapper';
import TextSnippet from '../TextSnippet';

function Home() {
    return (
        <>
            <PureTextSection
                title='Blake Tam' 
                subtitle={<Box 
                    display='flex'
                    justifyContent='center'
                    gap={1}
                    py={1}
                >
                    <Chip label='Creative solution enthusiast'/>
                    <Chip label='Game development enthusiast'/>
                    <Chip label='ECE graduate'/>
                </Box>}
                center
                variant='billboard'
            />
            <PureTextSection
                id='projects'
                title='Side projects & homelabs'
                content='A collection of stuffs I built, including course projects, side projects & homelabs. Click on them to see the details!'
            />
            <HGallerySection
                navigation
                items={[
                    { img: proj1, title: 'Final year project - Natural language command & controls in real-time strategy game', url: '/nlu-in-rts-game'},
                    { img: proj2, title: '"Smart cam man" face-tracking robot', url: '/smart-cam-man'},
                    { img: proj3, title: 'Homelab Perforce server on Linux virtual machine', url: '/p4-server'},
                    { img: proj4, title: 'Homelab web design project', url: '/homelab-web'}
                ]}
                variant='tall'
            />
            <Wrapper width='md'>
                <PureTextSection
                    id='jobs'
                    title='Intern jobs'
                    content='The intern jobs where I gained some hands-on experience'
                />
                <PureTextSection
                    title='Electronic Engineer (Intern)'
                    subtitle='@ Growgreen Limited'
                    content={<>
                        I've worked in this summer job for 3 months as intern (Jun 2023 – Sep 2023). Then I was hired as part-time for 9 more months (Sep 2023 – May 2024)
                        <ul>
                            <li>Learn the structure of embed products of the company within <span className='stats'>2</span> weeks</li>
                            <li>Diagnose faults in embed products and repair them. Repaired water pumps, touchpads, sensors & LEDs of <span className='stats'>10+</span> embed products</li>
                            <li>Get my hands dirty, such as clean PCB & solder iron</li>
                        </ul>
                    </>}
                    variant='contained'
                />
                <ImageSection
                    src={cleaning}
                    description='Customers send in embed products with problem and I was assigned to diagnose the cause of the faults. The PCB in this product has blue chemical compound due to water seepage. It has high risk of short circuit so I had to clean the PCB with spray and towel'
                    maxWidth='500px'
                />
                <ImageSection
                    src={assembling}
                    description='Reassemble the product after repair'
                    maxWidth='500px'
                />
                <PureTextSection
                    title='Web Developer (Intern)'
                    subtitle='@ Navy FAB Shopify Branding Agency'
                    content={<>
                        I worked this job for 3 months in summer (Jun 2022 – Sep 2022). This was my first intern job.
                        <ul>
                            <li>Learn the basics of source control & Shopify framework within <span className='stats'>1</span> month</li>
                            <li>Collaborated in a tech team of <span className='stats'>4+</span> people to write frontend code using SourceTree & Git</li>
                        </ul>
                    </>}
                    variant='contained'
                />
                <PureTextSection
                    id='about'
                    title='About'
                    content='My qualifications, skills & education background'
                />
                <PureTextSection
                    title='Blake Tam'
                    content={<>
                        A HKUST ELEC fresh graduate who’s not afraid to learn and try out crazy ideas. 
                        <TextSnippet
                            subtitle='Education'
                            content={<>
                                Hong Kong University of Science & Technology, BEng in Electronic Engineering, Minor in IT
                                <ul>
                                    <li>OOP & Data Structure</li>
                                    <li>Signal Processing & Modulation</li>
                                    <li>Frequency Filter Design</li>
                                    <li>Op Amp & Diode Circuits</li>
                                </ul>
                                (Transcript only provided upon request)
                            </>}
                        />
                        <TextSnippet
                            subtitle='Skills (Summary)'
                            content={<ul>
                                <li>OOP - Cpp / C# / Python</li>
                                <li>Microcontroller programming - Arduino / STM32</li>
                                <li>IoT design softwares - PSpice / Vivado / STM32Cube</li>
                                <li>Web technologies - HTML / CSS / JS / TS</li>
                            </ul>}
                        />
                        <TextSnippet
                            subtitle='Hobbies & Others'
                            content={<ul>
                                <li>Hobbies: Game development, badminton, football</li>
                                <li>Language: Native Cantonese, Good Command of English & Mandarin</li>
                            </ul>}
                        />
                    </>}
                    variant='contained'
                />
            </Wrapper>
        </>
    );
}

export default Home;
