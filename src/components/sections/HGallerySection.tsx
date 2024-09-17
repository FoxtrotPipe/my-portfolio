import { Grid } from "@mui/material";
import HGallery, { HGalleryProps } from "../HGallery";

interface HGallerySectionProps extends HGalleryProps {

}

function HGallerySection({ navigation, items, variant }: HGallerySectionProps) {
    return (
        <Grid container alignItems="center">
            <Grid item xs={12} justifyContent='center'>
                <HGallery 
                    navigation={navigation}
                    items={items} 
                    variant={variant}
                />
            </Grid>
        </Grid>
    )
}

export default HGallerySection;