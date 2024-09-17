import * as React from 'react';
import { Grid } from '@mui/material';
import TextSnippet from './TextSnippet';
import Achievement from './Achievement';

type AchievementType = [string, number, string];

export interface ProfileOverviewProps {
    title?: string | React.ReactElement,
    subtitle?: string | React.ReactElement
    content?: string | React.ReactElement,
    divider?: boolean,
    center?: boolean,
    tinge?: string,
    colors?: Array<string>
    achievements?: Array<AchievementType>,
}

function ProfileOverview({ title, subtitle, content, divider, center, tinge, colors, achievements }: ProfileOverviewProps) {
    return (
        <>
            <TextSnippet
                title={title}
                subtitle={subtitle}
                content={content}
                divider={divider}
                center={center}
                tinge={tinge}
                variant='bar'
            />
            <Grid container my={5} spacing={3} alignItems='stretch'>
                { achievements?.map((item, index) => (
                    <Achievement
                        key={index}
                        src={item[0]}
                        data={item[1]}
                        title={item[2]}
                        tinge={colors != null ? (index % 2 == 0 ? colors[1] : colors[0]) : undefined}
                    />
                ))}
            </Grid>
        </>
    );
}

export default ProfileOverview;