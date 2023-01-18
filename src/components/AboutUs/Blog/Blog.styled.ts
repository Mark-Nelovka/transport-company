import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlogSection = styled.section`
padding-top: 54px;
padding-bottom: 90px;
background-color: ${({theme}) => theme.palette.bgLight};
`

// export const BlogContainer = styled.div`
// padding-top: 54px;
// padding-bottom: 90px;
// background-color: ${({theme}) => theme.palette.bgLight};
// `

export const Title = styled.h2`
font-family: ${({theme}) => theme.fonts.additional};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 42px;
line-height: 120%;
text-align: center;
color: ${({ theme }) => theme.palette.active};
margin-bottom: 65px;
`

export const ContentContainer = styled.div`
display: flex;
`

export const Date = styled.p`
position: relative;
font-family: ${({theme}) => theme.fonts.basic};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight:  ${({theme}) => theme.fontWeight.reqular};
font-size: 13px;
line-height: 150%;
color: ${({ theme }) => theme.palette.darkGrey};
margin-right: 108px;
&::after {
    content: "";
    position: absolute;
    top: 3%;
    left: 50px;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.palette.active};
    border-radius: 50%;
    margin-left: 50px;
}
`

export const BlogImage = styled.img`
width: 410px;
height: 200px;
`

export const DescriptionContainer = styled.div`
margin-left: 30px;
`

export const DescriptionTitle = styled.p`
font-family: ${({theme}) => theme.fonts.additional};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 53px;
line-height: 100%;
color: ${({theme}) => theme.palette.active};
`

export const DescriptionText = styled.p`
font-family: ${({theme}) => theme.fonts.basic};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 13px;
line-height: 150%;
color: ${({ theme }) => theme.palette.darkGrey};
margin: 15px 0px;
`

export const DescriptionButtonContainer = styled.div`
padding: 12px 0px 12px 0px;
text-align: right;
background: #F0F0F0;
`

export const DescriptionButton = styled.button`
/* text-align: right; */
background: inherit;
border-left: 1px solid ${({ theme }) => theme.palette.grey};
`

export const DescriptionLink = styled(Link)`
padding: 12px 15px 12px 15px;
background: #F0F0F0;


`