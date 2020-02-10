import styled from "styled-components";
import { PixelToRem } from "../../utils/styled-components";

export const CardWrapper = styled.div`
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 12px 0;
  background: #fff;
`;

export const Body = styled.div`
  padding: 0 12px;
`;

export const Title = styled.h3`
  font-size: ${PixelToRem(20)};
`;

export const Subtitle = styled.h4`
  font-size: ${PixelToRem(18)};
`;
