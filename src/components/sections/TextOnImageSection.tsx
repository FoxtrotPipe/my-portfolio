import { Grid } from "@mui/material";
import MatchScore, { MatchScoreProps } from "../MatchScore";
import ImageSnippet, { ImageSnippetProps } from "../ImageSnippet";
import TextSnippet from "../TextSnippet";

interface TextOnImageSectionProps extends ImageSnippetProps {
    scores: Array<MatchScoreProps>
}

function TextOnImageSection({ alt, src, scores }: TextOnImageSectionProps) {
    return (
        <Grid container alignItems="center" className='top-match'>
            <Grid item xs={6}>
                <TextSnippet
                    
                />
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex'}}>
                <ImageSnippet 
                    alt={alt} 
                    src={src}
                />
            </Grid>
        </Grid>
    )
}

export default TextOnImageSection;