import styled from "styled-components";

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  height: auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 25px;
    width: 500px;
    margin: 0 auto;
  }
`;

export const StyledCol = styled.div`
  border: 1px solid black;
`;
