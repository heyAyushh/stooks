import { ZeitProvider, CssBaseline, Text, Row, Col, Card, Display, Image, useMediaQuery, Page, Grid, Description, User, Spacer, Spinner, Fieldset, Button, Divider, Link, Avatar } from '@zeit-ui/react';
import useSWR from 'swr'
import { motion } from "framer-motion"
import { ArrowLeft, Play, Home } from '@zeit-ui/react-icons'
import NotFound from '../public/about-welcome.svg';

export default function Error() {
    return (<div>
        <motion.div
            whileHover={{ scale: 1.1, }}
            whileTap={{
                scale: 0.9,
                borderRadius: "100%"
            }}
            style={{ width: '200px', marginLeft: '60px' }}
        >
            <Link href="/">
                <ArrowLeft /> <Text size='2em' style={{ textDecoration: 'underline' }}> Go <Home /> Home</Text>
            </Link>
        </motion.div>
        <Card >
            <Grid.Container justify="center" >
                <Grid xs={22} md={8} alignContent="flex-end" >
                    <Spacer y={2} />
                    <NotFound style={{ marginLeft: '30px', marginRight: '30px' }} />
                </Grid>
                <Grid xs={22} md={16} alignContent="flex-end">
                    <Text h4>
                        Welcome to about us page.
                    </Text>
                    <Text h2>
                        This page hosts Awesome Acknowledgements who made stooks possible.
                    </Text>
                    <Text h4>
                        Anonymous
                    </Text>
                    <Text size='1.2em' >
                        <ul type="square">
                            <li>Immersive Reader by Microsoft Azure</li>
                            <li><Link href="https://icons8.com/" icon color>Icons 8</Link> - For Illustrations, & Ginger Cat</li>
                        </ul>
                    </Text>
                    <Text h4>
                        Technology
                    </Text>
                    <Text size='1.2em' >
                        <ul type="square">
                            <li>NextJS and serverless functions for WebSite</li>
                            <li>Vercel for hosting</li>
                            <li>Zeit-UI react for Components and Design</li>
                        </ul>
                    </Text>
                    <Text h4>
                        About Team
                    </Text>
                    <Text size='1.2em' >
                        <ul type="square">
                            <li>I am <Link color icon href="https://heyayush.live"> Ayush </Link>. I dreamed about this idea and built this in 2 Days.</li>
                            <li>Check <Link color icon href="https://instagram.com/humorouslyakshay">Akshay's </Link> work. He helped with designing UX, Creating Video & Content.</li>
                            <li>Coffee Cups who wants to stay Anonymous.</li>
                        </ul>
                    </Text>
                    <Text h4>
                        What's next?
                    </Text>
                    <Text size='1.2em' >
                        <ul type="square">
                            <li>Open Source, Ofc. We will attach a CMS and Release code on GitHub.</li>
                            <li>We believe educators can create their content & share experience to students via Stooks.</li>
                        </ul>
                    </Text>
                </Grid>
            </Grid.Container>
        </Card>
    </div>)
}