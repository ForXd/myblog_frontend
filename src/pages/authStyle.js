import styled from 'styled-components';

const Card = styled.div`
    width: 410px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    background-color: #fdfdff;
    border-radius: 2em;
    box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    margin: auto;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.9rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  border-radius: 2em;
  width: 100%;
`;

const Button = styled.button`
  padding: 1rem;
  color: white;
  background-color: black;
  width: 50%;
  text-align:center;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  border-radius: 2em;
`;

const Logo = styled.img`
  width: 50%;
  margin-bottom: 1rem;
`;

const Error = styled.div`
  background-color: red;
`;

const Container = styled.div`
  background-color: #f0f0f2;
  height: 100vh;
  display: grid;
`

export { Form, Input, Button,
    Logo, Card, Error, Container};