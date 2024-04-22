// components
import Nav from "./Nav";
import Headline from "./Headline";

// dependencies
import styled from 'styled-components';
import hero from '../assets/hero.jpg';

function Header() {
  return (
    <HeaderContainer>
        <div className="wrapper">
        <Nav />
        <Headline fontSize={"3.5rem"} title={"Find & Hire Experts for any Job."} subtitle={"Unlock your potential with quality job & earn from world leading brands"} />
        {/* <Box1>
            <H1>Find & Hire Experts for any Job.</H1>
            <p>Unlock your potential with quality job & earn from world leading brands</p>
            <Search />
        </Box1> */}
        <Box2>
            <Ul>
                <Li>
                    <Title>30k+</Title>
                    <p>Worldwide Client</p>
                </Li>
                <Li>
                    <Title>3%</Title>
                    <p>Top Talents</p>
                </Li>
                <Li>
                    <Title>12mil</Title>
                    <p>Dollar Payout</p>
                </Li>
            </Ul>
        </Box2>
        </div>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
    background: no-repeat center/cover url(${hero});
    color: white;

    /* dim overlay */
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: black;
        opacity: 0.6;
    }
`


const Box2 = styled.div`
    margin: 0 auto;
    padding: 3rem 0 5rem 0;
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    gap: 6rem;
`

const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
`

const Title = styled.p`
    font-size: 2rem;
`


