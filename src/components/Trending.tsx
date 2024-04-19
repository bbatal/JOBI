import backArrowBlack from '../assets/back-arrow-icon-black.png';
import nextArrowBlack from '../assets/next.png';
import backArrowWhite from '../assets/back-arrow-icon-white.png';

import styled from 'styled-components';

function Trending() {
  return (
    <Container id="trending-job" className='wrapper'>
        <Box>
            <h2>Trending Job</h2>
            <div>
                <Button></Button>
                <Button2></Button2>
            </div>
        </Box>
        <Ul>
            <li>
                <Box2>
                <Image src="https://unsplash.it/300/350" alt='placeholder blah' />
                    <p>WordPress Development</p>
                </Box2>
            </li>
            <li>
                <Box2>
                <img src="https://unsplash.it/300/350" alt='placeholder blah' />
                    <p>WordPress Development</p>
                </Box2>
            </li>
            <li>
                <Box2>
                <img src="https://unsplash.it/300/350" alt='placeholder blah' />
                    <p>WordPress Development</p>
                </Box2>
            </li>
            <li>
                <Box2>
                <img src="https://unsplash.it/300/350" alt='placeholder blah' />
                    <p>WordPress Development</p>
                </Box2>
            </li>
            
        </Ul>
    </Container>
  )
}

export default Trending

const Container = styled.section`
    padding: 0rem 6.3rem;
`

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-family: "Gordita";
        font-size: 2.3rem;
    }
`

const Button = styled.button`
    background-color: transparent;
    border: none;
    position: relative;
    right: 0px;
    width: 0;
    height: 0;

    &:before {
        content: '';
        background-image: url(${backArrowBlack});
        background-repeat: no-repeat;
        background-position: 75% 40%;
        position: absolute;
        height: 50px;
        width: 50px;
        top: -27px;
        left: -70px;
    }

    &:hover:before {
        background-image: url(${backArrowWhite});
    }

    &:hover {

        background-color: green;
    }
`

const Button2 = styled.button`
    background-color: transparent;
    border: none;
    position: relative;
    right: 0px;
    width: 0;
    height: 0;

    &:before {
        content: '';
        background-image: url(${nextArrowBlack});
        background-repeat: no-repeat;
        background-position: 75% 40%;
        position: absolute;
        height: 50px;
        width: 50px;
        top: -27px;
        right: -10px;
    }
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    margin: 2rem 0;
`

const Box2 = styled.div`
    position: relative;

    p {
        position: absolute;
        bottom: 0;
        color: white;
        z-index: 10;
        font-size: 0.8rem;
        margin: 0 0 1rem 1.5rem;
        text-align: start;
        max-width: 50%;
    }

    &:after {
        display:block ;
        content: "";
        position: absolute;
        z-index: 5;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, #000 100%);
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0.8;
    }
`

const Image = styled.img`
    position: relative;
    z-index: -1;
`