import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  /*   margin: 20px;
  height: 50vh;
  width: 60vh;
  text-align: center;
  position: relative; */
  margin: 20px;
  width: 60vh;
  min-width: 280px;
  height: 375px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  ${mobile({
    height: "40vh",
    width: "40vh",
    objectFit: "contain",
    padding: "0px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
  })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: rgba(216, 216, 216, 0.6);
  color: #ffffff;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={`/products/${item.cat}`}>
          <Button>SHOW ALL</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
