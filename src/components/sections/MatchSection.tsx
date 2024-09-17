import { Grid } from "@mui/material";

import ImageSnippet, { ImageSnippetProps } from "../ImageSnippet";
import MatchOverview, { MatchOverviewProps } from "../MatchOverview";

interface MatchSectionProps extends ImageSnippetProps, MatchOverviewProps {
    
}

function MatchSection({ alt, src, title, subtitle, content, divider, center, events, single, colors, variant }: MatchSectionProps) {
    return (
        <Grid 
            container 
            alignItems="center" 
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, md: 10 }}
            my={3}
        >
            <Grid item xs={4}>
                <ImageSnippet 
                    alt={alt} 
                    src={src}
                    colors={colors}
                    variant={variant}
                />
            </Grid>
            <Grid item xs={8}>
                <MatchOverview
                    title={title}
                    subtitle={subtitle}
                    content={content}
                    divider={divider}
                    center={center}
                    tinge={colors ? colors[0] : undefined}
                    events={events}
                    single={single}
                />
            </Grid>
        </Grid>
    )
}

export default MatchSection;