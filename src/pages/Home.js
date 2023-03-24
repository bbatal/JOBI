// components
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import JobiGuides from "../components/JobiGuides";
import JobListing from "../components/JobListing";
import Nav from "../components/Nav";
import Partners from "../components/Partners";
import Search from "../components/Search";
import Testimonials from "../components/Testimonials";
import Trending from "../components/Trending";

// styling
import styled from 'styled-components';
import hero from '../assets/hero.jpg';

function Home() {
  return (
    <>
    <Header>
        <Nav />
        <Box1>
            <H1>Find & Hire Experts for any Job.</H1>
            <p>Unlock your potential with quality job & earn from world leading brands</p>
            <Search />
        </Box1>
        <Box2>
            <Ul>
                <Li>
                    <Title>30k+</Title>
                    <p>Worldwide Client</p>
                </Li>
                <Li>
                    <Title>3%</Title>
                    <p>Top Talents</p>
                </Li>
                <Li>
                    <Title>12mil</Title>
                    <p>Dollar Payout</p>
                </Li>
            </Ul>
        </Box2>
    </Header>
    <main>
        <Partners />
        <Categories />
        <Trending />
        <JobListing />
        <HowItWorks />
        <AboutUs />
        <Testimonials />
        <JobiGuides />
        <Collaboration />
        <Banner />
    </main>
    <footer>
        <Footer />
    </footer>
    </>
  )
}

export default Home;

const Header = styled.header`
    background: no-repeat center/cover url(${hero});
    position: relative;
    color: white;

    /* dim overlay */
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: black;
        opacity: 0.6;
    }
`

const H1 = styled.h1`
        text-align: center;
        font-size: 3.5rem;
        position: relative;
        z-index: 10;
        max-width: 650px;

        /* TODO: find a slightly thicker gordita */
        font-family: "Gordita";
`

const Box1 = styled.div`
    margin: 5rem auto 3rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

const Box2 = styled.div`
    margin: 0 auto;
    padding: 3rem 0 5rem 0;
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    gap: 6rem;
`

const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
`

const Title = styled.p`
    font-size: 2rem;
`
