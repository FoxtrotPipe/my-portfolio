import { Grid } from "@mui/material";
import ImageSnippet, { ImageSnippetProps } from "../ImageSnippet";

interface ImageSectionProps extends ImageSnippetProps {

}

function ImageSection({ alt, src, width, maxWidth, description, icon, square, tinge, colors, variant = 'default' }: ImageSectionProps) {
    return (
        <Grid container alignItems="center">
            <Grid item xs={12}>
                <ImageSnippet 
                    alt={alt}
                    src={src}
                    width={width}
                    maxWidth={maxWidth}
                    description={description}
                    icon={icon}
                    square={square}
                    tinge={tinge}
                    colors={colors}
                    variant={variant}
                />
            </Grid>
        </Grid>
    )
}

export default ImageSection;