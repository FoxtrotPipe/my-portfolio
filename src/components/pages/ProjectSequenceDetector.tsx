import { Box, Chip, Typography } from '@mui/material';

import example from '../../assets/projects/basys3-fpga/example.png';
import diagram from '../../assets/projects/basys3-fpga/diagram.png';
import snippet from '../../assets/projects/basys3-fpga/snippet.jpg';
import validation from '../../assets/projects/basys3-fpga/validation.png';

import PureTextSection from '../sections/PureTextSection';
import Wrapper from '../Wrapper';
import ImageSection from '../sections/ImageSection';

function ProjectSequenceDetector() {
    return (
        <>
            <PureTextSection
                title={<Typography variant='h2' fontWeight='bold'>
                    Basys 3 sequence detector
                </Typography>}
                subtitle={<Box 
                    display='flex'
                    justifyContent='center'
                    gap={1}
                    py={1}
                >
                    <Chip label='Course project'/>
                    <Chip label='Digital circuit'/>
                    <Chip label='Design validation'/>
                </Box>}
                center
                variant='billboard'
            />
            <Wrapper width='md'>
                <PureTextSection
                    id='background'
                    title='Background'
                    content={<>
                        In a course of digital circuit design, we needed to design & implement a sequence detector with a Xilinx FPGA Basys 3 board as a project. <br/><br/>
                        It is basically a digital circuit that is supposed to: <br/>
                        <ul>
                            <li>Detect pre-defined button press sequence, such as 0010, 010</li>
                            <li>Light up LED when the sequence is detected</li>
                        </ul>
                    </>}
                />
                <PureTextSection
                    id='product'
                    title='Finished product'
                    content={<>
                        We designed the digital logic with a state diagram and programmed the board using VHDL in Xilinx Vivado.
                    </>}
                />
                <ImageSection
                    alt='Example io'
                    src={example}
                    description='Example i/o of the sequence detector'
                    maxWidth='500px'
                />
                <ImageSection
                    alt='State diagram'
                    src={diagram}
                    description='State diagram of the sequence detector'
                    maxWidth='500px'
                />
                <ImageSection
                    alt='Snippet'
                    src={snippet}
                    description='Snippet of the sequence detector implementation (in VHDL)'
                    maxWidth='500px'
                />
                <ImageSection
                    alt='Design validation'
                    src={validation}
                    description="We also wrote testbench files in VHDL to validate our implementation. This is a simulation waveform that showcases the board's behavior"
                    maxWidth='700px'
                />
                <PureTextSection
                    id='outcome'
                    title='Outcome'
                    content={<>
                        <ul>
                            <li>A sequence detector that can detect pre-defined button press sequence</li>
                            <li>Practice digital circuit design & design validation</li>
                        </ul>
                    </>}
                    variant='contained'
                />
            </Wrapper>
        </>
    );
}

export default ProjectSequenceDetector;
