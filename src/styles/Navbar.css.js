import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.div`
  height: 80px;
  position: sticky;
  top: 0;
  box-shadow: 2px 2px lightgrey;
  background-color: white;
`;

export const StyledContainerNavbar = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const StyledNav = styled.nav`
  width: 200px;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  opacity: 0.6;

  :active {
    opacity: 1;
  }
`;

export const StyledButton = styled.button`
  width: 52px;
  height: 52px;
  margin-right: 20px;
  position: relative;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const StyledRedCircle = styled.div`
  width: 22px;
  height: 22px;
  color: white;
  background-color: darkred;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(25%, 25%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
