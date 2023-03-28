// images
import jobiLogo from '../assets/jobi-logo.png';
import squareThing from '../assets/square-thing.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import pinterest from '../assets/pinterest.png';

import styled from 'styled-components';

function Footer() {
  return (
 
    <Container className='wrapper'>
        <TopBox className="top-footer">
            <LogoContainer>
                <li>
                    <img src={jobiLogo} alt="jobi logo"/>
                </li>
                <li>
                    <img src={squareThing} alt="random sqaure for design purposes"/>
                </li>
            </LogoContainer>

            <LinksContainer>
                <li><h3>Links</h3></li>
                <li><a>Pricing</a></li>
                <li><a>About us</a></li>
                <li><a>Careers</a></li>
                <li><a>Blog</a></li>
            </LinksContainer>
            <LinksContainer>
                <li><h3>Products</h3></li>
                <li><a>Take the tour</a></li>
                <li><a>Live chat</a></li>
                <li><a>Self-service</a></li>
                <li><a>Mobile</a></li>
                <li><a>Collaboration</a></li>
                <li><a>Reviews</a></li>
            </LinksContainer>
            <LinksContainer>
                <li><h3>Legal</h3></li>
                <li><a>Terms of use</a></li>
                <li><a>Terms & Conditions</a></li>
                <li><a>Privacy</a></li>
                <li><a>Cookie Policy</a></li>
            </LinksContainer>

            <Newsletter>
                <li><h3>Newsletter</h3></li>
                <li><p>Join & get important news regularly</p></li>
                <InputContainer>
                    <input type="text" placeholder="Enter your email" />
                    <button>Send</button>
                </InputContainer>
                <li><p>Lorem ipsum dolor sit amet.</p></li>
            </Newsletter>
        </TopBox>
        <BottomFooter className="bottom-footer">
            <PrivacyContainer>
                <button>Privacy & Terms.</button>
                <button>Contact Us</button>
            </PrivacyContainer>
            <Copyright>Copyright @2023 Jobi inc.</Copyright>
            <SocialMedia>
                <li><img src={facebook} alt="social media link"/></li>
                <li><img src={instagram} alt="social media link"/></li>
                <li><img src={pinterest} alt="social media link"/></li>
            </SocialMedia>
        </BottomFooter>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
    padding: 5rem 6.3rem 2rem 6.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--primary-darkGreen);
`

const TopBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
`

const LogoContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 4rem;
    flex-basis: calc(100% / 5);

    img {
        width: 80px;
    }

    li:nth-child(2) > img {
        width: 40px;
    }
`

const LinksContainer = styled.ul`
    display: flex;
    flex-direction: column;
    color: white;
    gap: 0.8rem;
    justify-content: start;
    align-items: flex-start;
    flex-basis: calc(100% / 5);
    padding: 0.6rem 0 0 0;

    h3 {
        font-weight: 100;
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    li > a {
        font-weight: 100;
        font-family: "Gordita";
        font-size: 0.7rem;
        opacity: 0.7;
    }
`

const Newsletter = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 0.6rem;
    gap: 0.5rem;
    color: white;
    flex-basis: 45%;
    margin-left: 3rem;

    h3 {
        font-weight: 100;
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 0.8rem;
        opacity: 0.8;
    }
`

const InputContainer = styled.li`
    background-color: rgb(39, 59, 51);
    padding: 0.4rem;
    border-radius: 5px;

    /* TODO: fix input breaking on smaller screens */
    input {
        background-color: transparent;
        border: none;
        color: white;
        padding: 0 3rem 0 1rem;
    }

    input::placeholder {
        font-size: 0.8rem;
        opacity: 0.3;
    }

    button {
        color: white;
        background-color: rgb(76, 94, 87);
        font-weight: 100;
        padding: 0.6rem 0.9rem;
        border-radius: 10px;
        font-size: 0.8rem;
    }
`

const BottomFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 4rem 0 0 0;
`

const SocialMedia = styled.ul`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1.5rem;
    flex-basis: calc(100% * 0.2);

    img {
        height: 15px;
    }
`

const Copyright = styled.p`
    font-size: 0.65rem;
    opacity: 0.6;
    flex-basis: calc(100% * 0.6);
    text-align: center;
`

const PrivacyContainer = styled.div`
    flex-basis: calc(100% * 0.2);
    font-size: 0.7rem;

    button {
        color: white;
        opacity: 0.9;
    }
`