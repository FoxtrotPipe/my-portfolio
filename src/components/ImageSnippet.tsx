import { Box, Link, Paper, Typography } from '@mui/material';

export interface ImageSnippetProps {
    alt?: string,
    src?: string,
    width?: string | number,
    maxWidth?: string | number,
    description?: string | React.ReactElement,
    borderRadius?: string | number,
    icon?: boolean,
    square?: boolean,
    tinge?: string,
    colors?: Array<string>,
    variant?: 'default' | 'pattern' | 'contained'
}

function ImageSnippet({ alt, src, width, maxWidth, description, borderRadius = 10, icon, square, tinge, colors, variant = 'default' }: ImageSnippetProps) {
    return (
        variant == 'contained' ?
        <Paper
            elevation={10}
            sx={{
                p: 5,
                background: `
                    ${tinge != null ? `repeating-linear-gradient(0deg, ${tinge} 0px, ${tinge} 8px, transparent, transparent, transparent), ` : ''}
                    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                `,
                borderRadius: borderRadius
                // border: '1px solid white'
            }}
        >
            <Box
                component='img'
                alt={alt}
                src={src}
                sx={{
                    width: width ? width : icon ? '4ch' : '100%',
                    maxWidth: maxWidth,
                    mx: icon ? 1 : '',
                    objectFit: 'cover',
                    aspectRatio: square ? '1/1' : '',
                    borderRadius: borderRadius
                }}
            />
            <Typography color='text.primary' fontSize='1em'>
                { description }
            </Typography>
        </Paper> 
        : variant == 'pattern' ?
        <>
            <Box
                component='img'
                alt={alt}
                src={src}
                sx={{
                    width: width ? width : icon ? '4ch' : '100%',
                    maxWidth: maxWidth,
                    mx: icon ? 1 : '',
                    objectFit: 'cover',
                    aspectRatio: square ? '1/1' : '',
                    backgroundColor: 'transparent',
                    // background: `repeating-linear-gradient( -45deg, rgba(219, 0, 48, .5), rgba(219, 0, 48, .5) 8px, transparent 8px, transparent 48px),
                    // repeating-linear-gradient( -45deg, rgba(0, 77, 152, .5) 24px, rgba(0, 77, 152, .5) 32px, transparent 32px, transparent 72px )`,
                    background: colors != null ? `
                        repeating-linear-gradient( -45deg, ${colors[0]}, ${colors[0]} 8px, transparent 8px, transparent 48px),
                        repeating-linear-gradient( -45deg, ${colors[1]} 24px, ${colors[1]} 32px, transparent 32px, transparent 72px )
                    `: ''
                        // repeating-linear-gradient( -45deg, ${colors[0]}, ${colors[0]} 8px, transparent, transparent)
                    ,
                    borderRadius: borderRadius,
                    overflow: 'hidden'
                }}
            /> 
            <Typography color='text.primary' fontSize='1em'>
                { description }
            </Typography>
        </>
        : <>
            <Box
                component='img'
                alt={alt}
                src={src}
                sx={{
                    width: width ? width : icon ? '4ch' : '100%',
                    maxWidth: maxWidth,
                    mx: icon ? 1 : '',
                    objectFit: 'cover',
                    aspectRatio: square ? '1/1' : '',
                    borderRadius: borderRadius
                }}
            />
            <Typography color='text.primary' fontSize='1em' mb={icon ? '' : 5}>
                { description }
            </Typography>
        </>
    )
}

export default ImageSnippet;