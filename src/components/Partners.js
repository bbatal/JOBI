// icons
import google from '../assets/google.png';
import shipbob from '../assets/shipbob.png';
import dribble from '../assets/dribble.png';
import slack from '../assets/slack.png';
import vine from '../assets/vine.png';
import airbnb from '../assets/airbnb.png';

import styled from 'styled-components';

function Partners() {
  return (
    <Box className='wrapper'>
        <Ul>
            <Li><img src={google} alt="google logo" /></Li>
            <Li><img src={shipbob} alt="shipbob logo" /></Li>
            <Li><img src={dribble} alt="dribble logo" /></Li>
            <Li><img src={slack} alt="slack logo" /></Li>
            <Li><img src={vine} alt="vine logo" /></Li>
            <Li><img src={airbnb} alt="airbnb logo" /></Li>
        </Ul>
    </Box>
  )
}

export default Partners;

const Box = styled.div`
    background-color: var(--tertiary-lightGray);
    padding: 1.5rem 0 ;
`
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`

const Li = styled.li`
  margin: 0 2rem;
`