import { borders, gradients, shadows } from "@lib/theme/colors";
import styled from "styled-components";
import { navBarLinks } from "./constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { radius } from "@lib/theme/radius";
import { ItemTitle } from "@components/Typography";
import Flex from "@components/Flex";

const NavBarWrapper = styled.nav`
  position: fixed;
  height: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: ${gradients.navBar};
  border-top: 2px solid ${borders.navBar};
  z-index: 1000;
`;

const NavBarItem = styled.button<{ $isActive: boolean }>`
  height: 100%;
  flex-basis: ${(props) => (props.$isActive ? "25%" : "18.75%")};
  width: ${(props) => (props.$isActive ? "25%" : "18.75%")};
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
  div {
    margin: 0 auto;
  }
  z-index: 1000;
  transition: flex-basis 0.3s ease;
  svg {
    transition: color 0.3s ease;
  }
  path {
    transition: stroke 0.3s ease, stroke-width 0.3s ease;
    ${(props) =>
      props.$isActive &&
      `
      stroke: #1d5897;
      stroke-width: 2px;
    `}
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

const NavItem = styled(ItemTitle)<{ $isActive: boolean }>`
  color: #fff;
  -webkit-text-stroke: 2px #1d5897;
  text-shadow: 0px 4px #00000040;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  z-index: ${(props) => (props.$isActive ? 1 : -1)};
  height: ${(props) => (props.$isActive ? "100%" : 0)};
  transition: opacity 0.3s ease;
`;
export const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveIndex(
      navBarLinks.findIndex(({ links }) => links.includes(pathname))
    );
  }, [pathname, setActiveIndex]);

  return (
    <NavBarWrapper>
      <Container>
        <ActiveBg $translateX={activeIndex} />
        {navBarLinks.map((item, index) => (
          <NavBarItem
            $isActive={item.links.includes(pathname)}
            key={index}
            onClick={() => {
              navigate(item.links[0]);
            }}
          >
            <Flex direction="column" align="center" justify="center" gap="6px">
              {item.icon(item.links.includes(pathname) ? "#fff" : "#6B82AE")}
              <NavItem $isActive={item.links.includes(pathname)}>
                {item.text}
              </NavItem>
            </Flex>
          </NavBarItem>
        ))}
      </Container>
    </NavBarWrapper>
  );
};
