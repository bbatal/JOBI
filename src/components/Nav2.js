// images
import logo from '../assets/jobi-logo.png';
import category from '../assets/Category.png';

// import styled from 'styled-components';


export default function Nav2() {
  return (
    <ul>
        <li>
            <a href='/'><img src={logo} alt="link to home page" /></a>
        </li>
        <li>
            <button><img src={category} alt="click to change job category" />Category</button>
        </li>
        <li>
            <a href='/'>Home</a>
        </li>
        <li>
            <a href='/job-list'>Job</a>
        </li>
        <li>
            <a href='/'>Explore</a>
        </li>
        <li>
            <a href='/'>Contact</a>
        </li>
        <li>
            <a href='/'>Pages</a>
        </li>
        <li>
            <button>Post Job</button>
        </li>
        <li>
            <button>Login</button>
        </li>
        <li>
            <button>Hire Top Talents</button>
        </li>
    </ul>
  )
}
