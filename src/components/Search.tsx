// styles
import styled from 'styled-components';
import { device } from '../styles/breakpoints';

// Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  return (
    <BigBox>
        <OuterBox>
            <InnerBox>
                <H3>Your job title, keyword or company?</H3>
                <div>
                <span aria-hidden="true">
                    <FontAwesomeIcon style={{color:"var(--secondary-gray)",marginRight: "5px"}} icon={ faSearch } />
                </span>
                <Input type="text" placeholder="Google"></Input>
                </div>
            </InnerBox>
        </OuterBox>
        <OuterBox>
            <InnerBox>
                <H3>Category</H3>
            <Select name="jobType" id="jobType">
                {/* TODO refactor into foreach loop */}
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
            </Select>
            </InnerBox>
        </OuterBox>
            <Button>Search</Button>
    </BigBox>
  )
}

export default Search

const BigBox = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    background-color: white;
    position: relative;
    z-index: 15;
    margin: 2rem 0;

    @media ${device.mdl} {
        width: calc(100% - 2rem);
    }
`

const InnerBox = styled.div`
    border-right: 2px solid var(--tertiary-lightGray);
    padding-right: 2.5rem;
    position: relative;
    z-index: 15;
    background: white;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media ${device.sm} {
        padding: 0rem;

        h3 {
            display: none;
        }

        input {
        position: relative;
        padding: 0.4rem;
        padding-left: 2rem;
        border-radius: 50px;
        border: none;
        width: 100%;
        }

        input::placeholder {
            color: transparent;
        }

        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: transparent;
        }
        ::-moz-placeholder { /* Firefox 19+ */
        color: transparent;
        }
        :-ms-input-placeholder { /* IE 10+ */
        color: transparent;
        }
        :-moz-placeholder { /* Firefox 18- */
        color: transparent;
        }

        input {
            background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='50px' width='100%'><text x='0' y='15' fill='gray' font-size='15'>Your job title, keyword or company?</text></svg>");
            background-repeat: no-repeat;
        }

        input:focus {
        background-image: none;
        }
    }
`

const OuterBox = styled.div`
    padding: 1rem 0 1rem 2rem;
    border: transparent;
    flex-grow: 1;

    @media ${device.sm} {
        padding: 0rem;
    }

    :nth-child(2) {
        @media ${device.md} {
            display: none;
        }
    }
`

const Input = styled.input`
    background: transparent;
    color: black !important;
    border: none;
    position: relative;
    z-index: 15;
    font-family: "Gordita";

    /* TODO - darken placeholder text */
`

const H3 = styled.h3`
    color: gray;
    font-size: 0.9rem;
    position: relative;
    z-index: 15;
    font-family: "Gordita", sans-serif;
    font-weight: 100;
    opacity: 0.7;
    letter-spacing: 0.1px;
`

const Select = styled.select`
    padding: 0.2rem 9rem 0.2rem 0;
    background-color: transparent;
    border: none;
`

const Button = styled.button`
    background-color: var(--primary-grassGreen);
    border: none;
    color: white;
    border-top-right-radius: 13px;
    border-bottom-right-radius: 13px;
    padding: 0 3rem;
    font-size: 1.2rem;
    letter-spacing: 0.1px;
    font-weight: 200;
    cursor: pointer;
    flex-grow: 0;

    @media ${device.sm} {
        display: none;
    }
`