// images
import logo from '../assets/jobi-logo.png';
import hamburger from '../assets/hamburger.svg';

// dependencies
import styled from 'styled-components';
import { useState } from 'react';

function Nav() {
    const [open, setOpen] = useState(true);
    // TODO -- make animation and background fade
    // TODO -- set hamburger image as background on button
    // throttle window resize
    // 
    const handleResize = () => {
        if(window.innerWidth < 900) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    window.addEventListener('resize', handleResize);

   

  return (
    <div className='wrapper'>
    <Navigation>
        <Logo href='about-us'><img src={logo} alt="business logo" /></Logo>
        <Hamburger onClick={() => setOpen(prev => !prev)}></Hamburger>
        
        {open &&
        <>
        <Ul>       
            <Li>
                <a href='about-us'>Home</a>
            </Li>
            <Li>
                <a href='about-us'>Job</a>
            </Li>
            <Li>
                <a href='about-us'>Explore</a>
            </Li>
            <Li>
                <a href='about-us'>Category</a>
            </Li>
            <Li>
                <a href='about-us'>Pages</a>
            </Li>
        </Ul>

        <Ul2>
            <Li>
                <ButtonTrans>Login/Sign up</ButtonTrans>
            </Li>
            <Li>
                <ButtonSolid>Post a Job</ButtonSolid>
            </Li>
        </Ul2>
        </>
        }

    </Navigation>
    </div>
  )
}

export default Nav

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* spacing */
    padding: 2rem 0;
`

const Hamburger = styled.button`
    z-index: 30;
    color: white;
    background: url(${hamburger});
    content: "";

    /* @media (min-width: 900px) {
        display: none;
    } */
`

const Ul = styled.ul`
    display: flex;
    flex: 2 0 auto;
    justify-content: center;
    gap: 3%;
    

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
            // adjusting display/alignment

        gap: 1.1em;
        align-items: end;
        padding: 100px 6% 0 0;

        background-color: black;
        color: white;

        // positioning
        position: absolute;
        top: 0;
        left: 45%;
        right: 0;
        bottom: 0;
        z-index: 25;
    }
`

const Ul2 = styled.ul`
    display: flex;
    flex: 0 0 auto;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: end;
        gap: 1em;

        position: absolute;
        top: 36%;
        left: 35%;
        right: 0;
        bottom: 0;
        z-index: 20;
    }
`

const Li = styled.li`
    margin: 0 0.4rem;
    z-index: 10;
`

const Logo = styled.a`
    z-index: 10;
    flex: 1 0 auto;
`

const ButtonTrans = styled.button`
    color: white;
    background: transparent;
    border: 1px solid white;
    border-radius: 50px;
    padding: 0.5rem 1.1rem;
`

const ButtonSolid = styled.button`
    color: white;
    background: var(--primary-grassGreen);
    padding: 0.5rem 1.1rem;
    border-radius: 50px;
    border: 1px solid var(--primary-grassGreen);
`