import bannerBottom from '../assets/banner-bottom.jpg';

import styled from 'styled-components';

function Banner() {
  return (
    <Container id="banner">
      <Div className='wrapper'>
        <h2>Complete Job Portal for Everyone</h2>
        <Box>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing</P>
            <div>
                <Button1>Looking for a job?</Button1>
                <Button2>Start Hiring</Button2>
            </div>
        </Box>
        </Div>
    </Container>
  )
}

export default Banner;

// TODO: make reusable this style
const Container = styled.section`
  background-image: url(${bannerBottom});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    

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

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    padding: 6rem 3.3rem;
    

    h2 {
      z-index: 5;
      color: white;
      font-family: "Gordita";
      line-height: 60px;
      font-size: 2.5rem;
      max-width: 450px;
      flex-grow: 1;
      flex-shrink: 0;
    }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  align-items: flex-start;
  z-index: 5;
  flex-grow: 1;
  flex-shrink: 0;
  max-width: 350px;
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


