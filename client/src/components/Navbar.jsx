import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { mobile } from "../responsive";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/apiCalls";

const Container = styled.div`
  height: 60px;
  background-color: #ffff;
  ${mobile({ height: "50px", backgroundColor: "#ffff", color: "#2b3a55" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0px",
    display: "flex",
    alignItems: "center",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  padding: 0px 10px;
  color: #2b3a55;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid #d0dde4;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile({
    marginLeft: "10px",
    padding: "0px",
    backgroundColor: "#ffff",
    color: "#2b3a55",
  })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: #ffff;
  color: #2b3a55;
  ${mobile({ width: "50px", fontSize: "10px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: #2b3a55;
  font-size: 24px;
  ${mobile({ fontSize: "18px", marginLeft: "15px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1.5, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: #2b3a55;
  ${mobile({
    fontSize: "11px",
    marginLeft: "10px",
    color: "#2b3a55",
  })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.cartQuantity);
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignOut = () => {
    logout(dispatch);
    navigate("/");
    window.location.reload();
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <Language>TR</Language>
          <SearchContainer>
            <Input placeholder='search' />
            <SearchIcon
              style={{
                border: "none",
                outline: "none",
                color: "#2B3A55",
                fontSize: "20px",
                cursor: "pointer",
              }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Link to='/' style={{ textDecoration: "none", color: "#2b3a55" }}>
            <Logo>THUNDERBOLT</Logo>
          </Link>
        </Center>
        <Right>
          {!user && (
            <>
              <MenuItem onClick={handleRegister}>REGISTER</MenuItem>
              <MenuItem onClick={handleSignIn}>SIGN IN</MenuItem>
            </>
          )}
          {user && (
            <>
              <MenuItem onClick={handleSignOut}>SIGN OUT</MenuItem>
            </>
          )}
          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={quantity} color='primary'>
                <ShoppingCartOutlinedIcon color='#2b3a55' />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
