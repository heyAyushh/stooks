import {  Card, Page, Grid, Spacer, Spinner } from '@zeit-ui/react';
import TakingYouThere from '../public/takingYouThere.svg';

export default function Loading() {
    return (
        <Page style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "800px",
            height: "800px"
        }}>
            <Card>
                <Spacer y={9} x={9} />
                <Grid.Container gap={2} justify="center">
                    <Grid xs={24} md={24}><TakingYouThere /></Grid>
                    <Grid xs={24} md={12}><h1><Spinner /></h1></Grid>
                    <Grid xs={24} md={12}><h1>Loading.</h1></Grid>
                </Grid.Container>
            </Card>

        </Page>
    )
}