import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import TextSnippet from './TextSnippet';
import ClipPopper from './ClipPopper';

type Orientation = 'left' | 'right';
type Event = [string | React.ReactElement, Orientation] | [string | React.ReactElement, Orientation, string, number, number];

interface EventRowProps {
    orientation?: Orientation,
    src?: string,
    start?: number,
    end?: number,
    color?: string,
    fullWidth?: boolean,
    children?: React.ReactElement
}

export interface MatchOverviewProps {
    title?: string | React.ReactElement,
    subtitle?: string | React.ReactElement
    content?: string | React.ReactElement,
    divider?: boolean,
    center?: boolean,
    tinge?: string,
    events?: Array<Event>,
    single?: boolean
}

function EventRow({ orientation = 'left', src, start, end, color, fullWidth, children }: EventRowProps) {
    return (
        orientation == 'left' ? 
        <>
            <Grid 
                item 
                xs={fullWidth ? 12 : 6} 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: fullWidth ? 'center' : 'flex-end'
                }}
            >
                <ClipPopper 
                    src={src}
                    start={start} 
                    end={end}
                >
                    <Box
                        className='match-event left'
                        display='flex' 
                        alignItems='center' 
                        justifyContent={fullWidth ? 'center' : 'flex-end'}
                        color={color}
                        sx={{
                            opacity: .5,
                            transition: 'all .2s',
                            ':hover': {
                                opacity: 1,
                                transform: 'scale(1.05)'
                            }
                        }}
                        px={1}
                        py={.5}
                    >
                        { children }
                        <SportsSoccerIcon sx={{ 
                            color: src ? 'gold' : 'inherit', 
                            display: 'inline-block', 
                            mx: 1 
                        }}/>
                    </Box>
                </ClipPopper>
            </Grid>
            <Grid 
                item 
                xs={fullWidth ? 0: 6}
            >    
            </Grid>
        </> :
        <>
            <Grid 
                item 
                xs={fullWidth ? 0: 6}
            >
            </Grid>
            <Grid
                item 
                xs={fullWidth ? 12 : 6}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: fullWidth ? 'center' : 'flex-start'
                }}
            >
                <ClipPopper 
                    src={src}
                    start={start} 
                    end={end}
                >
                    <Box
                        className='match-event right'
                        display='flex' 
                        alignItems='center' 
                        justifyContent={fullWidth ? 'center' : 'flex-start'}
                        color={color}
                        sx={{
                            opacity: .5,
                            transition: 'all .2s',
                            ':hover': {
                                opacity: 1,
                                transform: 'scale(1.05)'
                            }
                        }}
                        px={1}
                        py={.5}
                    >
                        <SportsSoccerIcon sx={{ 
                            color: src ? 'gold' : 'inherit', 
                            display: 'inline-block', 
                            mx: 1 
                        }}/>
                        { children }
                    </Box>
                </ClipPopper>
            </Grid>
        </>
    )
}

function MatchOverview({ title, subtitle, content, divider, center, tinge, events, single }: MatchOverviewProps) {
    return (
        <>
            <TextSnippet
                title={title}
                subtitle={subtitle}
                content={content}
                divider={divider}
                center={center}
                tinge={tinge}
                variant='bar'
            />
            <Grid container my={5}>
                { events?.map((row, index) => (
                    <EventRow 
                        key={index}
                        orientation={row[1]} 
                        src={row[2]}
                        start={row[3]}
                        end={row[4]}
                        color='white'
                        fullWidth={single}
                    >
                        <Typography>
                            {row[0]}
                        </Typography>
                    </EventRow>
                ))}
                { events != null ?                                    
                    <Grid
                        item
                        xs={12}
                        mt={2}
                    >
                        <Typography 
                            variant='overline'
                            color='gold'
                            fontStyle='italic'
                            sx={{ opacity: .7 }}
                        >
                            Hover on golden ball to view the goal
                        </Typography>
                    </Grid>
                    : null
                }
            </Grid>
        </>
    );
}

export default MatchOverview;