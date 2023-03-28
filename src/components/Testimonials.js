// icons
import arrowBack from '../assets/back-arrow-icon-white.png';
import arrowForward from '../assets/next-arrow-icon.png';
import rating from '../assets/rating-icon.png';
import quotes from '../assets/quote-icon.png';
import boardroom from '../assets/boardroom.jpg';

import styled from 'styled-components';

function Testimonials() {
  return (
    <Container id="testimonials" className='wrapper'>
        <Box>
            <h2>What our clients Think of us?</h2>
            <div className="carousal-buttons">
                <Button></Button>
                <Button2></Button2>
            </div>
        </Box>
        <Ul className='card-carousel'>
            <Card className='card'>
                <Box1>
                    <div>
                        <Title>Impressive!</Title>
                        <Img src={rating} alt="score given by client"/>
                    </div>
                    <img src={quotes} alt="quotes for emphasis" />
                </Box1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates quisquam consequuntur modi porro nulla.</p>

                <Box1>
                    <p>Rashed Ka, <Span>Dhaka</Span></p>
                    <Img2 src="https://unsplash.it/30/30" alt="profile logo" />
                </Box1>
            </Card>
            <Card className='card'>
                <Box1>
                    <div>
                        <Title>Impressive!</Title>
                        <Img src={rating} alt="score given by client"/>
                    </div>
                    <img src={quotes} alt="quotes for emphasis" />
                </Box1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates quisquam consequuntur modi porro nulla.</p>

                <Box1>
                    <p>Rashed Ka, <Span>Dhaka</Span></p>
                    <Img2 src="https://unsplash.it/30/30" alt="profile logo" />
                </Box1>
            </Card>
        </Ul>
    </Container>
  )
}

export default Testimonials;

const Container = styled.section`
    background-image: url(${boardroom});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 5rem 6.3rem;
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
        opacity: 0.7;
    }
`

// refactor this into a component
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;

    h2 {
        font-family: "Gordita";
        font-size: 2.5rem;
        max-width: 350px;
        color: white;
        line-height: 45px;
        letter-spacing: 0.2px;
    }
`

// fix arrows
const Button = styled.button`
    background-color: transparent;
    border: none;
    position: relative;
    right: 0px;
    width: 0;
    height: 0;

    &:before {
        content: '';
        background-image: url(${arrowBack});
        background-repeat: no-repeat;
        background-position: 75% 40%;
        position: absolute;
        height: 50px;
        width: 50px;
        top: -27px;
        left: -70px;
    }

    &:hover:before {
        background-image: url(${arrowForward});
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
        background-image: url(${arrowForward});
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
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 5;
    gap: 3.5rem;
`

const Card = styled.li`
    background-color: white;
    border-radius: 10px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    gap: 2rem;

    p {
        line-height: 30px;
    }
`

const Box1 = styled.div`
    display: flex;
    justify-content: space-between;

    img {
        width: 30px;
        height: 30px;
    }
`

const Title = styled.p`
    color: var(--primary-grassGreen);
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
`

const Img = styled.img`
    width: 70px !important;
    height: auto !important;
`

const Img2 = styled.img`
    border-radius: 50%;
`

const Span = styled.span`
    color: var(--primary-gray);
`

