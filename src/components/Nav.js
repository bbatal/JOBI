// images
import logo from '../assets/jobi-logo.png';

// dependencies
import styled from 'styled-components';
import { useState } from 'react';

function Nav() {
    const [open, setOpen] = useState(true);
    // TODO -- make animation and background fade

  return (
    <div className='wrapper'>
    <Navigation>
        <a href='#'><img src={logo} alt="business logo" /></a>
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
                <button>Login/Sign up</button>
            </Li>
            <Li>
                <button>Post a Job</button>
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
    padding: 1rem 0;
`

const Hamburger = styled.button`
    z-index: 25;

    @media (min-width: 700px) {
        display: none;
    }
`

const Ul = styled.ul`
    display: flex;

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

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: end;
        gap: 1.1em;

        position: absolute;
        top: 36%;
        left: 35%;
        right: 0;
        bottom: 0;
        z-index: 20;
    }
`

const Li = styled.li`
    margin: 0 0.3rem;
`