import styled from "styled-components";

const Card = styled.div`
    width: 300px;
    height: 500px;
    background: white;
    margin: 20px;
    position: relative;
    overflow: hidden;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0;
    transform: scale(0.95);
    transition: box-shadow 0.5s, transform 0.5s;
    :hover {
        transform: scale(1);
        box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
    }
`

const Container = styled.div`
    display: flex;
`

const Title = styled.div`
    text-align: center;
    
`

export { Card };