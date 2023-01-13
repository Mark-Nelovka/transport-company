import { Link } from "react-router-dom";
import styled from "styled-components";

export const SubMenuList = styled.ul`
display: none;
position: absolute;
top: 55px;
left: 50%;
transform: translate(-50%, 0%);
width: 150px;
z-index: 2;
background-color: #F0EFED;
`

export const SubMenuItem = styled.li`
border-bottom: 1px solid #E4E3E2;
&:hover {
    background-color: #E4E3E2;
}
`

export const SubMenuLink = styled(Link)`
display: inline-block;
font-family: ${({theme}) => theme.fonts.basic};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 11px;
line-height: 15px;
color: ${({ theme }) => theme.palette.darkGrey};
width: 100%;
padding: 13px 20px 13px 20px;
`