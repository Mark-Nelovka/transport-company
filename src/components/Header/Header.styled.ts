import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/D&Dlogowhite.png";

export const HeaderSection = styled.header`
display: flex;
align-items: center;
background-color: rgba(0,0,0, .65);
padding: 16px 0px;
`

export const HeaderContainer = styled.div`
display: flex;
align-items: center;
& > nav {
    width: 100%;
    margin-left: 107px;
}
`

export const LogoImage = styled.img.attrs({src: `${logo}`,alt: "Logo"})`
` 

export const NavigationList = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
`

export const NavigationItem = styled.li`
position: relative;
&:hover > ul {
    display: block;
}

 & > a.active::after {
    content: "";
    position: absolute;
    bottom: -35px;
    right: 0;
    width: 100%;
    border: 2px solid ${({theme}) => theme.palette.active};
    border-radius: 1.5px 1.5px 0px 0px;
}
`

export const NavigationLink = styled(NavLink)`
font-family: ${({ theme }) => theme.fonts.basic};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-style: ${({theme}) => theme.fontStyle.normal};
font-size: 15px;
line-height: 19px;
padding: 3px 3px 36px 3px;

color: ${({theme}) => theme.palette.white};
 &.active {
    color: ${({theme}) => theme.palette.active}
}

&:hover > ul {
    display: block;
}
`

