import { borders, gradients, shadows } from "@lib/theme/colors";
import styled from "styled-components";
import { navBarLinks } from "./constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { radius } from "@lib/theme/radius";

const NavBarWrapper = styled.nav`
  position: fixed;
  height: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: ${gradients.navBar};
  border-top: 2px solid ${borders.navBar};
`;

const NavBarItem = styled.button<{ $isActive: boolean }>`
  height: 100%;
  flex-basis: ${(props) => (props.$isActive ? "25%" : "18.75%")};
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:focus,
  &:hover,
  &:active {
    outline: none;
  }
  z-index: 1;
  transition: flex-basis 0.3s ease;
  svg {
    transition: color 0.3s ease;
  }
`;

const ActiveBg = styled.span<{ $translateX: number }>`
  position: absolute;
  top: 0;
  width: 25%;
  box-sizing: border-box;
  height: 100%;
  border-radius: ${radius.medium};
  border: 2px solid ${borders.navActiveButton};
  border-top: none;
  background: ${gradients.navButton};
  box-shadow: 0px -7px 0px 0px ${shadows.black25} inset;
  z-index: 0;
  transform: translateX(${(props) => props.$translateX * 75}%);
  transition: transform 0.3s ease;
`;

const Container = styled.div`
  margin: 0 25px;
  position: relative;
  display: flex;
  width: 100%;
`;

export const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveIndex(navBarLinks.findIndex(({ link }) => pathname === link));
  }, [pathname, setActiveIndex]);

  return (
    <NavBarWrapper>
      <Container>
        <ActiveBg $translateX={activeIndex} />
        {navBarLinks.map((item, index) => (
          <NavBarItem
            $isActive={item.link === pathname}
            key={index}
            onClick={() => {
              navigate(item.link);
            }}
          >
            {item.icon(item.link === pathname ? "#fff" : "#6B82AE")}
          </NavBarItem>
        ))}
      </Container>
    </NavBarWrapper>
  );
};
