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
font-weight: ${({ theme }) => theme.fontWeight.bold};
font-size: 14px;
line-height: 120%;
color: ${({ theme }) => theme.palette.white};
padding: 12px 17px;
`

export const BasicFooter = styled.div`
padding-top: 63px;
padding-bottom: 59px;
background-color: #313131;
`

export const BasicContainer = styled.div`
display: flex;
`

export const BasicContentContainer = styled.div`
max-width: 330px;
&:not(:last-child) {
    margin-right: 150px;
}
`

export const BasicContentTitle = styled.p`
font-family: ${({ theme }) => theme.fonts.additional};
font-style: ${({ theme }) => theme.fontStyle.normal};
font-weight: ${({ theme }) => theme.fontWeight.medium};
font-size: 24px;
line-height: 120%;
color: ${({ theme }) => theme.palette.footerTitle};
margin-bottom: 18px;
`

export const BasicContentText = styled.p`
font-family: ${({ theme }) => theme.fonts.basic};
font-style:  ${({ theme }) => theme.fontStyle.italic};
font-weight: ${({ theme }) => theme.fontWeight.reqular};
font-size: 13px;
line-height: 170%;
color: ${({ theme }) => theme.palette.grey};
`

export const BasicContactsContainer = styled.div`
display: flex;
align-items: center;
`

export const BasicIconContainer = styled.span`
margin-right: 15px;
`

export const BasicIcon = styled.img`
width: 69px;
height: 69px;
`

export const BasicLinksContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: flex-start;
`

export const BasicButtonLinks = styled(Button)`
background-color: inherit;
text-transform: none;
`

export const BasicLink = styled.a`
font-family:  ${({ theme }) => theme.fonts.basic};
font-style:  ${({ theme }) => theme.fontStyle.italic};
font-weight: ${({ theme }) => theme.fontWeight.reqular};
font-size: 13px;
line-height: 170%;
color: #5490F4;
`

export const BasicLinkText = styled.span`
font-family:  ${({ theme }) => theme.fonts.basic};
font-style:  ${({ theme }) => theme.fontStyle.italic};
font-weight: ${({ theme }) => theme.fontWeight.reqular};
font-size: 13px;
line-height: 170%;
color: #9B9B9B;
`

export const BasicMarkerText = styled(BasicLinkText)`

`

export const Separator = styled.div`
border: 1px solid #3B3B3B;
`

export const SubFooter = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #313131;
padding: 8px;
`

export const SubText = styled.p`
font-family: ${({ theme }) => theme.fonts.basic};
font-style: ${({ theme }) => theme.fontStyle.italic};
font-weight: ${({ theme }) => theme.fontWeight.reqular};
font-size: 13px;
line-height: 170%;
color: #999999;
`

export const SubButton = styled(BasicButtonLinks)`
`

export const SubLink = styled(BasicLink)`
margin-left: 3px;
`