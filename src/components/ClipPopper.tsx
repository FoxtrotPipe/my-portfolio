import { Box, Card, Typography } from "@mui/material";
import GeneralPopper from "./GeneralPopper";
import YoutubeEmbed from "./YoutubeEmbed";

import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

interface ClipPopperProps {
    src?: string,
    start?: number,
    end?: number,
    children: React.ReactElement | Array<React.ReactElement>
}

function ClipPopper({ src, start, end, children }: ClipPopperProps) {
    return (
        src != null ?
        <GeneralPopper
            popper={
                <Card 
                    elevation={10} 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        bgcolor: 'black',
                        color: 'white',
                    }}
                >
                    <Box mx={2} display='flex' alignItems='center' flexDirection='column'>
                        <OndemandVideoIcon sx={{ mb: 2 }}/>
                        <Typography variant='overline' lineHeight={.5}>Goal</Typography>
                        <Typography variant='overline'>Preview</Typography>
                    </Box>
                    <YoutubeEmbed 
                        src={src} 
                        start={start}
                        end={end}
                        clip
                    />
                </Card>
            }
        >
            { children }
        </GeneralPopper> : <> { children } </>
    )
}

export default ClipPopper;