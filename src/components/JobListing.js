import chevron from '../assets/chevron-right.png';
import bookmark from '../assets/bookmark.png';

import styled from 'styled-components';

function JobListing() {
  return (
    <section id="jobListings" className='wrapper'>
        <Box>
            <h2>New Job Listing</h2>
            {/* TODO - refactor below into a component */}
            <Link href='#'><p>Explore all jobs</p> <img src={chevron} alt="chevron right" /></Link>
        </Box>

        <Ul>
            {/* TODO - refactor to use real jobs from https://fakerjs.dev/guide/ */}
            <Li>
                <img src='https://unsplash.it/30/30' alt="job posting company logo"/>
                <BigDivs>
                    <h3>Developer & expert in java c++</h3>
                </BigDivs>
                
                <BigDivs>
                    <Span color="green">Fulltime</Span>
                    <p>18 July 2018 by <Span color="#000">slack</Span></p>
                </BigDivs>
                <BigDivs>
                    <p>Spain, Barcelona</p>
                    <Span color='#000'>Developer, Coder</Span>
                </BigDivs>
                <ButtonsContainer>
                    <button>
                        <img src={bookmark} alt="save this job to your favorites" />
                    </button>
                    <Button>APPLY</Button>
                </ButtonsContainer>
            </Li>
            <Li>
                <img src='https://unsplash.it/30/30' alt="job posting company logo"/>
                <BigDivs>
                    <h3>Developer & expert in java c++</h3>
                </BigDivs>
                
                <BigDivs>
                    <Span color="green">Fulltime</Span>
                    <p>18 July 2018 by <Span color="#000">slack</Span></p>
                </BigDivs>
                <BigDivs>
                    <p>Spain, Barcelona</p>
                    <Span color='#000'>Developer, Coder</Span>
                </BigDivs>
                <ButtonsContainer>
                    <button>
                        <img src={bookmark} alt="save this job to your favorites" />
                    </button>
                    <Button>APPLY</Button>
                </ButtonsContainer>
            </Li>
            <Li>
                <img src='https://unsplash.it/30/30' alt="job posting company logo"/>
                <BigDivs>
                    <h3>Developer & expert in java c++</h3>
                </BigDivs>
                
                <BigDivs>
                    <Span color="green">Fulltime</Span>
                    <p>18 July 2018 by <Span color="#000">slack</Span></p>
                </BigDivs>
                <BigDivs>
                    <p>Spain, Barcelona</p>
                    <Span color='#000'>Developer, Coder</Span>
                </BigDivs>
                <ButtonsContainer>
                    <button>
                        <img src={bookmark} alt="save this job to your favorites" />
                    </button>
                    <Button>APPLY</Button>
                </ButtonsContainer>
            </Li>
            <Li>
                <img src='https://unsplash.it/30/30' alt="job posting company logo"/>
                <BigDivs>
                    <h3>Developer & expert in java c++</h3>
                </BigDivs>
                
                <BigDivs>
                    <Span color="green">Fulltime</Span>
                    <p>18 July 2018 by <Span color="#000">slack</Span></p>
                </BigDivs>
                <BigDivs>
                    <p>Spain, Barcelona</p>
                    <Span color='#000'>Developer, Coder</Span>
                </BigDivs>
                <ButtonsContainer>
                    <button>
                        <img src={bookmark} alt="save this job to your favorites" />
                    </button>
                    <Button>APPLY</Button>
                </ButtonsContainer>
            </Li>
            <Li>
                <img src='https://unsplash.it/30/30' alt="job posting company logo"/>
                <BigDivs>
                    <h3>Developer & expert in java c++</h3>
                </BigDivs>
                
                <BigDivs>
                    <Span color="green">Fulltime</Span>
                    <p>18 July 2018 by <Span color="#000">slack</Span></p>
                </BigDivs>
                <BigDivs>
                    <p>Spain, Barcelona</p>
                    <Span color='#000'>Developer, Coder</Span>
                </BigDivs>
                <ButtonsContainer>
                    <button>
                        <img src={bookmark} alt="save this job to your favorites" />
                    </button>
                    <Button>APPLY</Button>
                </ButtonsContainer>
            </Li>
          
        </Ul>

        <Aside>
            <Container>
                <p>Do you want to post a job for your company? <Span color="lightgreen">We can help.</Span></p>
                <button>Click here</button>
            </Container>
            
        </Aside>
    </section>
  )
}

export default JobListing;

// TODO: refactor into a reusable style
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6rem 0 2rem 0;

    /* TODO: make font global */
    h2 {
        font-family: "Gordita";
        font-size: 2.3rem;
    }
`

// refactor into reusbale, FIX LINK COLOR
const Link = styled.a`
  display: flex;
  align-items: baseline;
  border-bottom: 3px solid lightgreen;
  gap: 0.2rem;
  color: lightgreen;
  
  img {
    height: 10px;
    max-width: 10px;
  }
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`

const Li = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    border: 1px solid var(--tertiary-lightGray);
    border-radius: 5px;
    font-size: 0.8rem !important;

    h3 {
        font-family: "Gordita";
        font-weight: 300;
        max-width: 160px;
    }
`

const BigDivs = styled.div`
    flex: 1 2 0;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: 0 0 0 1.5rem;
    line-height: 25px;

    p {
       text-align: start;
       font-size: 0.7rem;
       color: var(--primary-gray);
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 25px;
        height: 25px;
    }
`

const Button = styled.button`
    color: white;
    background-color: var(--primary-grassGreen);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    margin-left: 0.5rem;
`

const Span = styled.span`
    color: ${props => props.color};
` 

const Aside = styled.aside`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 50px;
    padding: 0.3rem 2rem;

    button {
        text-decoration: underline;
        color: var(--primary-grassGreen);
    }
`