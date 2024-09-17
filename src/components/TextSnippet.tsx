import { Box, Divider, Paper, Typography, useMediaQuery } from "@mui/material";

export interface TextSnippetProps {
    id?: string,
    title?: string | React.ReactElement,
    subtitle?: string | React.ReactElement,
    content?: string | React.ReactElement,
    noSpacing?: boolean,
    divider?: boolean,
    center?: boolean,
    tinge?: string,
    variant?: 'default' | 'contained' | 'bar' | 'billboard'
}

function TextSnippetDivider() {
    return (
        <Divider 
            variant='fullWidth' 
            sx={{ my: 3 }}
        /> 
    )
}

function TextSnippet({ id, title, subtitle, content, noSpacing, divider, center, tinge, variant = 'default' }: TextSnippetProps) {
    const tablet = useMediaQuery('(min-width: 900px)');
    
    return (
        <Box
            id={id}
            textAlign={center ? 'center' : 'left'} 
            sx={noSpacing ? null : { mt: 8, mb: 4 }}
        >
            { variant == 'bar' ?
                ( title != null || subtitle != null ? 
                <>
                    <Paper
                        elevation={10}
                        sx={{
                            py: 2,
                            px: 5,
                            background: `
                                ${tinge != null ? `repeating-linear-gradient(135deg, ${tinge} 0px, ${tinge} 8px, transparent, transparent, transparent), ` : ''}
                                repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                            `
                            // border: '1px solid white'
                        }}
                    >
                        <Typography component='div' variant='h3' fontWeight="bold" color="primary">
                            { title }
                        </Typography>
                        <Typography component='div' variant='h6' color='secondary' sx={{ opacity: .8 }}>
                            { subtitle }
                        </Typography>
                    </Paper> 
                    { divider ? <TextSnippetDivider/> : null }
                    <Typography component='div' textAlign='justify' mt='10px' color='text.primary' sx={{ opacity: .8 }}>
                        { content }
                    </Typography>
                </>
                : null 
                ) 
            : variant == 'contained' ?
            <>
                <Paper
                    elevation={0}
                    sx={{
                        p: tablet ? 10 : 5,
                        mb: 10,
                        borderRadius: 10
                    }}
                >
                    <Typography component='div' variant='h3' fontWeight="bold" color="primary">
                        { title }
                    </Typography>
                    <Typography component='div' variant='h6' color='secondary' sx={{ opacity: .8 }}>
                        { subtitle }
                    </Typography>
                    { divider ? <TextSnippetDivider/> : null }
                    <Typography component='div' textAlign='justify' mt='10px' color='text.primary' sx={{ opacity: .8 }}>
                        { content }
                    </Typography>
                </Paper>
            </>
            : variant == 'billboard' ?
            <>
                <Typography component='div' variant='h1' fontWeight="bold" color="primary" sx={{ textTransform: 'uppercase' }}>
                    { title }
                </Typography>
                <Typography component='div' variant='h6' color='secondary' sx={{ opacity: .8 }}>
                    { subtitle }
                </Typography>
                { divider ? <TextSnippetDivider/> : null }
                <Typography component='div' textAlign='justify' mt='10px' color='text.primary' sx={{ opacity: .8 }}>
                    { content }
                </Typography>
            </>
            : 
            <>
                <Typography component='div' variant='h3' fontWeight="bold" color="primary">
                    { title }
                </Typography>
                <Typography component='div' variant='h6' color='secondary' sx={{ opacity: .8 }}>
                    { subtitle }
                </Typography>
                { divider ? <TextSnippetDivider/> : null }
                <Typography component='div' textAlign='justify' mt='10px' color='text.primary' sx={{ opacity: .8 }}>
                    { content }
                </Typography>
            </>
            }
        </Box>
    );
}

export default TextSnippet;