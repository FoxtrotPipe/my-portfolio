import { Box, Grid, Paper } from "@mui/material";
import TextSnippet, { TextSnippetProps } from "../TextSnippet";
import ImageSnippet, { ImageSnippetProps } from "../ImageSnippet";

import photo from '../../assets/blake_passport-photo.jpg';

interface ResumeSectionProps extends TextSnippetProps{

}

function ResumeSection({}: ResumeSectionProps) {
    return (
        <Grid 
            container 
            alignItems='center' 
            justifyContent='space-between'
            component={Paper}
            elevation={0}
            p={10}
            sx={{ borderRadius: 10 }}
        >
            {/* <Grid item xs={8}>
                <TextSnippet
                    title='Blake Tam'
                    content='HKUST ECE fresh graduate who’s passionate about web technologies and game development. 
                        Studied and possess basic software programming, network protocol and electronics knowledge. 
                        A motivated individual who loves problem solving, with proven and decent internship experience in developing web applications.'
                    noSpacing
                />
                <TextSnippet
                    subtitle='Experiences'
                    content={<>
                        Electronic Engineering Intern, Growgreen Limited
                        <ul>
                            <li>Repaired & replaced electronic components & sensors of smart electronics</li>
                        </ul>
                    </>}
                />
                <TextSnippet
                    subtitle='Education'
                    content={`Hong Kong University of Science & Technology, BEng in Electronic Engineering (Minor in IT)`}
                />
            </Grid>
            <Grid item xs={2}>
                <ImageSnippet
                    alt='Portfolio photo'
                    src={photo}
                />
            </Grid> */}
            <Grid item xs={12}>
                <TextSnippet
                    title='Blake Tam'
                    content='HKUST ECE fresh graduate who’s passionate about web technologies and game development. 
                        Studied and possess basic software programming, network protocol and electronics knowledge. 
                        A motivated individual who loves problem solving, with proven and decent internship experience in developing web applications.'
                    noSpacing
                />
                <TextSnippet
                    subtitle='Experiences'
                    content={<>
                        Electronic Engineering Intern, Growgreen Limited
                        <ul>
                            <li>Repaired & replaced electronic components & sensors of smart electronics</li>
                        </ul>
                    </>}
                />
                <TextSnippet
                    subtitle='Education'
                    content={`Hong Kong University of Science & Technology, BEng in Electronic Engineering (Minor in IT)`}
                />
            </Grid>
        </Grid>
    )
}

export default ResumeSection;