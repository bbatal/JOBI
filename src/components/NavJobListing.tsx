import { useState } from 'react';

import styled from 'styled-components';
import { device } from '../styles/breakpoints';

// Assets
import logo from '../assets/logo-elipsees.png';
import category from '../assets/category.svg';

// Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavJobListing() {
    const [isActive, setIsActive] = useState(false);

    const handleMobileMenu = () => {
        setIsActive(!isActive);
    }

  return (
    <Nav>
    <List>
        <Logo>
            <a href="/" className="logo">
                <div style={{display:"flex", justifyContent:"flex-start"}}>
                <img src={logo} style={{objectFit:"contain"}} alt="link to homepage" />
                <Text>jobi</Text>
                </div>
            </a>
        </Logo>
        <Categories>
            <CategoriesExtended>
                <img src={category} style={{height:"14px"}} alt="click to see job categories" />
                <span style={{marginLeft:"10px"}}>Categories</span>
            </CategoriesExtended>
        </Categories>
        <Item className={isActive ? "active" : ""}>
            <a href="/">Home</a>
        </Item>
        <Item className={isActive ? "active" : ""}>
            <a href="/">Job</a>
        </Item>
        <Item className={isActive ? "active" : ""}>
            <a href="/">Explore</a>
        </Item>
        <Item className={isActive ? "active" : ""}>
            <a href="/">Contact</a>
        </Item>
        <Item className={isActive ? "active" : ""}>
            <a href="/">Pages</a>
        </Item>
        <Login className={isActive ? "active" : ""}>
            <div>
            <a href="/">Post Job</a>
            <Button>Login</Button>
            </div>
        </Login>
        <Item className={isActive ? "active" : ""}>
            <HireButtonExtended>Hire Top Talents</HireButtonExtended>
        </Item>
        <Toggle onClick={() => handleMobileMenu()}>
            <Button>
                <FontAwesomeIcon icon={ faBars } />
            </Button>
        </Toggle>
    </List>
    </Nav>
  )
}

const Nav = styled.nav`
    margin: 0 3rem;
    font-family: "Gordita";

    @media ${device.sm} {
        background-color: #222;
        width: 100%;
        height: min-content;
    }
`

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    max-width: 1492px;
    z-index: 30;

    @media ${device.sm} {
        flex-wrap: wrap;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        padding: 2em 2em 0 2em;
        /* background-color: #222; */

        li a {
            display: block;
            padding: 15px 5px;
        }
    }
`

const Text = styled.span`
    font-family: "AlikeAngular";
    font-size: 2em;
    margin-left: 0.5em;
`

const Button = styled.button`
    color: var(--primary-lightGreen);
    border-radius: 50px;
`

const CategoriesExtended = styled(Button)`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: var(--tertiary-lightGreen);
`

const HireButtonExtended = styled(Button)`
    color: black;
    padding: 10px 15px;
    background-color: var(--primary-lightGreen);
`

const Logo = styled.li`
    flex-grow: 1;
`
const Login = styled.li`
    flex-grow: 7;
    text-align: end;

    button {
        position: relative;
        margin-left: 2em;
    }

    button:after {
        position: absolute;
        content: "";
        height: 70%;
        width: 1px;
        left: -1em;
        top: 2px;
        bottom: 0;
        background-color: var(--tertiary-lightGreen);
    }

    @media ${device.sm} {
        display: none;
        width: 100%;
        order: 2;
        text-align: center;

        button:after {
        height: 1px;
        width: 70%;
        left: 50%;
        top: 0px;
        bottom: 5px;
    }

        &.active {
            display: block;
        }
    }
`

const Categories = styled.li`
    flex-grow: 1;

    @media ${device.sm} {
        display: none;
    }
`

const Item = styled.li`
    flex-grow: 0;
    margin-left: 2em;

    @media ${device.sm} {
        order: 3;
        width: 100%;
        text-align: center;
        display: none;

        &.active {
            display: block;
        }
    }
`

const Toggle = styled(Item)`
    display: none;
    cursor: pointer;
    z-index: 10;
    font-size: 20px;

    @media ${device.sm} {
        display: block;
        width: min-content;
        order: 1;
    }
`
