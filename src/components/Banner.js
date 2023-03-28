import bannerBottom from '../assets/banner-bottom.jpg';

import styled from 'styled-components';
import Collaboration from './Collaboration';

function Banner() {
  return (
    <Container id="banner" className='wrapper'>
        <h2>Complete Job Portal for Everyone</h2>
        <Box>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nam!</P>
            <div>
                <Button1>Looking for a job?</Button1>
                <Button2>Start Hiring</Button2>
            </div>
        </Box>
    </Container>
  )
}

export default Banner;

// TODO: make reusable this style
const Container = styled.section`
  background-image: url(${bannerBottom});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 6rem 6.3rem;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;

    h2 {
      z-index: 5;
      color: white;
      font-family: "Gordita";
      line-height: 60px;
      font-size: 2.5rem;
      max-width: 450px;
    }

     /* dim overlay */
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: black;
        opacity: 0.5;
    }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  z-index: 5;
`

const Button1 = styled.button`
  color: var(--primary-grassGreen);
  border: 1.5px solid var(--primary-grassGreen);
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  margin: 0 1rem 0 0;
`

const Button2 = styled.button`
  background-color: var(--primary-grassGreen);
  padding: 0.8rem 1.8rem;
  border: 1.5px solid var(--primary-grassGreen);
  border-radius: 5px;
  color: white;
  font-size: 0.8rem;
`

const P = styled.p`
  color: white;
  line-height: 30px;
`


