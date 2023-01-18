import styled from "styled-components";

export const AboutSection = styled.section`
padding-top: 52px;
padding-bottom: 85px;
background-color: ${({theme}) => theme.palette.bgLight};
`

export const Title = styled.h3`
font-family: ${({theme}) => theme.fonts.additional};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 42px;
line-height: 120%;
text-align: center;
color: ${({ theme }) => theme.palette.active};
margin-bottom: 50px;
`

export const ContentContainer = styled.div`
display: flex;
justify-content: space-between;
`

export const TextContainer = styled.div`
max-width: 600px;
`

export const Text = styled.p`
font-family: ${({theme}) => theme.fonts.basic};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 13px;
line-height: 150%;
color: ${({ theme }) => theme.palette.darkGrey};

&:not(:last-child) {
    margin-bottom: 15px;
}
`