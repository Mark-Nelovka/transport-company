import React, { useState } from "react";
import { Container } from "../../styles/container.styled";
import {
  HeaderSection,
  HeaderContainer,
  LogoImage,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from "./Header.styled";
import { SubMenuHeader } from "../../general";

const itemsForSubServices = [
  "Flatbed",
  "Dry Van",
  "Long Haul Services",
  "FTL Services",
  "LTL Services",
  "Short Haul Services",
  "High Value | Time Sensi",
  "Conestoga",
];

const itemsForSubAbout = ["Blog"];

const itemsForSubCareers = ["Driver Position", "Office Position"];

export const Header = () => {
  const [sectionName, setSectionName] = useState<string>("");
  const [itemForSubMenu, setItemForSubMenu] = useState<string[]>([]);

  const getItem = (e: React.MouseEvent) => {
    const { id } = e.currentTarget as HTMLLinkElement;
    if (sectionName !== id) {
      setSectionName(id);
    }
    switch (id) {
      case "about":
        setItemForSubMenu(itemsForSubAbout);
        break;

      case "careers":
        setItemForSubMenu(itemsForSubCareers);
        break;

      default:
        setItemForSubMenu(itemsForSubServices);
        break;
    }
  };

  return (
    <HeaderSection>
      <Container>
        <HeaderContainer>
          <span>
            <LogoImage />
          </span>
          <nav>
            <NavigationList>
              <NavigationItem>
                <NavigationLink end to="/transport-company">
                  Home
                </NavigationLink>
              </NavigationItem>
              <NavigationItem
                onMouseMove={getItem}
                onMouseLeave={() => setItemForSubMenu([])}
                id="about"
              >
                <NavigationLink to="/transport-company/about">
                  About
                </NavigationLink>
                <SubMenuHeader
                  itemForSubMenu={itemForSubMenu}
                  sectionName={sectionName}
                />
              </NavigationItem>
              <NavigationItem>
                <NavigationLink to="/transport-company/shippers">
                  Shippers
                </NavigationLink>
              </NavigationItem>
              <NavigationItem
                id="services"
                onMouseMove={getItem}
                onMouseLeave={() => setItemForSubMenu([])}
              >
                <NavigationLink to="/transport-company/services">
                  Transporation Services
                </NavigationLink>
                <SubMenuHeader
                  itemForSubMenu={itemForSubMenu}
                  sectionName={sectionName}
                />
              </NavigationItem>
              <NavigationItem>
                <NavigationLink to="/transport-company/lease&finance">
                  Lease & Finance
                </NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink to="/transport-company/news">
                  News
                </NavigationLink>
              </NavigationItem>
              <NavigationItem
                id="careers"
                onMouseMove={getItem}
                onMouseLeave={() => setItemForSubMenu([])}
              >
                <NavigationLink to="/transport-company/careers">
                  Careers
                </NavigationLink>
                <SubMenuHeader
                  itemForSubMenu={itemForSubMenu}
                  sectionName={sectionName}
                />
              </NavigationItem>
              <NavigationItem>
                <NavigationLink to="/transport-company/contacts">
                  Contact
                </NavigationLink>
              </NavigationItem>
            </NavigationList>
          </nav>
        </HeaderContainer>
      </Container>
    </HeaderSection>
  );
};
