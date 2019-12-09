import styled from 'styled-components';

const DropButton = styled.div`
    font-size: 18px;
    cursor: pointer;
    text-align: center;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    position: sticky;
    top: 0px;
    min-height: 50px;
    transition: transform 0.6s;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
`

const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    input {
        width: 300px;
        transition: .2s linear;
        border: 2px solid #324B4E;
        border-radius: 10px 10px 10px 10px;
        float:left;
    }
    :hover {
        input {
            width: 500px;
         }
     }
`

const AnonymousUser = styled.div`

`

const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


export { DropButton, Container, SearchBar, AnonymousUser, CenterContainer};
