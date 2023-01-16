import styled from "styled-components";

export const List = styled.ul`
display: flex;
justify-content: space-between;
`

export const Item = styled.li`
max-width: 234px;
`

export const ItemTitle = styled.p`
font-family: ${({theme}) => theme.fonts.additional};
font-style:  ${({theme}) => theme.fontStyle.normal};
font-weight:  ${({theme}) => theme.fontWeight.light};
font-size: 18px;
line-height: 120%;
color:  ${({ theme }) => theme.palette.active};
margin-top: 22px;
margin-bottom: 12px;
`

export const ItemText = styled.p`
font-family: ${({theme}) => theme.fonts.basic};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 13px;
line-height: 150%;
color: ${({theme}) => theme.palette.darkGrey};
`