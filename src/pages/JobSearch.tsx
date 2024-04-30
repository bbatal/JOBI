import Headline from '../components/Headline';
import NavJobListing from '../components/NavJobListing';

// Dependencies
import styled from 'styled-components';

// assets
import rectangle from '../assets/rectangle.png';
import zigzag from '../assets/zig-zag-shape.png';

function JobListing() {
  return (
    <>
    <Container>
      <NavJobListing />
      <Headline 
        title={"Job Listing"} 
        subtitle={"We delivered blazing fast & striking work solution"} 
        fontSize={"4.3em"}
        fontFamily={"EbGaramond"} />
    
    </Container>
    </>
  )
}

export default JobListing;

const Container = styled.div`
  background-color: var(--primary-darkGreen);
  position: relative;
  padding: 3rem 0 7rem 0;
  min-height: 554px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:before {
    content: "";
    background: url(${zigzag});
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 7px;
    right: 35vw;
  }

  &:after {
    content: "";
    background: url(${rectangle});
    background-repeat: no-repeat;
    width: 200px;
    height: 50px;
    position: absolute;
    bottom: 7px;
    left: 0;
  }
`