import React from "react";
import { CardWrapper, Header, Body, Title, Subtitle } from "./styled";

function Card({ title, subtitle, children }) {
  return (
    <CardWrapper>
      <Header>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Header>
      <Body>{children}</Body>
    </CardWrapper>
  );
}

export default Card;
