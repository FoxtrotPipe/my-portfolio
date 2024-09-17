import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';

export interface MatchScoreProps {
    icon: React.ReactElement,
    team: string,
    score: string,
    orientation?: 'left' | 'right'
}

function MatchScore({ icon, team, score, orientation = 'left' }: MatchScoreProps) {
    return (
        orientation == 'left' ?
        <Grid container alignItems='center'>
            <Grid item xs={7}>
                <Container 
                    maxWidth='md' 
                    sx={{ width: '100%' }}
                >
                    { icon }
                </Container>
                <Typography
                    mt={2} 
                    color='white'
                >
                    { team }
                </Typography>
            </Grid>
            <Grid item xs={5}>
                <Typography 
                    className='match-score left'
                    variant='h1' 
                    color='white' 
                    sx={{ 
                        opacity: .5,
                        transition: 'all .2s',
                        ':hover': {
                            opacity: 1,
                            transform: 'scale(1.1)',
                            textShadow: '0px 0px 35px gold'
                        }
                    }}
                >
                    { score }
                </Typography>
            </Grid>
        </Grid> :
        <Grid container alignItems='center'>
            <Grid item xs={5}>
                <Typography 
                    className='match-score right'
                    variant='h1' 
                    color='white' 
                    sx={{ 
                        opacity: .5,
                        transition: 'all .2s',
                        ':hover': {
                            opacity: 1,
                            transform: 'scale(1.1)',
                            textShadow: '0px 0px 35px gold'
                        }
                    }}
                >
                    { score }
                </Typography>
            </Grid>
            <Grid item xs={7}>
                <Container 
                    maxWidth='md' 
                    sx={{ width: '100%' }}
                >
                    { icon }
                </Container>
                <Typography 
                    mt={2} 
                    color='white'
                >
                    { team }
                </Typography>
            </Grid>
        </Grid>
    )
}

export default MatchScore;