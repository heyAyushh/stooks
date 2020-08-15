import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { ZeitProvider, CssBaseline, Text, Row, useToasts, Col, Card, Display, Image, useMediaQuery, Page, Grid, Description, User, Spacer, Spinner, Fieldset, Button, Divider, Link, Avatar, Progress, Tooltip } from '@zeit-ui/react';
import useSWR from 'swr'
import { motion } from "framer-motion"
import { ArrowLeft, Play, Home, Settings, ArrowRightCircle, ArrowRight, BookOpen, PauseCircle } from '@zeit-ui/react-icons'
import Loading from '../../components/Loading'
import ImmersiveReaderIcon from '../../public/immersive-reader-icon.svg'
import CatReading from '../../public/ginger-cat-reading.svg'
import { server, immersiveUrl } from '../../config';

const screenSize = () => {
    const isXS = useMediaQuery('xs');
    const isSM = useMediaQuery('sm');
    const isMD = useMediaQuery('md');
    const isLG = useMediaQuery('lg');
    const isXL = useMediaQuery('xl');
    return (isXS && 'xs') || (isSM && 'sm') || (isMD && 'md') || (isLG && 'lg') || (isXL && 'xl');
};

const AppComponent = (props) => {
    const router = useRouter()
    const slug = router.query.slug || [];
    const autoPlay = router.query.autoPlay == 'true';
    const immersion = router.query.immersion == 'true';
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('/api/books/', fetcher);
    const content = props.content;
    const [, setToast] = useToasts();

    useEffect(() => {
        if (props.notFound) {
            // If fetching content from content api gives error
            window.location = '/404';
        }
        if (autoPlay) {
            window.setTimeout(() => { window.location = ('/books/' + slug[0] + '/' + (Number(slug[1]) + 1) + '?autoPlay=true') }, 10000);
        }
    })

    if (immersion) {

        function handleLaunchImmersiveReader() {

            const { data: response, error } = useSWR(immersiveUrl, fetcher)

            if (response && !error) {
                // Learn more about chunk usage and supported MIME types https://docs.microsoft.com/azure/cognitive-services/immersive-reader/reference#chunk
                const token = response.token;
                const subdomain = response.subdomain;

                const newContent = {
                    title: content.title,
                    chunks: [{
                        content: content.text,
                        mimeType: "text/html"
                    }]
                };
                // Learn more about options https://docs.microsoft.com/azure/cognitive-services/immersive-reader/reference#options
                const options = {
                    "onExit": exitCallback,
                    "uiZIndex": 2000
                };
                ImmersiveReader.launchAsync(token, subdomain, newContent, options)
                    .catch(function (error) {
                        alert("Error in launching the Immersive Reader. Check the console.");
                        console.log(error);
                    });
            }
        }

        function exitCallback() {
            console.log("This is the callback function. It is executed when the Immersive Reader closes.");
            window.location = ('/books/' + slug[0] + '/' + (Number(slug[1]) + 1));
        }

        handleLaunchImmersiveReader();
    }

    if (slug[2]) {
        router.push('/404')
        return (
            <>
                <h1>Wrong Window</h1>
            </>
        )
    }

    const Controls = (props) => {
        const book = props.book;

        return (
            <Card style={{ width: '100%' }} >
                <Display >
                    <Spacer y={1} />
                    <Text h3>
                        You're Reading {book.bookName} by {book.bookAuthorName}
                    </Text>
                    <Text h3>
                        Page {slug[1]} of {book.bookTotalPages}
                    </Text>

                    {screenSize() == "xs" ? <>
                        <Spacer y={1} />
                        {autoPlay ?
                            <Tooltip text={'pause AutoPlay'} type="dark">
                                <Button icon={<PauseCircle />} type={"secondary"} auto on
                                    onClick={(e) => {
                                        e.preventDefault;
                                        router.push('/books/' + slug[0] + '/' + (Number(slug[1])))
                                    }}>
                                </Button>
                            </Tooltip> :
                            <Tooltip text={'pause AutoPlay'} type="dark">
                                <Button icon={<BookOpen />} type={"secondary"} ghost auto on
                                    onClick={(e) => {
                                        e.preventDefault;
                                        router.push('/books/' + slug[0] + '/' + (Number(slug[1])) + '/?autoPlay=true', undefined, { shallow: true })
                                    }}>
                                </Button>
                            </Tooltip>
                        }
                        <Tooltip text={'Immersive Reader'} type="dark">
                            <Button icon={<ImmersiveReaderIcon />} auto onClick={(e) => { e.preventDefault; router.push('/books/' + slug[0] + '/' + (Number(slug[1])) + '/?autoPlay=false&immersion=true', undefined, { shallow: true }) }}></Button>
                        </Tooltip>
                        <Tooltip text={'prev.'} type="dark">
                            <Button icon={<ArrowLeft />} auto disabled={(Number(slug[1]) - 1) < 0} onClick={(e) => { e.preventDefault; router.push('/books/' + slug[0] + '/' + (Number(slug[1]) - 1)) }}></Button>
                        </Tooltip>
                        <Tooltip text={'Next'} type="dark">
                            <Button icon={<ArrowRightCircle />} type={"secondary"} ghost auto onClick={(e) => { e.preventDefault; router.push('/books/' + slug[0] + '/' + (Number(slug[1]) + 1)) }} ></Button>
                        </Tooltip>
                        <Spacer y={.5} />
                    </> : <>
                            <Spacer y={1} />
                            {autoPlay ? <Button icon={<PauseCircle />} type={"secondary"} auto on
                                onClick={(e) => {
                                    e.preventDefault;
                                    router.push('/books/' + slug[0] + '/' + (Number(slug[1])))
                                }}> pause
                                </Button> : <Button icon={<BookOpen />} type={"secondary"} ghost auto on
                                    onClick={(e) => {
                                        e.preventDefault;
                                        router.push('/books/' + slug[0] + '/' + (Number(slug[1])) + '/?autoPlay=true', undefined, { shallow: true })
                                    }}>AutoPlay
                                </Button>}
                            <Spacer y={.5} />
                            <Button icon={<ImmersiveReaderIcon />} auto onClick={(e) => { e.preventDefault; router.push('/books/' + slug[0] + '/' + (Number(slug[1])) + '/?autoPlay=false&immersion=true', undefined, { shallow: true }) }}> Immersive Reader</Button>
                            <Spacer y={.5} />
                            <Button icon={<ArrowLeft />} auto disabled={(Number(slug[1]) - 1) < 0} onClick={(e) => { e.preventDefault; router.push('/books/' + slug[0] + '/' + (Number(slug[1]) - 1)) }}>Prev.</Button>
                            <Button icon={<ArrowRightCircle />} type={"secondary"} ghost auto onClick={(e) => { e.preventDefault; router.push('/books/' + slug[0] + '/' + (Number(slug[1]) + 1)) }} >Next</Button>
                            <Spacer y={.5} />
                        </>
                    }
                </Display>
            </Card>
        )
    }

    const Story = (props) => {
        const book = props.book;
        const content = props.content;

        if (content) {
            return (
                <Card style={{ width: '100%' }} >
                    <h1>{content.pid}</h1>

                    <Spacer y={1} />
                    <Divider align="start">{content.title}</Divider>
                    <Spacer y={2} />
                    {content.text.split('\n').map((text, i) => <Text key={i}>{text}</Text>)}
                    <Spacer y={1} />
                </Card>
            )
        }


    }

    if (slug[0] && slug[1] && data && !error) {

        const book = data.filter((book) => book.bookUserName === slug[0])[0];

        if (book && book.bookTotalPages < Number(slug[1])) {
            if (Number(book.bookTotalPages) + 1 == Number(slug[1])) {
                if (autoPlay) {
                    router.push('/books/' + slug[0] + '/' + (Number(slug[1])), undefined, { shallow: true })
                }

                //Finish 
                return (
                    <>
                        <Page size='large'>
                            <Page.Header>
                                <motion.div
                                    whileHover={{ scale: 1.1, }}
                                    whileTap={{
                                        scale: 0.9,
                                        borderRadius: "100%"
                                    }}
                                    style={{ width: '200px' }}
                                >
                                    <Link href="/">
                                        <ArrowLeft /> <Text size='2em' style={{ textDecoration: 'underline' }}> Go <Home /> Home</Text>
                                    </Link>
                                </motion.div>
                            </Page.Header>
                            <>
                                <Grid.Container gap={1} justify="center">
                                    <Grid xs={24} md={6}> <Spacer y={0.5} /> </Grid>
                                    <Grid xs={24} md={18}> <Progress value={slug[1]} max={book.bookTotalPages} /></Grid>
                                    <Grid xs={24} md={6}>
                                        <Display >
                                            <Card >
                                                <Spacer y={1} />
                                                <Text h3>
                                                    You Finished {book.bookName} by {book.bookAuthorName}
                                                </Text>
                                                <Text h3>
                                                    Thanks.
                                                </Text>
                                            </Card>
                                        </Display>
                                    </Grid>
                                    <Grid xs={24} md={18}>
                                        <Card >
                                            <Text h3>
                                                You Finished {book.bookName} by {book.bookAuthorName}.
                                                </Text>
                                            <CatReading />
                                            <Text >
                                                Mr. Kitty loves reading, He questions his curiosity & and wants to learn more everyday.
                                                    Be like Mr. Kitty & Check out acknowledgements at <Link color icon href="/about">
                                                    About Page
                                                    </Link>
                                            </Text>
                                        </Card>
                                    </Grid>
                                </Grid.Container>
                            </>
                        </Page>
                    </>
                )
            } else {
                //NotFound
                router.push('/404');
                return (
                    <div>
                        Content Not Found
                    </div>
                )
            }
        } else if (book && book.bookTotalPages >= Number(slug[1])) {
            // book Running
            return (
                <>
                    <Page size='large'>
                        <Page.Header>
                            <motion.div
                                whileHover={{ scale: 1.1, }}
                                whileTap={{
                                    scale: 0.9,
                                    borderRadius: "100%"
                                }}
                                style={{ width: '200px' }}
                            >
                                <Link href="/">
                                    <ArrowLeft /> <Text size='2em' style={{ textDecoration: 'underline' }}> Go <Home /> Home</Text>
                                </Link>
                            </motion.div>
                        </Page.Header>
                        <>
                            <Grid.Container gap={2} justify="center">
                                <Grid xs={24} md={6}> <Spacer y={1} /> </Grid>
                                <Grid xs={24} md={18}> <Progress value={slug[1]} max={book.bookTotalPages} /></Grid>
                                <Grid xs={24} md={6}> <Controls content={content} book={book} /></Grid>
                                <Grid xs={24} md={18}><Story content={content} book={book} /></Grid>
                            </Grid.Container>
                        </>
                    </Page>
                </>
            )
        } else {
            //NotFound
            router.push('/404');
            return (
                <div>
                    Book Not Found
                </div>
            )
        }
    }
    if (!data && !error) {
        return (
            <div>
                <Loading />
            </div>
        )
    }
    if (error && !data) {
        return (
            <div>
                error loading books from api.
            </div>
        )
    }
}

export default function BooksPid(props) {

    return (
        <ZeitProvider>
            <CssBaseline />
            <AppComponent content={props.content} />
        </ZeitProvider>
    )
}

export async function getServerSideProps(context) {
    try {
        const res = await fetch(`${server}/api/content/` + context.query.slug[0] + '/' + context.query.slug[1])
        const data = await res.json()

        return {
            props: { content: data }, // will be passed to the page component as props
        }
    } catch (err) {
        console.log(err)
        return {
            props: { notFound: true }
        }
    }
}