import { useState } from "react";
import { SubMenuList, SubMenuItem, SubMenuLink } from "./subMenu.styled";
import { getDynamicPathForNavigation } from "../../helpers/getNavDynamicPath";

interface ISubMenuProps {
  itemForSubMenu: string[];
  sectionName: string;
}

export const SubMenuHeader = ({
  itemForSubMenu,
  sectionName,
}: ISubMenuProps) => {
  const [dynamicName, setDynamicName] = useState<string>("");

  return (
    <SubMenuList
      onMouseMove={(e) =>
        setDynamicName(getDynamicPathForNavigation({ e, dynamicName })!)
      }
    >
      {itemForSubMenu.length > 0 &&
        itemForSubMenu.map((text, inx) => {
          return (
            <SubMenuItem key={inx} id={dynamicName}>
              <SubMenuLink
                id={text}
                to={`/transport-company/${sectionName}/${dynamicName}`}
              >
                {text}
              </SubMenuLink>
            </SubMenuItem>
          );
        })}
    </SubMenuList>
  );
};
