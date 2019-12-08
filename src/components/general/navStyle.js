import styled from 'styled-components';

const DropButton = styled.div`
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 8fr 1fr;
    position: sticky;
    top: 0px;
    min-height: 50px;
    transition: transform 0.6s;
    z-index: 1000;
    background-color: #fff;
`

const SearchBar = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AnonymousUser = styled.div`

`

export { DropButton, Container, SearchBar, AnonymousUser };
