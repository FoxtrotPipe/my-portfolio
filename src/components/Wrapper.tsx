import { Breakpoint, Container } from "@mui/material"

interface WrapperProps {
    width?: false | Breakpoint
    children?: React.ReactElement | Array<React.ReactElement>
}

function Wrapper({ width = 'xl', children }: WrapperProps) {
    return (
        <Container 
            maxWidth={width}
            sx={{ 
                display: "flex", 
                flexDirection: "column", 
                pt: "50px"
            }}
        >
            { children }
        </Container>
    )
}

export default Wrapper;