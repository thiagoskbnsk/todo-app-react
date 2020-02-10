import React from "react";
import { CardWrapper, Body, Title, Subtitle } from "./styled";

function Card({ title, subtitle, children }) {
  return (
    <CardWrapper>
      <Body>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Body>
      <Body>{children}</Body>
    </CardWrapper>
  );
}

export default Card;
