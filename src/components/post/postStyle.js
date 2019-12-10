import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr
    margin: 0 50px;
    justify-content: center;
`

const Content = styled.div`
   
`

const Contents = styled.div`
    margin-right: 20px;    
    margin-top: 100px;
`

const Up = styled.div`
    width: 50px;
    height: 50px;
    position: fixed;
    right: 0;
    bottom: 0;
`

export { Container, Content, Contents, Up };