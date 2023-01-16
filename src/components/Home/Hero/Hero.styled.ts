import styled from "styled-components";
import bg from "../../../images/home/homeHero.png"

export const HeroSection = styled.section`
background: url(${bg});
background-size: cover;
background-repeat: no-repeat;
width: 100vw;
height: 100vh;
padding-top: 150px;
`

export const HeroContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`

export const TitleContainer = styled.div`
`

export const NameCompany = styled.h1`
display: inline-block;
font-family: ${({theme}) => theme.fonts.additional};
font-style: ${({theme}) => theme.fontStyle.italic};
font-weight: ${({theme}) => theme.fontWeight.medium};
font-size: 30px;
line-height: 45px;
color: ${({ theme }) => theme.palette.white};
padding: 1px 32px 1px 32px;
background-color: ${({theme}) => theme.palette.active};
`

export const Title = styled.h2`
width: 600px;
font-family: ${({theme}) => theme.fonts.additional};
font-style: ${({theme}) => theme.fontStyle.italic};
font-weight: ${({theme}) => theme.fontWeight.semiBold};
font-size: 52px;
line-height: 120%;
color: ${({ theme }) => theme.palette.white};
`