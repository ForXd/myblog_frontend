import styled from "styled-components";

const Container = styled.div`
  background-color: #f0f0f2;
  font-family: sans-serif;
  display: grid;
  width: calc(100vw - 40px);
  height: calc(100vh - 20px);
  grid-template-areas:
    "header header"
    "main main"
    "footer footer";
  grid-template-columns: 100px 1fr;
  grid-template-rows: 80px 1fr 80px;
  grid-gap: 10px;
`

const Header = styled.div`
  grid-area: header;
  background-color: #eee;
  padding: 10px;
  text-align: center;
`

const Footer = styled.div`
  grid-area: footer;
  background-color: #eee;
  padding: 10px;
`


const Main = styled.div`
  grid-area: main;
  background-color: #eee;
  padding: 10px;
`

const Spinner = styled.div`
  margin: 20px auto;
  display: block;
`

export { Container,Header,Footer,Main,Spinner };