import styled from "styled-components";

export const OuterContainer = styled.div`
  width: 400px;
  background: #fdc830;
  background: -webkit-linear-gradient(to left, #f37335, #fdc830);
  background: linear-gradient(to left, #f37335, #fdc830);
  border: 10px double black;
  border-radius: 20px;
  padding: 4px;
`;

export const Pads = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
