import { Container } from "../../../styles/container.styled";
import * as S from "./About.styled";

interface IAboutProps {
  title: string;
  textLeft: string[];
  textRight: string[];
}

export const About = ({ title, textLeft, textRight }: IAboutProps) => {
  return (
    <S.AboutSection>
      <S.Title>{title}</S.Title>
      <Container>
        <S.ContentContainer>
          <S.TextContainer>
            {textLeft.map((text, inx) => {
              return <S.Text key={inx}>{text}</S.Text>;
            })}
          </S.TextContainer>
          <S.TextContainer>
            {textRight.map((text, inx) => {
              return <S.Text key={inx}>{text}</S.Text>;
            })}
          </S.TextContainer>
        </S.ContentContainer>
      </Container>
    </S.AboutSection>
  );
};
