import { Grid } from "@mui/material";
import MatchScore, { MatchScoreProps } from "../MatchScore";
import ImageSnippet, { ImageSnippetProps } from "../ImageSnippet";

interface ScoreSectionProps extends ImageSnippetProps {
    scores: Array<MatchScoreProps>
}

function ScoreSection({ alt, src, scores }: ScoreSectionProps) {
    return (
        <Grid container alignItems="center" className='top-match'>
            <Grid item xs={3}>
                <MatchScore 
                    icon={scores[0].icon} 
                    team={scores[0].team} 
                    score={scores[0].score}
                    orientation='left'                 
                />
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex'}}>
                <ImageSnippet 
                    alt={alt} 
                    src={src}
                />
            </Grid>
            <Grid item xs={3}>
                <MatchScore 
                    icon={scores[1].icon}
                    team={scores[1].team}  
                    score={scores[1].score}
                    orientation='right'                   
                />
            </Grid>
        </Grid>
    )
}

export default ScoreSection;