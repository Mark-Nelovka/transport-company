import styled from "styled-components";
import BG from "../../../images/home/confetBackRight.png";
import BgLogo from "../../../images/D&Dlogo.png"
import BgQout from "../../../images/home/BgQuotes.png";

export const FeedbackSection = styled.section`
background-color: #F5F5F5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ConfetyImageContainer = styled.div`
background-color: inherit;
padding: 80px 0px;
min-height: 100%;
background: url(${BG});
background-repeat: no-repeat;
background-position: right;
background-size: contain;
`

export const ContentContainer = styled.div`
position: relative;
display: flex;
& > div:nth-child(1) {
    margin-right: 50px;
}
`

export const DescriptionContainer = styled.div`
max-width: 370px;
& > p:not(:last-child) {
   margin-bottom: 10px;
}
`

export const DescriptionTitle = styled.h3`
font-family: ${({theme}) => theme.fonts.additional};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 24px;
line-height: 120%;
color: ${({ theme }) => theme.palette.active};
margin-bottom: 31px;
`

export const Text = styled.p`
position: relative;
z-index: 2;
font-family: ${({theme}) => theme.fonts.basic};
font-style: ${({theme}) => theme.fontStyle.normal};
font-size: 16px;
line-height: 150%;
color: ${({theme}) => theme.palette.darkGrey};
`

export const DescriptionTextBold = styled(Text)`
font-weight: ${({theme}) => theme.fontWeight.bold};
`

export const DescriptionText = styled(Text)`
font-weight: ${({theme}) => theme.fontWeight.reqular};
`

export const DescriptionTextClients = styled(Text)`
position: relative;
font-weight: ${({ theme }) => theme.fontWeight.reqular};
&::before {
    content: url(${BgQout});
    position: absolute;
    top: -12px;
    left: -15px;
    width: 41px;
    height: 36px;
    z-index: -1;
}
`

export const AuthorContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 40px;
`

export const AuthorIcon = styled.img`
width: 8px;
height: 9px;
`

export const AuthorName = styled.span`
font-family: ${({ theme }) => theme.fonts.basic};
font-style: ${({ theme }) => theme.fontStyle.normal};
font-weight: ${({ theme }) => theme.fontWeight.reqular};
font-size: 13px;
line-height: 150%;
color: #A8A8A8;
margin-left: 7px;
`

export const BgLogoContainer = styled.div`
position: absolute;
top: 50%;
left: 80%;
transform: translate(-50%, -50%);
width: 500px;
height: 300px;
background-color: inherit;
background: url(${BgLogo});
background-repeat: no-repeat;
background-position: right;
background-size: contain;
`

