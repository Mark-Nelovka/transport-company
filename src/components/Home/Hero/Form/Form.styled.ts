import styled from "styled-components";
import { Link } from "react-router-dom";
import {Button} from "../../../../general/Button/Button.styled";

export const FormSubscribe = styled.div`
position: relative;
display: flex;
flex-direction: column;
background-color: ${({ theme }) => theme.palette.white};
padding: 0px 40px 26px 40px;
border-top-left-radius: 33px;
`

export const BorderTop = styled.span`
    position: absolute;
    top: -7px;
    left: 8px;
    width: 8px;
    height: 39px;
    border-left: 4px solid #6D010C;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 6px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(53deg);
`

export const BorderLeft = styled.span`
    position: absolute;
    top: 18px;
    left: -4px;
    width: 3px;
    height: 50px;
    border-left: 4px solid #6D010C;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 4px;
`

export const TitleForm = styled.p`
font-family: ${({ theme }) => theme.fonts.additional};
font-style: ${({ theme }) => theme.fontStyle.italic};
font-weight: ${({ theme }) => theme.fontWeight.semiBold};
font-size: 18px;
line-height: 150%;
text-align: center;
margin-bottom: 24px;
color: ${({ theme }) => theme.palette.darkGrey};
`

export const Title = styled(TitleForm)`
    position: relative;
    background-color:  ${({ theme }) => theme.palette.white};
    border-bottom-left-radius: 29px;
    padding-top: 30px;
    margin-bottom: 0;
`

export const TitleBorderBottom = styled.span`
position: absolute;
    bottom: -8px;
    left: 8px;
    width: 7px;
    height: 38px;
    border-left: 4px solid #6D010C;
    border-top-left-radius: 14px;
    border-bottom-left-radius: 0px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(-53deg);
    -ms-transform: rotate(-53deg);
    transform: rotate(-53deg);
`

export const TitleBorderLeft = styled.span`
position: absolute;
    top: -3px;
    left: -3px;
    width: 10px;
    height: 42px;
    border-left: 4px solid #6D010C;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`

export const TitleBorderTop = styled.span`
    position: absolute;
    top: -4px;
    left: -3px;
    right: -4px;
    min-width: 100%;
    height: 12px;
    border-top: 4px solid #6D010C;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

export const TitleBorderRight = styled.span`
    position: absolute;
    top: -3px;
    right: -4px;
    width: 14px;
    height: 380px;
    border-right: 4px solid #6D010C;
    border-top-left-radius: 5px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

`

// ---------- INPUTS ----------

export const InputContainer = styled.div`
position: relative;
margin-bottom: 20px;
`

export const InputLabel = styled.label`
display: flex;
align-items: center;
cursor: pointer;
`

export const InputIconContainer = styled.span`
position: absolute;
left: 14px;
& > img {
    opacity: 0.5;
}
`

export const InputForm = styled.input`
width: 100%;
background: #F8F8F8;
box-shadow: inset 0px 4.11676px 16.467px #EEEEEE;
border-radius: 5px;
border: none;
padding: 14px 20px 14px 35px;
`

export const CheckboxTitle = styled.p`
font-family: ${({ theme }) => theme.fonts.basic};
font-style: ${({ theme }) => theme.fontStyle.normal};
font-weight: ${({ theme }) => theme.fontWeight.bold};
font-size: 14px;
line-height: 150%;
color: ${({ theme }) => theme.palette.darkGrey};
`

export const CheckboxContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

export const Checkbox = styled.input.attrs({
    type: "checkbox"
})`
`

export const CheckboxLabel = styled.label`
font-family: ${({ theme }) => theme.fonts.basic};
font-style: ${({ theme }) => theme.fontStyle.normal};
font-weight: ${({ theme }) => theme.fontWeight.reqular};
font-size: 14px;
line-height: 150%;
color: ${({ theme }) => theme.palette.darkGrey};
opacity: 0.8;
margin-left: 7px;
`

export const ButtonForm = styled(Button)`
background-color: ${({ theme }) => theme.palette.active};
padding: 20px;
&:disabled {
    background-color: ${({ theme }) => theme.palette.grey};
}
`

export const FormPolicyContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 20px;
`

export const TurnButton = styled.div`
width: 35px;
height: 21px;
background-color: ${({ theme }) => theme.palette.active};
border-radius: 30px;
padding: 2px;
cursor: pointer;
`

interface ITurn {
    turn: string;
}

export const RoundButton = styled.div<ITurn>`
width: 18px;
height: 17px;
background-color: ${({ theme, turn }) => turn === "true" ? "#10d304" : theme.palette.white};
border-radius: 50%;
margin-left: ${props => props.turn === "true" ? "auto" : "none"};
`

export const AcceptPolicyText = styled.p`
font-family: ${({ theme }) => theme.fonts.basic};
font-style: ${({ theme }) => theme.fontStyle.normal};
font-weight: ${({ theme }) => theme.fontWeight.reqular};
font-size: 11px;
line-height: 150%;
color: ${({ theme }) => theme.palette.darkGrey};
`

export const AcceptPolicyLink = styled(Link)`
font-family: ${({ theme }) => theme.fonts.basic};
font-style: ${({ theme }) => theme.fontStyle.normal};
font-weight: ${({ theme }) => theme.fontWeight.reqular};
font-size: 11px;
line-height: 150%;
color: ${({ theme }) => theme.palette.darkGrey};
margin-left: 4px;
text-decoration: underline;
`

export const ErrorMessage = styled.p` 
 position: absolute;
  color: ${({ theme }) => theme.palette.active};
  font-size: 12px;
  margin-top: 3px;
  font-family: ${({ theme }) => theme.fonts.basic};
  font-weight:  ${({ theme }) => theme.fontWeight.reqular};
  font-style: ${({ theme }) => theme.fontStyle.normal};
`


