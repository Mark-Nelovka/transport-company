import styled from "styled-components";
import BG from "../../../images/home/confetBackLeft.png";

export const ServiceSection = styled.section`
padding-top: 100px;
padding-bottom: 89px;
background-image: url(${BG});
background-repeat: no-repeat;
background-size: contain;
`

export const Title = styled.h2`
font-family: ${({theme}) => theme.fonts.additional};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.bold};
font-size: 34px;
line-height: 120%;
color: ${({theme}) => theme.palette.active};
`

export const Description = styled.p`
font-family:  ${({theme}) => theme.fonts.additional};
font-style:  ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 24px;
line-height: 140%;
color: ${({ theme }) => theme.palette.darkGrey};
margin-top: 30px;
margin-bottom: 54px;
`