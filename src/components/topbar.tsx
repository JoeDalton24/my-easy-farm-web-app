import React from "react";
import styled from "styled-components";

export const TopBar: React.FC = () => {
  return (
    <Container>
      <Img>
        <img src={require("../assets/images/logo.png")} />
      </Img>
    </Container>
  );
};

const Container = styled.div`
  display: fixed;
`;

const Img = styled.div`
  width: 150px;
  height: 50px;
  > img {
    width: 100%;
    height: 100%;
  }
`;
