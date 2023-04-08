// components
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import JobiGuides from "../components/JobiGuides";
import JobListing from "../components/JobListing";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import Trending from "../components/Trending";
import Header from "../components/Header";


function Home() {
  return (
    <>
    <Header />
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
    <Footer />
    </>
  )
}

export default Home;