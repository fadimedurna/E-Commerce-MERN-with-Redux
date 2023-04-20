import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: #2b3a55;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  font: small-caption;
  font-size: 16px;
  color: #2b3a55;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #2b3a55;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: #2b3a55;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
      setTimeout(() => {
        window.location.reload(true);
      }, 10);
    }
  }, [currentUser, navigate]);

  const handleLogin = (e) => {
    try {
      e.preventDefault();
      if (email && password) {
        login(dispatch, { email, password });
      } else {
        alert("Please fill in all fields");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder='email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder='password'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>Something went wrong!</Error>}
            <Link>DO YOU NOT REMEMBER THE PASSWORD?</Link>
            <Link onClick={() => navigate("/register")}>
              DO YOU NOT HAVE AN ACCOUNT?
            </Link>
          </Form>
        </Wrapper>
      </Container>
    </Container>
  );
}

export default Login;
