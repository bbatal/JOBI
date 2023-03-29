// components
import Nav2 from '../components/Nav2';
import Search from '../components/Search';

// assets
import dottedBox from '../assets/heroShape.png';

function JobListing() {
  return (
    <>
      <header>
        <Nav2 />
        <div>
            <h1>Job Listing</h1>
            <p>We deliver blazing fast & striking work solutions</p>
        </div>
        <Search />
        <img src={dottedBox} alt="decorative box"/>
      </header>
      <main>
        
      </main>
    </>
  )
}

export default JobListing