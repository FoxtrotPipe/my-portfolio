import { useEffect } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { MatchScoreProps } from "../MatchScore";
import MatchOverview, { MatchOverviewProps } from "../MatchOverview";
import { ImageSnippetProps } from "../ImageSnippet";
import ScoreSection from "./ScoreSection";

import $ from 'jquery';

interface BillboardSectionProps extends ImageSnippetProps, MatchOverviewProps {
    scores: Array<MatchScoreProps>
}

function BillboardSection({ alt, src, subtitle, content, center, events, scores }: BillboardSectionProps) {
    useEffect(() => {
        $('.top-match .match-score.left').hover(
            () => $('.top-match .match-event.left').addClass('light-up enlarge'),
            () => $('.top-match .match-event.left').removeClass('light-up enlarge')
        )
        $('.top-match .match-score.right').hover(
            () => $('.top-match .match-event.right').addClass('light-up enlarge'),
            () => $('.top-match .match-event.right').removeClass('light-up enlarge')
        )
    }, []);

    return (
        <>
            <ScoreSection
                alt={alt}
                src={src}
                scores={scores}
            />
            <Grid container alignItems="center" className='top-match'>
                <Grid item xs={12}>
                    <Divider
                        variant='fullWidth'
                        color='white'
                        sx={{ opacity: .8 }}
                    />
                    <MatchOverview
                        content={<>
                            <Typography variant='overline' sx={{ opacity: .8 }}>
                                { subtitle }
                            </Typography>
                            <Typography>
                                { content }
                            </Typography>
                        </>}
                        events={events}
                        center={center}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default BillboardSection;