import styled, { keyframes } from "styled-components";

const press = keyframes`
  0% {
    border-width: 5px;
    box-shadow: 1px 1px 1px black;
    transform: translateY(0);
  }

  100% {
    border-width: 4px;
    box-shadow: 1px 1px 1px black;
    transform: translateY(2px);
  }
`;

export const Pad = styled.div`
  background: #ad5389;
  padding: 10px;
  border: 5px double black;
  border-radius: 10px;
  background: -webkit-linear-gradient(to right, #3c1053, #ad5389);
  background: linear-gradient(to right, #3c1053, #ad5389);
  color: #685e5e;
  text-align: center;
  font-family: "Lobster";
  font-size: 36px;
  -webkit-text-stroke: 1px #ffa8ff;
  cursor: pointer;
  box-shadow: 1px 1px 2px black;

  &.animated {
    animation: 200ms ${press} ease-in-out 1;
  }
`;
