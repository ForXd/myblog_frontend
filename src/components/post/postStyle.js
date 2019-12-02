import styled from "styled-components";

const Container = styled.div`
    display: flex;
`

const Content = styled.div`
    min-width: 75vw;
`

const Contents = styled.div`
    position: sticky;
    top: 0;
    left: 0;
`

const Up = styled.div`
    width: 50px;
    height: 50px;
    position: fixed;
    right: 0;
    bottom: 0;
`

export { Container, Content, Contents, Up };