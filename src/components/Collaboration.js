// images
import jobiCircle from '../assets/bubble-circle-icon.png';
import arrowRightThick from '../assets/thick-arrow.png';

import styled from 'styled-components';

function Collaboration() {
  return (
    <Container id="collaboration" className='wrapper'>
        <Image src={jobiCircle} alt="jobiCircle of related logos used by Jobi" />
        <Box>
            <Decoration>TOP BRAND</Decoration>
            <h2>Collaboration with Top Brands</h2>
            <Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi numquam illum excepturi repudiandae consequatur. Recusandae!</Content>
            <Button>
                Learn More
                <img src={arrowRightThick} alt="click to learn more about affiliated top brands"/>
            </Button>
        </Box>
    </Container>
  )
}

export default Collaboration;

// make reusable
const Container = styled.section`
  padding: 9rem 6.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
`

const Image = styled.img`
  max-width: 360px;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;

  h2 {
    font-size: 2.6rem;
    font-family: "Gordita";
    color: var(--primary-darkGreen);
  }
`

const Decoration = styled.p`
  color: var(--primary-gray);
  font-size: 0.8rem;
`

const Content = styled.p`
  max-width: 400px;
  line-height: 30px;
  opacity: 0.9;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  img {
    width: 20px;
    height: 10px;
  }
`
