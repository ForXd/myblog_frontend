import styled from "styled-components";

const Container = styled.div`
  // background-color: #f0f0f2;
  font-family: sans-serif;
  display: grid;
  width: calc(100vw - 40px);
  grid-template-columns: 40px 1fr 40px;
  grid-template-rows: 80px 1fr 80px;
  grid-gap: 10px;
`

const Header = styled.div`
  grid-column-start:1;
  grid-column-end:4;
  grid-row-start:1;
  grid-row-end:2;
  padding: 10px;
  text-align: center;
`

const Footer = styled.div`
  grid-column-start:1
  grid-column-end:4
  grid-row-start:3
  grid-row-end:4
  padding: 10px;
`


const Main = styled.div`
  grid-column-start:2
  grid-column-end:3
  grid-row-start:2
  grid-row-end:3
  padding: 10px 50px;
`

const Spinner = styled.div`
  margin: 20px auto;
  display: block;
`

export { Container,Header,Footer,Main,Spinner };