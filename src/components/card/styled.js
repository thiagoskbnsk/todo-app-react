import styled from "styled-components";

export const CardWrapper = styled.div`
  box-shadow: 0 4px 10px rgba(0, 0, 0, .3);
  padding: 34px 24px 24px;
  background: #393e46;
  max-width: 600px;
  margin: 100px auto;
  border-radius: 3px;
  position: relative;
  
  &:before {
    content: '';
    height: 10px;
    width: 100%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: #348F50;
    background: -webkit-linear-gradient(to right, #56B4D3, #348F50);
    background: linear-gradient(to right, #9638de,#45e8f9);
  }
`;

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const Body = styled.div`
`;

export const Title = styled.h3`
  font-size: 1.428571428571429rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
`;

export const Subtitle = styled.h4`
  font-size: 1.142857142857143rem;
  font-weight: 500;
  color: #cacaca;
`;
