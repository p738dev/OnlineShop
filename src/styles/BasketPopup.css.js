import styled from "styled-components";

export const StyledBasketPopupContainer = styled.div`
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
`;

export const StyledProductImage = styled.div`
  width: 200px;
  height: 150px;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledProductBody = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledSpanName = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

export const StyledSpanPrice = styled.span`
  color: grey;
  font-size: 18px;
  font-weight: 500;
`;

export const StyledSpanSize = styled.span`
  color: grey;
  font-size: 18px;
  font-weight: 500;
`;

export const StyledRemoveButton = styled.button`
  padding: 10px;
  background-color: red;
  border: 1px solid blue;
`;

export const StyledQuanArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
