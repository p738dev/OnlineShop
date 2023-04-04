import styled from "styled-components";

export const StyledCard = styled.div`
  height: 100%;
`;

export const StyledCardImage = styled.div`
  height: 400px;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 60px;
`;

export const StyledSpanName = styled.span`
  margin-left: 20px;
  font-size: 22px;
  font-weight: 500;
`;

export const StyledSpanPrice = styled.span`
  margin-right: 20px;
  color: grey;
  font-size: 18px;
  font-weight: 500;
`;

export const StyledSpanSize = styled.span`
  color: grey;
  font-size: 18px;
  font-weight: 500;
`;

export const StyledAddButton = styled.button`
  width: 90%;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: blue;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const StyledGoBasketButton = styled.button`
  width: 90%;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: brown;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const StyledOneEmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const StyledTwoEmptyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const StyledMinusButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: blue;
  color: white;
  font-size: 20px;
`;

export const StyledPlusButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: blue;
  color: white;
  font-size: 20px;
`;
