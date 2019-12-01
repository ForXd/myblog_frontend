import styled from 'styled-components';

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    div {
        color: black;
        padding: 12px 16px;
        display: block;
    }
    div:hover {
        background-color: #f1f1f1;
    }
`
const DropButton = styled.div`
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
`

const DropDown = styled.div`
    float: right;
    position: relative;
    display: inline-block;
    :hover ${DropDownContent} {
        display: block;
    }
    :hover ${DropButton} {
        background-color: #3e8e41;
    }
`
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: sticky;
    top: 0px;
`
const SearchBar = styled.div`
    background-color: black;
`

export { DropButton, DropDownContent, DropDown, Container, SearchBar };
