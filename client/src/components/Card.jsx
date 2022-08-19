import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to='/video/test' style={{ textDecoration: "none" }}>
      <Container>
        <Image src='https://i.ytimg.com/vi/TOB2vzPfxNA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOzZUcCPdmIgwGTaY56IW1kY53fA' />
        <Details>
          <ChannelImage src='https://yt3.ggpht.com/IJ5VDWfTDpbTa21o7Q9eDQYQBerRakTYHcnnZczHcaDo58hcw36AnB0_NQtfzUdQjrs7oNlaNG0=s68-c-k-c0x00ffffff-no-rj' />
          <Texts>
            <Title>The Michael Scott Redemption Tour - The Office US</Title>
            <ChannelName>The Office</ChannelName>
            <Info>17k views · 2 hours ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
