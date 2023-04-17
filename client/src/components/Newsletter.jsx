import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #f2f4f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mobile({ width: "100%" })}
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: #2b3a55;
  ${mobile({
    textAlign: "center",
    fontSize: "50px",
    marginBottom: "10px",
    marginTop: "10px",
  })}
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  color: #2b3a55;
  ${mobile({
    textAlign: "center",
    width: "80%",
    fontSize: "20px",
    marginBottom: "10px",
    marginTop: "10px",
  })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: #ffff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({
    width: "80%",
    height: "40px",
    marginBottom: "10px",
    marginTop: "10px",
  })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #cccc;
    font-weight: 300;
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #00425a;
  color: #ffff;
  cursor: pointer;
`;

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products!</Description>
      <InputContainer>
        <Input />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
