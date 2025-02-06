import { Box, Chip } from '@mui/material';

import projNluInRtsGame from '../../assets/projects/nlu-in-rts-game/thumbnail.png';
import projSmartCamMan from '../../assets/projects/smart-cam-man/thumbnail.jpg';
// import projBasys3Fpga from '../../assets/projects/basys3-fpga/thumbnail.png';
// import projP4Server from '../../assets/projects/p4-server/thumbnail.png';
import projWebAppointmentSystem from '../../assets/projects/web-appointment-system/thumbnail.jpg';
import projHomelabWeb from '../../assets/projects/homelab-web/thumbnail.png';
import cleaning from '../../assets/jobs/growgreen/clean.jpg';
import assembling from '../../assets/jobs/growgreen/assemble.jpg';
import webapp from '../../assets/jobs/hkust/demo.gif';

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
                    <Chip label='Game design enthusiast'/>
                    <Chip label='ECE graduate'/>
                </Box>}
                center
                variant='billboard'
            />
            <PureTextSection
                id='projects'
                title='Projects & DIYs'
                content='A collection of stuffs I built, including course projects, on-the-job projects & DIYs. Click on them to see the details!'
            />
            <HGallerySection
                navigation
                items={[
                    { img: projNluInRtsGame, title: 'NLU command & controls in RTS game', url: '/nlu-in-rts-game'},
                    { img: projWebAppointmentSystem, title: 'Diploma collection appointment web app', url: '/web-app'},
                    { img: projHomelabWeb, title: 'DIY football webpage', url: '/homelab-web'},
                    { img: projSmartCamMan, title: '"Smart cam man" face-tracking robot', url: '/smart-cam-man'}
                    // { img: projBasys3Fpga, title: 'Sequence detector', url:'/seq-detector'},
                    // { img: projP4Server, title: 'Homelab Perforce server on Linux virtual machine', url: '/p4-server'},           
                ]}
                variant='tall'
            />
            <PureTextSection
                id='games'
                title='Games'
                content={<>
                    <iframe src="https://itch.io/embed/3293373?bg_color=ece9d0&amp;fg_color=000000&amp;link_color=002387&amp;border_color=b6b189" width="552" height="167"><a href="https://blaketam.itch.io/dr-voltagestein">Dr. Voltagestein by BlakeTam, SukeBancho, Toasty</a></iframe>
                    <iframe src="https://itch.io/embed/3149762?dark=true" width="552" height="167"><a href="https://blaketam.itch.io/the-house">The House: One-button Room Escape Mystery by BlakeTam</a></iframe>
                </>}
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
                            <li>Develop browser game according to designer requirement w/ React.js & Phaser</li>
                            <li>Assist in consumer electronic product repair & fault diagnosis</li>
                            <li>Performed ad hoc debugging & user testing duties</li>
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
                        I worked this job for 3 months in summer (Jun 2022 – Sep 2022)
                        <ul>
                            <li>Troubleshoot & resolve technical issues of frontend interface w/ JavaScript</li>
                            <li>Collaborate with tech team colleagues using SourceTree & Git</li>
                        </ul>
                    </>}
                    variant='contained'
                />
                <PureTextSection
                    title='IT Intern'
                    subtitle='@ HKUST Academic Registry'
                    content={<>
                        I worked this job for 3 months (Jul 2021 – Sep 2021). Then I was hired as part-time for ~6 more months (Oct 2021 - May 2022). This is my first intern job.
                        <ul>
                            <li>Develop diploma collection appointment web app using Microsoft PowerApps</li>
                            <li>Provide technical support & maintenance of the system upon its launch</li>
                        </ul>
                    </>}
                    variant='contained'
                />
                <ImageSection
                    src={webapp}
                    description={<>
                        A glimpse of the web app I made during the job. It has been used by Academic Registry to handle diploma collection appointment starting from 2021 up to now (as of writing in 2024). 
                    </>}
                    maxWidth='500px'
                />
                <PureTextSection
                    id='about'
                    title='About'
                    content='My qualifications, skills & education background'
                />
                <PureTextSection
                    title='Blake Tam'
                    content={<>
                        Game Jam goer, game development enthusiast and UST fresh graduate.
                        <TextSnippet
                            subtitle='Education'
                            content={<>
                                Hong Kong University of Science & Technology, BEng in Electronic Engineering, Minor in IT
                            </>}
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
