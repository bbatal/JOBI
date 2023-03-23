// images
import logo from '../assets/jobi-logo.png';

// dependencies
import styled from 'styled-components';
import { useState } from 'react';

function Nav() {
    const [open, setOpen] = useState(true);

  return (
    <div className='wrapper'>
    <Navigation>
        <a href='#'><img src={logo} alt="business logo" /></a>
        <Hamburger onClick={() => setOpen(prev => !prev)}>HAM</Hamburger>
        
        {open &&
        <Ul>       
            <li>
                <a href='#'>Home</a>
            </li>
            <li>
                <a href='#'>Job</a>
            </li>
            <li>
                <a href='#'>Explore</a>
            </li>
            <li>
                <a href='#'>Category</a>
            </li>
            <li>
                <a href='#'>Pages</a>
            </li>
            <li>
                <button>Login/Sign up</button>
            </li>
            <li>
                <button>Post a Job</button>
            </li>
        </Ul>
        }

    </Navigation>
    </div>
  )
}

export default Nav

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
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