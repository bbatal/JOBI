// images
import logo from '../assets/jobi-logo.png';

// dependencies
import styled from 'styled-components';
import { useState } from 'react';

function Nav() {
    const [open, setOpen] = useState(true);
    // TODO -- make animation and background fade

    // TODO: use window.resize with throttling to turn open variable to true for screen sizes greater than mobile
    // useEffect(() => {
    //     window.addEventListener('')
    // }, [])

  return (
    <div className='wrapper'>
    <Navigation>
        <Logo href='#'><img src={logo} alt="business logo" /></Logo>
        <Hamburger onClick={() => setOpen(prev => !prev)}>HAM</Hamburger>
        
        {open &&
        <>
        <Ul>       
            <Li>
                <a href='#'>Home</a>
            </Li>
            <Li>
                <a href='#'>Job</a>
            </Li>
            <Li>
                <a href='#'>Explore</a>
            </Li>
            <Li>
                <a href='#'>Category</a>
            </Li>
            <Li>
                <a href='#'>Pages</a>
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
    z-index: 25;

    @media (min-width: 700px) {
        display: none;
    }
`

const Ul = styled.ul`
    display: flex;
    flex: 2 0 auto;
    justify-content: center;
    gap: 3%;

    @media (max-width: 700px) {
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
        left: 35%;
        right: 0;
        bottom: 0;
        z-index: 15;
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