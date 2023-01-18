import { Link } from "react-router-dom";
import styled from "styled-components";
import { Title } from "../Blog.styled";

export const DetailsSection = styled.section`
padding-top: 80px;
padding-bottom: 50px;
`

export const DetTitle = styled(Title)`
margin-bottom: 40px;
`

export const DetImageContainer = styled.div`
margin-bottom: 40px;
`

export const DetImage = styled.img`
width: 800px;
height: 480px;
margin: 0 auto;
`

export const DetTextContainer = styled.div`

& > p:nth-child(odd) {
    margin-bottom: 15px;
}
`

export const DetLink = styled(Link)`
font-family: ${({theme}) => theme.fonts.basic};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.bold};
font-size: 16px;
line-height: 150%;
color: #276DD7;
text-transform: uppercase;
`

