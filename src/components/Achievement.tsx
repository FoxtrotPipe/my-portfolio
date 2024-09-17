import { Grid, Paper, Typography } from "@mui/material"
import ImageSnippet from "./ImageSnippet"
import Mask from "./Mask"

interface AchievementProps {
    alt?: string
    src: string,
    data: number,
    title: string,
    tinge?: string
}

function Achievement({ src, data, title, tinge }: AchievementProps) {
    return (
        <Grid 
            item 
            xs={3} 
            display='flex'
            sx={{
                transition: 'all .2s',
                ':hover': {
                    transform: 'scale(1.1)'
                }
            }}
        >
            <Paper
                elevation={10}
                sx={{
                    width: '100%',
                    height: '180px',
                    p: 3,
                    background: `
                        ${tinge != null ? `repeating-linear-gradient(135deg, ${tinge} 0px, ${tinge} 32px, transparent, transparent, transparent), ` : ''}
                        repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                    `,
                    overflow: 'hidden',
                    position: 'relative'
                    // border: '1px solid white'
                }}
            >
                <Mask
                    width='100%'
                    bottom='-25%'
                    left='-25%'
                >
                    <ImageSnippet
                        alt=''
                        src={src}
                    />
                </Mask>
                <Grid
                    height='100%'
                    container 
                    position='relative'
                    direction='column'
                    alignItems='flex-end'
                    zIndex={2}
                >
                    <Grid 
                        item 
                        display='flex' 
                        alignItems='flex-end'
                    >
                        <Typography 
                            variant='h2' 
                            fontWeight='bold' 
                            color='gold'
                        >
                            { data }
                            <Typography
                                variant='h5'
                                display='inline'
                            >
                                x
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid 
                        item 
                        display='flex' 
                        alignItems='flex-start'
                    >
                        <Typography
                            textAlign='right'
                        >
                            { title }
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Achievement;