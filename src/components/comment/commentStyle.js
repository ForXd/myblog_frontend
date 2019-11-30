import styled from "styled-components";

const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 30px 1fr 30px;
    grid-gap: 10px;
    
    padding: 2em;
    background-color: #fff;
    border-radius: 2em;
    box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    margin: auto 20px;
`

const UserInfo = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
`

const Content = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
`

const Function = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    text-align: right;
`
const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
`

export { Card, Function, UserInfo, Content, Img };