// images
// import chevronUp from '../assets/chevron-up.png';
import chevronDown from '../assets/chevron-down.png';
import dotPattern from '../assets/dot-pattern.png';
import swoopShape from '../assets/swoop-shape.png';
import card1 from '../assets/card-1.png';
import card2 from '../assets/card-2.png';
import card3 from '../assets/card-3.png';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';

import styled from 'styled-components';

function AboutUs() {
  return (
    <Section id="about-us" className='wrapper'>
        <TextContainer className='card-1'>
            <TitleContainer>
                <Title1>Why choose us?</Title1>
                <Title2>World of talent at your fingertips</Title2>
            </TitleContainer>
            
            <div className="accordion-menu">
                    <AccordionButton>
                        <h4>Seamless Search</h4>
                        <button><img src={chevronDown} alt="toggle to show content" /></button>
                    </AccordionButton>
                    
                    {/* <div className='content'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel eligendi voluptas numquam doloremque quae.</p></div> */}
                </div>
            <div className="accordion-menu">
                <AccordionButton>
                    <h4>Hire top talents</h4>
                    <button><img src={chevronDown} alt="toggle to show content" /></button>
                </AccordionButton>
                    
                    {/* <div className='content'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel eligendi voluptas numquam doloremque quae.</p></div> */}
                </div>
            <H4>Protected payments, every time</H4>
            <Button>Learn more</Button>
        </TextContainer>
        <GridContainer className='card-2-grid'>
            {/* <div className='row-1'> */}
                <ItemA>
                    <img src={profile1} alt="placeholder"/>

                    <Swoop src={swoopShape} alt="placeholder" />
                    <Card1 src={card1} alt="placeholder" />
                    
                </ItemA>
                <ItemB src={dotPattern} alt="placeholder"/>
                
            {/* </div> */}
            
            
            {/* <div className='row-2'> */}

                <ItemC src={profile2} alt="placeholder"/>
                <ItemD src={profile3} alt="placeholder"/>

                <Card2 src={card2} alt="placeholder" />
                <Card3 src={card3} alt="placeholder" />
            {/* </div> */}
        </GridContainer>
    </Section>
  )
}

export default AboutUs;

const Section = styled.section`
    display: flex; 
    justify-content: center;
    align-items: start;
    padding: 4rem 0;
    gap: 3rem;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(3, 1fr);
    max-width: 35%;
    column-gap: 30px;
    row-gap: 30px;
    position: relative;
`

const ItemA = styled.div`
    grid-column: 1/6;
    grid-row: 1/2;
    position: relative;

    img {
        border-top-left-radius: 40px;
        border-bottom-right-radius: 40px;
    }
    
`
const ItemB = styled.img`
    grid-column: 7/9;
    grid-row: 1/2;
    align-self: center;
`
const ItemC = styled.img`
    grid-column: 1/4;
    grid-row: 2/3;
    width: 200px;
    height: 120px;
    object-fit: cover;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
`
const ItemD = styled.img`
    grid-column: 4/9;
    grid-row: 2/5;
    height: 265px;
    width: 300px;
    object-fit: cover;
    border-radius: 30px;
`

const Swoop = styled.img`
    position: absolute;
    top: -60px;
    right: -90px;
`

const Card1 = styled.img`
    position: absolute;
    transform: scale(1.7);
    z-index: 5;
    top: 60px;
    right: -190px;
`

const Card2 = styled.img`
    position: absolute;
    right: -170px;
    bottom: 260px;
    transform: scale(0.7);
`

// TODO: make this from scratch
const Card3 = styled.img`
    position: absolute;
    bottom: -20px;
    transform: scale(0.7);
    left: -90px;
`

const TextContainer = styled.div`
    max-width: 35%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    gap: 2rem;
    padding: 1rem 2rem 1rem 0;
`

const Title1 = styled.h2`
    color: var(--primary-grassGreen);
    font-size: 0.8rem;
    font-family: "Gordita";
    font-weight: 100;
` 

const Title2 = styled.h3`
    color: var(--primary-darkGreen);
    font-size: 2rem;
    font-family: "Gordita";
    line-height: 40px;
`
const AccordionButton = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--primary-gray);
    padding-bottom: 1rem;
    
    h4 {
        color: var(--primary-darkGreen);
    }
`

const H4 = styled.h4`
     color: var(--primary-darkGreen);
`

const Button = styled.button`
    color: white;
    font-weight: 400;
    background-color: var(--primary-grassGreen);
    align-self: start;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    margin-top: 2rem;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`


