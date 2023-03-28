// images
import chevronRight from '../assets/chevron-right.png';
import arrowRightLong from '../assets/arrow-right-long.png';

import styled from 'styled-components';

function JobiGuides() {
  return (
    <section id="jobi-guides" className="wrapper">
        <Box>
            <h2>Jobi Guides</h2>
            <Link>
                <a href="/jobi-guides">Explore more</a>
                <img src={chevronRight} alt="icon for chevron"/>
            </Link>
        </Box>

        <Ul>
            <Li>
                <img src="https://unsplash.it/280/200" alt="placeholder" />
                <P>23 July, 2022</P>
                <h3>Challenge yourself and win the future</h3>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                <button><img src={arrowRightLong} alt="arrow to go right" /></button>
            </Li>
            <Li>
                <img src="https://unsplash.it/280/200" alt="placeholder" />
                <P>23 July, 2022</P>
                <h3>Challenge yourself and win the future</h3>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                <button><img src={arrowRightLong} alt="arrow to go right" /></button>
            </Li>
            <Li>
                <img src="https://unsplash.it/280/200" alt="placeholder" />
                <P>23 July, 2022</P>
                <h3>Challenge yourself and win the future</h3>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                <button><img src={arrowRightLong} alt="arrow to go right" /></button>
            </Li>
        </Ul>
    </section>
  )
}

export default JobiGuides;

// TODO: refactor into a reusable style
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6rem 0 2rem 0;

    /* TODO: make font global */
    h2 {
        font-family: "Gordita";
        font-size: 2.4rem;
        color: var(--primary-darkGreen);
    }
`

// refactor into reusbale, FIX LINK COLOR
const Link = styled.a`
  display: flex;
  align-items: baseline;
  border-bottom: 3px solid lightgreen;
  gap: 0.2rem;
  color: lightgreen;
  
  img {
    height: 10px;
    max-width: 10px;
  }
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.5rem;
`

const Li = styled.li`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 25px;
`

const P = styled.p`
    font-size: 0.9rem;
    color: var(--primary-gray)
`