import { ZeitProvider, CssBaseline, Text, Row, Col, Card, Display, Image, useMediaQuery, Page, Grid, Description, User, Spacer, Spinner, Fieldset, Button, Divider, Link, Avatar } from '@zeit-ui/react';
import useSWR from 'swr'
import { motion } from "framer-motion"
import { ArrowLeft, Play, Home } from '@zeit-ui/react-icons'
import { useRouter } from 'next/router'
import NotFound from '../../public/booksNotFound.svg';
import Loading from '../../components/Loading'

const AppComponent = () => {
    const router = useRouter()
    const { pid } = router.query;

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('/api/books', fetcher);

    const BookCover = (props) => {
        const book = props.book;

        return <Card style={{ width: '100%' }} >
            <Display shadow caption={book.bookName + ' by ' + book.bookAuthorName}>
                <Image width="435" src={book.bookImageUrl} />
            </Display>
        </Card>
    }

    const BookIntro = (props) => {
        const book = props.book;

        return (
            <Card style={{ width: '100%' }} >
                <h1>{book.bookName}</h1>
                <motion.div
                    whileHover={{ scale: 1.1, }}
                    whileTap={{
                        scale: 0.9,
                        borderRadius: "100%"
                    }}
                    style={{ width: '60px' }}
                    onClick={(e) => { e.preventDefault; router.push('/books/' + pid + '/0') }}
                >

                    <Button icon={<Play />} type="secondary" size="small" > Play Stook</Button>
                    <Spacer y={1} />
                </motion.div>
                <Divider align="start">About Book</Divider>
                <Spacer y={1} />
                <Text p>
                    {book.bookIntro}
                </Text>
                <Spacer y={1} />
                <Divider align="start">About Author</Divider>
                <Spacer y={2} />
                <Text h3>
                    <Avatar src={book.bookAuthorPic} size="small" /> {book.bookAuthorName}
                </Text>
                <Text p>
                    {book.bookAuthorIntro}
                </Text>
            </Card>
        )
    }

    if (data && !error) {

        const book = data.filter((book) => book.bookUserName === pid)[0];

        if (book) {
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
                                <Grid xs={16} md={8}><BookCover book={book} /></Grid>
                                <Grid xs={24} md={16}><BookIntro book={book} /></Grid>
                            </Grid.Container>
                        </>
                    </Page>
                </>
            )
        } else {
            return (
                <div>
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
                                    Mr. Kitty is working on a book that has {slug[0]} as title & 404 pages.
                                </Text>
                                <Text h2>
                                    Till then, it's Not Found.
                                </Text>
                            </Card>
                        </Grid>
                    </Grid.Container>
                </div>
            )
        }


    }
    if (!data && !error) {
        return (
            <div>
                <Page style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "800px",
                    height: "800px"
                }}>
                    <Card>
                        <Grid.Container gap={2} justify="center">
                            <Loading />
                        </Grid.Container>
                    </Card>

                </Page>
            </div>
        )
    } if (error && !data) {
        return (
            <div>
                Error
            </div>
        )
    }
}

export default function BooksPid() {
    return (
        <ZeitProvider>
            <CssBaseline />
            <AppComponent />
        </ZeitProvider>
    )
}