import Headline from '../components/Headline';
import styled from 'styled-components';

// assets
import rectangle from '../assets/rectangle.png';
import zigzag from '../assets/zig-zag-shape.png';

function JobListing() {
  return (
    <>
    <Container>
    <Headline 
      title={"Job Listing"} 
      subtitle={"We delivered blazing fast & striking work solution"} 
      fontSize={"64px"}
      fontFamily={"EbGaramond"} />
    
    </Container>
    </>
  )
}

export default JobListing;

const Container = styled.div`
  background-color: #244034;
  position: relative;

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