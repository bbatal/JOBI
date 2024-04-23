import Search from './Search';
import styled from 'styled-components';

interface HeadlineProps {
    fontFamily: string,
    fontSize: string,
    title: string,
    subtitle: string
}

export default function Headline({ fontSize, title, subtitle, fontFamily }: HeadlineProps ) {
  return (
        <Box>
            <H1 style={{fontSize:fontSize, fontFamily:fontFamily}}>{ title }</H1>
            <P>{ subtitle }</P>
            <Search />
        </Box>
  )
}

const P = styled.p`
    color: #fff;
`

const H1 = styled.h1`
        text-align: center;
        position: relative;
        z-index: 10;
        max-width: 650px;
        color: #fff;
        margin-bottom: 20px;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`
