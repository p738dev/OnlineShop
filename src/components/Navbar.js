import React from "react";
import { BsBasket3 } from "react-icons/bs";
import {
  StyledButton,
  StyledContainerNavbar,
  StyledNav,
  StyledNavbar,
  StyledNavLink,
  StyledRedCircle,
} from "../styles/Navbar.css";

const Navbar = ({ setIsOpenBasket, cartItems }) => {
  return (
    <StyledNavbar>
      <StyledContainerNavbar>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/store">Store</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
        </StyledNav>
        <StyledButton onClick={() => setIsOpenBasket(true)}>
          <BsBasket3 />
          <StyledRedCircle>{cartItems.length}</StyledRedCircle>
        </StyledButton>
      </StyledContainerNavbar>
    </StyledNavbar>
  );
};

export default Navbar;
