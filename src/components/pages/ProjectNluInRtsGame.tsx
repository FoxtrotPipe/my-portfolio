import { Box, Chip, Typography } from '@mui/material';

import ui from '../../assets/projects/nlu-in-rts-game/ui.png';
import system from '../../assets/projects/nlu-in-rts-game/system.jpg';

import VisibilityIcon from '@mui/icons-material/Visibility';
import PureTextSection from '../sections/PureTextSection';
import Wrapper from '../Wrapper';
import ImageSection from '../sections/ImageSection';

function ProjectNluInRtsGame() {
    return (
        <>
            <PureTextSection
                title={<Typography variant='h2' fontWeight='bold'>
                    Natural language command & controls in real-time strategy game
                </Typography>}
                subtitle={<Box 
                    display='flex'
                    justifyContent='center'
                    gap={1}
                    py={1}
                >
                    <Chip label='Final year project'/>
                    <Chip label='ECE'/>
                    <Chip label='Game design'/>
                </Box>}
                center
                variant='billboard'
            />
            <Wrapper width='md'>
                <PureTextSection
                    id='demo'
                    title={<>
                        <VisibilityIcon fontSize='large'/> See it in action
                    </>}
                    content={<>
                        If you're bored by words, then jump straight into the <a href='https://github.com/FoxtrotPipe/EceFyp_RtsGameWithNluControls?tab=readme-ov-file#gameplay-preview'><u>demo clips</u></a> on my Github to see the project in action
                    </>}
                    variant='contained'
                />
                <PureTextSection
                    id='background'
                    title='Background'
                    content={<>
                        I wanted to do something different for my final year project and don't want to just do a template project from my professor. <br/><br/>
                        I'm into games and came up with an idea in my head: What if you get to tell a game what you want to do and the game does it for you? Basically, we build an input system where:
                        <ol>
                            <li>You tell a sentence to a game (that carries an intent)</li>
                            <li>The game understands your meaning or intent</li>
                            <li>The intended action is then executed in the game</li>
                        </ol><br/>
                        This idea is adventurous enough that it got the approval of my professor. Me and my teammate then set out goals and work out the project prototype in 7 months.
                    </>}
                />
                <PureTextSection
                    id='challenge'
                    title='Challenge'
                    content={<>
                        <ul>
                            <li>There is almost no similar products for reference</li>
                            <li>How are players supposed to know what they will or will not be able to do in a certain game context?</li>
                            <li>How do we define a set of intent that is rigorous enough for AI model training, while also flexible enough that it doesn't restrict what players can do in the game?</li>
                            <li>How do we justify the use of this innovative system over the standard "mouse & keyboard" input system?</li>
                        </ul>
                    </>}
                    variant='contained'
                />
                <PureTextSection
                    id='product'
                    title='Finished product'
                    content={<>
                        We spent quite a bit of time to define our project scope. We decided that our system would not fit fast-paced gameplay, such as Battlefield & CoDs (since typing in a sentence everytime you shoot
                        a bullet would get very annoying). <br/><br/>
                        Our prototype system is designed to fit a casual-style, real-time strategy game. The system composes of:
                        <ul>
                            <li>Intent classification model (pre-trained in RASA)</li>
                            <li>Training dataset</li>
                            <li>Unity game</li>
                            <li>Lots of UI & assets</li>
                        </ul>
                        We made a game that allows players to control in-game actions through natural language prompts, enabling player to interact with the game with their own preferred sentences.
                    </>}
                />
                <ImageSection
                    alt='Block diagram'
                    src={system}
                    description={<>
                        Block diagram of final system. Everytime player types in a sentence, the game passes the sentence to an intent classifier to predict its intent. 
                        More details can be seen in our <a href='https://github.com/FoxtrotPipe/EceFyp_RtsGameWithNluControls?tab=readme-ov-file#presentation-slides-w-results'><u>presentation slides</u></a> at Github
                    </>}
                    maxWidth='700px'
                />
                <ImageSection
                    alt='UI layout of prototype'
                    src={ui}
                    description='UI layout of final system'
                    maxWidth='500px'
                />
                <PureTextSection
                    id='outcome'
                    title='Outcome'
                    content={<>
                        <ul>
                            <li>The performance of our AI model meets our target of responding within <span className='stats'>0.3</span> seconds, and its intent classification accuracy greater than <span className='stats'>0.6</span>.</li>
                            <li>A new input system that doesn't need players to remeber intricate keybinds</li>
                            <li>A new input system that removes the mental barrier between player and the game</li>
                            <li>Implemented graceful failure to improve the user-friendliness of the system</li>
                            <li>Landed an A</li>
                        </ul>
                    </>}
                    variant='contained'
                />
            </Wrapper>
        </>
    );
}

export default ProjectNluInRtsGame;
