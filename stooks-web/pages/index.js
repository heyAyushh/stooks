import { ZeitProvider, CssBaseline, Text, Row, Col, Card, Display, Image, useMediaQuery, Page, Grid, Description, User, Spacer, Spinner, Fieldset, Button, Divider, Link } from '@zeit-ui/react';
import useSWR from 'swr'
import { motion } from "framer-motion"
import { useRouter } from 'next/router'
import Loading from '../components/Loading';

const Section5 = () => {
  return (
    <div>
      <Text size="3em" p style={{ backgroundColor: '#E7FFE7' }}>
        This is a Hackathon Project
      </Text>
      <Fieldset style={{ marginRight: '3%', marginLeft: '3%' }}>
        <Fieldset.Content style={{ paddingTop: '10pt', paddingBottom: '10pt' }}>
          <h4>We built this in two days.</h4>
        </Fieldset.Content>
        <Divider y={0} />
        <Fieldset.Content>
          <Display shadow caption="Women studying with a book in Library.">
            <Image width="600" height="300" style={{ objectFit: "cover" }} src="https://images.unsplash.com/photo-1581832098756-5b29318b542e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
          </Display>
          <p style={{ marginLeft: "5%", marginRight: "5%" }}>African Library Project changes lives book by book by starting libraries in Africa. Our grassroots approach mobilizes volunteers, young and old, in the United States and Canada to organize book drives and help establish small libraries in rural African communities. </p>
          <p style={{ marginLeft: "5%", marginRight: "5%" }}>So far they have established 3,086 libraries within 12 countries, shipped over 3.1 million books, and established 1500+ partnerships.</p>
        </Fieldset.Content>
        <Fieldset.Footer>
          <Row>
            <Link href="https://devpost.com/software/stooks" icon color>Support this project on Devpost.</Link>
          </Row>
          <Fieldset.Footer.Actions>

            <Link href="https://www.classy.org/give/295898/#!/donation/checkout" icon color>Support STEM Literacy in Africa!</Link>
          </Fieldset.Footer.Actions>
        </Fieldset.Footer>
      </Fieldset>
    </div >
  )
}

const Section4 = () => {

  // What and Why and What else

  return (
    <div>
      <Text size="3em" p style={{ backgroundColor: '#FFE7FF' }}>
        Tasty nibbles all around.
      </Text>

      <Grid.Container gap={2} justify="center">
        <Grid xs={24} md={8}>
          <Card style={{ width: '100%', height: '320px' }} >
            <Description title="Built for Early Learners" content="Toddlers & Grannys rejoice" />
            <Spacer y={1} />
            <Text p> 🍔 Bite Sized, easy to grasp content with key points and summaries.</Text>
            <Text p> 🌎 AI-Powered Translation in 60+ Languages.</Text>
            <Text p> 🎁 Add a healthy Habit to your life. </Text>
          </Card>
        </Grid>
        <Grid xs={24} md={8}>
          <Card style={{ width: '100%', height: '320px' }} >
            <Description title="Built for being Accessible" content="Achieving success & Literacy together" />
            <Spacer y={1} />

            <Text p> 👩‍🚀 Supports people of all abilities, including readers with dyslexia, ADHD, autism, cerebral palsy.</Text>
            <Text p> 🌻 Focus mode, Immersive reading, Read aloud, parts of speech support, Syllabification & Picture Dictionary Support</Text>
          </Card>
        </Grid>
        <Grid xs={24} md={8}>
          <Card style={{ width: '100%', height: '320px' }} >
            <Description title="Powered by Technology" content="Supporting the next digital generation" />
            <Spacer y={1} />
            <Text p> 💻 Built using NextJS and Microsoft Azure AI. Responsive Website accessible at any platform.</Text>
            <Text p> 🏄‍♀️ Going closer to mission, Empowering every person on the planet to achieve more.</Text>
            <Text p> 📚 Changing lives, book by book.</Text>
          </Card>
        </Grid>
      </Grid.Container>
      <Spacer y={4} />
    </div >
  )
}

const Section3 = () => {

  // More About Project

  return (
    <div>

      <Text size="3em" p style={{ backgroundColor: '#FFFEC8' }}>
        Let's generalize reading for Gen Z
      </Text>
      <Fieldset style={{ marginRight: '3%', marginLeft: '3%' }}>
        <Fieldset.Content style={{ paddingTop: '10pt', paddingBottom: '10pt' }}>
          <h4>We created this for Everyone* </h4>
        </Fieldset.Content>
        <Divider y={0} />
        <Fieldset.Content>
          <Display shadow caption="Focus Mode, Immersive Reader and Lot's more working on stook.">
            <Image width="600" height="300" style={{ objectFit: "cover" }} src="https://media.giphy.com/media/lr7XCrfpTWYAk2X2kK/giphy.gif" />
          </Display>
          <p style={{ marginLeft: "5%", marginRight: "5%" }}>Illiteracy is a condition that denies people opportunity. In Sub-Saharan Africa, 48 million youth (ages 15-24) are illiterate. 22% of primary aged children are not in school, That makes 30 million primary aged children who are not in school. For children & Youth, We want to help them with Read aloud, parts of speech support, Syllabification & Picture Dictionary Support, to help them read between the lines.  </p>
          <p style={{ marginLeft: "5%", marginRight: "5%" }}>Ability to read is something that can't reached via just books. This differentiates people who want to read but aren't able to. Also, Scalability & Local language support might be the reason why most of 182 million adults are unable to read and write, We solve it using Serverless Technologies & AI Powered Translation. <br />This project supports all abilities, including readers with dyslexia, ADHD, autism, cerebral palsy, emerging readers, and non-native speakers.  </p>
          <p style={{ marginLeft: "5%", marginRight: "5%" }}>While building this project, we thought of being accessible and innovate with knowledge bags to help grand Parents and Younger ones around us. Hence, this project is built for everyone*. </p>
          <Spacer y={1} /> <br /> *Truly Everyone, No Catch.
        </Fieldset.Content>
        <Fieldset.Footer>
          <Row>
            <Link href="https://devpost.com/software/stooks" icon color>Support this project on Devpost.</Link>
          </Row>
          <Fieldset.Footer.Actions>

            <Link href="https://www.classy.org/give/295898/#!/donation/checkout" icon color>Support STEM Literacy in Africa!</Link>
          </Fieldset.Footer.Actions>
        </Fieldset.Footer>
      </Fieldset>

      <Spacer y={4} />
    </div >
  )
}

const Section2 = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('/api/books', fetcher)
  const router = useRouter();

  // Demo Content Section

  if (data && !error) {



    const books = data;

    return (
      <div >
        <Grid.Container gap={2} justify="center">

          {books.map(book =>

            <Grid xs={20} md={6} key={book.bookId} >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Card shadow style={{ margin: '20px' }}
                  onClick={() => { router.push("/books/" + book.bookUserName), console.log('hello') }}>
                  <Display shadow >
                    <Image width="280" src={book.bookImageUrl} />
                  </Display>
                  <User src={book.bookAuthorPic} name={book.bookAuthorName}>
                    <User.Link href={book.bookAuthorWebsite}>Website</User.Link>
                  </User>
                </Card>
              </motion.div>
            </Grid>
          )}


        </Grid.Container>

        <Spacer y={4} />

      </div >
    )
  } if (!data && !error) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  return (
    <Spinner size="large" />
  )

}

const Section1 = () => {


  // Intro Section

  return (
    <div>
      <Row style={{ marginLeft: '60px', marginBottom: '30px' }} >
        <motion.div initial={{ y: -10 }} animate={{ y: 50 }} transition={{ yoyo: Infinity, duration: '6', ease: "easeInOut" }}>
          <Text size="5.5em" >Stooks</Text>
        </motion.div>
      </Row>
      <Row justify="" >
        <motion.div initial={{ y: 0 }} animate={{ y: -30 }} transition={{ duration: '6', ease: "easeInOut" }}>
          <Text size="3em" p style={{ marginLeft: '90px', backgroundColor: 'Azure' }}>
            Snapchat like Stories, but for books.
        </Text>
        </motion.div>
      </Row>
    </div>
  )
}

const AppComponent = () => {

  return (
    <div>
      <Page>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </Page>

    </div>
  )
}

export default function Index(props) {

  return (
    <ZeitProvider>
      <CssBaseline />
      <AppComponent />
    </ZeitProvider>
  )
}