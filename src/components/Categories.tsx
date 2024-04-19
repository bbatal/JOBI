// icons
import chevronRight from '../assets/chevron-right-black.png';
import pen from '../assets/pen.png';
import brackets from '../assets/brackets.png';
import bag from '../assets/bag.png';
import telephone from '../assets/telephone.png';
import colliseum from '../assets/colliseum.png';
import bar from '../assets/bar.png';

import styled from 'styled-components';

interface containerColor {
   colorValue: string;
}



function Categories() {

  // const colorValue = ["(231, 250, 252)", "(255, 249, 234)", "255, 249, 234", "(229, 246, 231)", "(246, 243, 254)", "(255, 241, 232)"];

  return (
    <Container>

        <div className='wrapper'>
          <Box>
            <H2>Most Demanding Categories.</H2>
            <Link href='/about-us'><p>Explore all fields</p> <img src={chevronRight} alt="chevron right" /></Link>
          </Box>
        
        <Ul>
           <Li colorValue="rgb(231, 250, 252)">
            <img src={pen} alt="pen logo" />
            <p>UI/UX Design</p>
           </Li>
           <Li colorValue="rgb(255, 249, 234)">
            <img src={brackets} alt="brackets logo" />
            <p>Development</p>
           </Li>
           <Li colorValue="rgb(255, 232, 250)">
            <img src={bag} alt="bag logo" />
            <p>Marketing</p>
           </Li>
           <Li colorValue="rgb(229, 246, 231)">
            <img src={telephone} alt="telephone logo" />
            <p>Telemarketing</p>
           </Li>
           <Li colorValue="rgb(246, 243, 254)">
            <img src={colliseum} alt="colliseum logo" />
            <p>Accounting</p>
           </Li>
           <Li colorValue="rgb(255, 241, 232)">
            <img src={bar} alt="bars logo" />
            <p>Editing</p>
           </Li>
        </Ul>
        </div>
        
    </Container>
  )
}

export default Categories;

const Container = styled.section`
  padding: 5rem 6.3rem;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  display: flex;
  align-items: baseline;
  border-bottom: 3px solid var(--primary-gray);
  gap: 0.2rem;
  
  img {
    height: 10px;
    max-width: 10px;
  }
`

const H2 = styled.h2`
  font-weight: 100;
  font-family: "Gordita";
`

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 3rem 0;
`

const Li = styled.li.attrs<containerColor>(props => ({
  colorValue: props.colorValue,
  title: props.colorValue,
}))<containerColor>`
  background-color: ${props => props.colorValue};
  display: flex;
  flex-basis: max-content;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;

  p {
    font-size: 0.8rem;
  }
`