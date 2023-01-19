import styled from "styled-components";

export const Button = styled.button.attrs({
    type: "submit"
})`
font-family: ${({ theme }) => theme.fonts.basic};
color: ${({theme}) => theme.palette.white};
text-transform: uppercase;
background-color: ${({ theme }) => theme.palette.active};
border-radius: 5px;
display: inherit;
`