import { ZeitProvider, CssBaseline, Text, Row, Col, Card, Display, Image, useMediaQuery, Page, Grid, Description, User, Spacer, Spinner, Fieldset, Button, Divider, Link, Avatar } from '@zeit-ui/react';
import useSWR from 'swr'
import { motion } from "framer-motion"
import { ArrowLeft, Play, Home } from '@zeit-ui/react-icons'
import NotFound from '../public/404.svg';

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
        <Grid.Container justify="center">

            <Grid xs={22} md={8}>

                <Spacer y={2} />
                <Card >

                    <NotFound />
                    <Text h4>
                        Mr. Kitty didn't expect you to be here.
                                </Text>
                    <Text h1>
                        It's 404Land.
                                </Text>
                </Card>
            </Grid>
        </Grid.Container>
    </div>)
}