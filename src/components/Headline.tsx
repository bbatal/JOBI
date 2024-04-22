import Search from './Search';
import styled from 'styled-components';

interface HeadlineProps {
    fontSize: string,
    title: string,
    subtitle: string
}

export default function Headline({ fontSize, title, subtitle }: HeadlineProps ) {
  return (
        <Box>
            <H1 style={{fontSize:fontSize}}>{ title }</H1>
            <p>{ subtitle }</p>
            <Search />
        </Box>
  )
}

const H1 = styled.h1`
        text-align: center;
        position: relative;
        z-index: 10;
        max-width: 650px;
        /* TODO: find a slightly thicker gordita */
        font-family: "Gordita";
`

const Box = styled.div`
    margin: 5rem auto 3rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`
