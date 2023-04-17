import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: #00dce3;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  ${mobile({ display: "none" })}
`;

function Announcement() {
  return (
    <Container>
      For a limited time, you can get your hands on some of our hottest styles
      at discounted prices!
    </Container>
  );
}

export default Announcement;
