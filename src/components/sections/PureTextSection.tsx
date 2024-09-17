import { Grid } from "@mui/material";
import TextSnippet, { TextSnippetProps } from "../TextSnippet";

interface PureTextSectionProps extends TextSnippetProps {

}

function PureTextSection({ id, title, subtitle, content, noSpacing, divider, center, variant = 'default' }: PureTextSectionProps) {
    return (
        <Grid container alignItems="center">
            <Grid item xs={12}>
                <TextSnippet 
                    id={id}
                    title={title}
                    subtitle={subtitle}
                    content={content}
                    noSpacing={noSpacing}
                    divider={divider}
                    center={center}
                    variant={variant}
                />
            </Grid>
        </Grid>
    )
}

export default PureTextSection;