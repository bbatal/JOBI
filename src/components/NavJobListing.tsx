import styled from 'styled-components';

// Assets
import logo from '../assets/logo-elipsees.png';
import category from '../assets/category.svg';

export default function NavJobListing() {
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
        <Item>
            <a href="/">Home</a>
        </Item>
        <Item>
            <a href="/">Job</a>
        </Item>
        <Item>
            <a href="/">Explore</a>
        </Item>
        <Item>
            <a href="/">Contact</a>
        </Item>
        <Item>
            <a href="/">Pages</a>
        </Item>
        <Login>
            <div>
            <a href="/">Post Job</a>
            <Button>Login</Button>
            </div>
        </Login>
        <Item>
            <HireButtonExtended>Hire Top Talents</HireButtonExtended>
        </Item>
        <Item className="toggle"><a href="/"><i className="fas fa-bars"></i></a></Item>
    </List>
    </Nav>
  )
}

const Nav = styled.nav`
    margin: 0 3rem;
    font-family: "Gordita";
`

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    max-width: 1492px;
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
`

const Categories = styled.li`
    flex-grow: 1;
`

const Item = styled.li`
    flex-grow: 0;
    margin-left: 2em;
`
