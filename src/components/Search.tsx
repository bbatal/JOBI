// styles
import styled from 'styled-components';

function Search() {
  return (
    <BigBox>
        <OuterBox>
            <InnerBox>
                <H3>Your job title, keyword or company?</H3>
                <Input type="text" placeholder="Google"></Input>
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
        <>
            <Button>Search</Button>
        </>
    </BigBox>
  )
}

export default Search

const BigBox = styled.div`
    display: flex;
    border-radius: 20px;
    background-color: white;
    position: relative;
    z-index: 15;
    margin: 2rem 0;
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
`

const OuterBox = styled.div`
    padding: 1rem 0 1rem 2rem;
    border: transparent;
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
`