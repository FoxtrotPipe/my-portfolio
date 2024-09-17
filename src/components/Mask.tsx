import { Box } from "@mui/material";

interface MaskProps {
    width?: string,
    height?: string,
    left?: string,
    bottom?: string,
    opacity?: number,
    children?: React.ReactElement
}

function Mask({ width, height, left, bottom, opacity, children }: MaskProps) {
    return (
        <Box 
            width={width ? width : 'auto'}
            height={height ? height : 'auto'}
            position='absolute' 
            bottom={bottom}
            left={left}
            sx={{ opacity: opacity ? opacity : .7 }}
            zIndex={1}
        >
            { children }
        </Box>
    )
}

export default Mask;