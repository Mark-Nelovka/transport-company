import styled from "styled-components";

export const AdvantageSection = styled.section`
padding-top: 70px;
padding-bottom: 77px;
background-color: #272727;
`

export const Title = styled.h2`
font-family: ${({theme}) => theme.fonts.additional};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.bold};
font-size: 34px;
line-height: 120%;
color: ${({ theme }) => theme.palette.white};
margin-bottom: 59px;
`

export const ContentList = styled.ul`
display: flex;
justify-content: space-between;
`

export const ContentItem = styled.li`
position: relative;
max-width: 410px;
`

export const ContentItemEmblemContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
transform: translate(-50%, -50%);
width: 80px;
height: 80px;
border-radius: 50%;
background-color: ${({ theme }) => theme.palette.active};
`

export const ContentItemEmblem = styled.img`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

export const ContentItemTitle = styled.p`
font-family: ${({theme}) => theme.fonts.additional};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.light};
font-size: 28px;
line-height: 120%;
color: ${({ theme }) => theme.palette.white};
margin-bottom: 14px;
margin-top: 20px;
`

export const ContentItemText = styled.p`
font-family:  ${({theme}) => theme.fonts.basic};
font-style:  ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 16px;
line-height: 150%;
color: ${({ theme }) => theme.palette.white};
`