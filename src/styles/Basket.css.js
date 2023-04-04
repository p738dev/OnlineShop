import styled from "styled-components";

export const StyledBasketContainer = styled.div`
  width: 1000px;
  height: auto;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 5px 4px 5px 10px grey;

  @media (max-width: 992px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    width: 400px;
  }
`;

export const StyledAreaCancel = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const StyledCancelBasketButton = styled.button`
  padding: 15px;
  background-color: black;
  color: red;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
`;

export const StyledEmptyArea = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledEmptyBasket = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledTotalPrice = styled.div`
  display: flex;
  justify-content: center;

  p {
    font-size: 25px;
    font-weight: 500;
  }

  span {
    font-size: 28px;
    font-weight: 600;
  }
`;
