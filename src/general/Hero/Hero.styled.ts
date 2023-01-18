import styled from "styled-components";

interface IHeroSectionStyle {
    background: string
    showElements: boolean
}

export const HeroSection = styled.section<IHeroSectionStyle>`
background-image: url(${({ background }) => background});
background-size: ${({showElements}) => showElements ? "cover" : "none"};
background-repeat: no-repeat;
background-position: ${({showElements}) => showElements ? "left" : "top"} ;
width: 100vw;
padding-top: 150px;
padding-bottom: 86px;
`

interface ITitleHero {
    showElements: boolean
}

export const HeroContainer = styled.div<ITitleHero>`
display: flex;
align-items: center;
justify-content: ${({showElements}) => showElements ? "space-around" : "none"};
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

interface ITitleHero {
    showElements: boolean
}

export const Title = styled.h2<ITitleHero>`
width: ${({ showElements }) => showElements ?  "600px" : "auto"};
font-family: ${({theme}) => theme.fonts.additional};
font-style: ${({theme}) => theme.fontStyle.italic};
font-weight: ${({theme}) => theme.fontWeight.semiBold};
font-size: 52px;
line-height: 120%;
color: ${({ theme, showElements }) => showElements ?  theme.palette.white : theme.palette.active};
`