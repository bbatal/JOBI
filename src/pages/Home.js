// components
import Categories from "../components/Categories";
import JobListing from "../components/JobListing";
import Nav from "../components/Nav";
import Partners from "../components/Partners";
import Search from "../components/Search";
import Trending from "../components/Trending";

function Home() {
  return (
    <>
    <header>
        <Nav />
        <div>
            <h1>Find & Hire Experts for any Job</h1>
            <p>Unlock your potential with quality job & earn from world leading brands</p>
            <Search />
        </div>
        <div>
            <ul>
                <li>
                    <p>30k+</p>
                    <p>Worldwide Client</p>
                </li>
                <li>
                    <p>3%</p>
                    <p>Top Talents</p>
                </li>
                <li>
                    <p>12mil</p>
                    <p>Dollar Payout</p>
                </li>
            </ul>
        </div>
    </header>
    <main>
        <Partners />
        <Categories />
        <Trending />
        <JobListing />
    </main>
    </>
  )
}

export default Home