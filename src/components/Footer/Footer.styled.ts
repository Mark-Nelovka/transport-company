import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../general/Button/Button.styled";

export const FooterTop = styled.div`
padding: 50px 0px;
background-color: ${({ theme }) => theme.palette.active};
`

export const TopContainer = styled.div`
display: flex;
align-items: center;
`

export const TopCall = styled.p`
font-family:  ${({ theme }) => theme.fonts.additional};
font-style:  ${({ theme }) => theme.fontStyle.normal};
font-weight:  ${({ theme }) => theme.fontWeight.medium};
font-size: 30px;
line-height: 120%;
color:  ${({ theme }) => theme.palette.white};
margin-right: 20px;
`

export const TopPhoneButton = styled(Button)`
display: flex;
`

export const TopPhoneIconContainer = styled.span`
margin-right: 11px;
`

export const TopPhoneIcon = styled.img`
width: 30px;
height: 30px;
`

export const TopPhone = styled.a`
display: flex;
align-items: center;
font-family:  ${({ theme }) => theme.fonts.additional};
font-style:  ${({ theme }) => theme.fontStyle.normal};
font-weight:  ${({ theme }) => theme.fontWeight.medium};
font-size: 30px;
line-height: 120%;
color:  ${({ theme }) => theme.palette.white};
`

export const TopSocialButton = styled(Button)`
margin-left: auto;
display: flex;
justify-content: center;
border-radius: 50%;
`

export const TopSocialLink = styled(Link)`
padding: 5px;
`

export const TopFacebookIcon = styled.img`
width: 11px;
height: 22px;
`

export const TopButton = styled(Button)`
margin-left: 50px;
background-color: #590000;
border-radius: 5px;
`

export const TopButtonLink = styled(Link)`
display: inline-block;
font-family:  ${({ theme }) => theme.fonts.basic};
font-style: ${({ theme }) => theme.fontStyle.normal};
font-weight:${({ theme }) => theme.fontWeight.bold};
font-size: 14px;
line-height: 120%;
color: ${({ theme }) => theme.palette.white};
padding: 12px 17px;
`