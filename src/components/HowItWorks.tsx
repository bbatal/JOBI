// icons
import playBtn from '../assets/video-play-button.png';
import account from '../assets/account.png';
import apply from '../assets/apply.png';
import profile from '../assets/profile.png';

import styled from 'styled-components';

function HowItWorks() {
  return (
    <Section id='howItWorks'>
        <Div className='wrapper'>
        <TopSection>
            <button><img src={playBtn} alt="placeholder" /></button>
            <h3>Let's get started It's <span>simple.</span></h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nemo autem blanditiis eos distinctio quaerat? Ve!
            </p>
        </TopSection>
        <Ul>
            <Li>
                <img src={account} alt="profile icon green" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <Button>open account</Button>
                </div>
            </Li>
            <Li>
                <img src={profile} alt="profile icon green" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <Button>open account</Button>
                </div>
            </Li>
            <Li>
                <img src={apply} alt="profile icon green" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <Button>open account</Button>
                </div>
            </Li>
        </Ul>
        </Div>
    </Section>
  )
}

export default HowItWorks

// TODO - add bg image
const Section = styled.section`
    background-color: gray;
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    padding: 3rem 0;
    gap: 2rem;
    margin: 8rem auto;
`

const TopSection = styled.div`
    max-width: 40%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;

    img {
        width: 60px;
        height: 60px;
    }

    h3 {
        /* TODO - font weight needs to be higher */
        font-size: 2rem;
        max-width: 270px;
        font-family: "gordita";
        font-weight: 600;
        color: white;

        span {
            color: var(--primary-grassGreen);
        }
    }

    p {
        color: white;
        line-height: 25px;
    }

    
`

const Ul = styled.ul`
    align-self: center;
    display: flex;
    justify-content: center;
    gap: 2rem;
`

const Li = styled.li`
    display: flex;
    background: rgba(255, 255, 255, 0.8);
    gap: 1rem;
    padding: 1rem;
    border-radius: 5px;

    img {
        width: 30px;
        height: 30px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1rem;

        p {
            max-width: 200px;
            font-size: 0.9rem;
            line-height: 22px;
        }
    }
`

const Button = styled.button`
    margin: 0;
    padding: 0;
    color: var(--primary-grassGreen);
`