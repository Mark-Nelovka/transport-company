import { Container } from "../../styles/container.styled";
import { Button } from "../Button/Button.styled";
import * as S from "./About.styled";

interface IAboutProps {
  title: string;
  textLeft: string[];
  textRight: string[];
  background: string;
  buttons?: boolean;
}

export const About = ({
  title,
  textLeft,
  textRight,
  background,
  buttons,
}: IAboutProps) => {
  return (
    <>
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
          {buttons && (
            <S.ButtonContainer>
              <Button>
                <S.ButtonLink to="/transport-company/careers/driver-position">
                  APPLY FOR A DRIVER POSITION
                </S.ButtonLink>
              </Button>
              <Button>
                <S.ButtonLink to="/transport-company/careers/office-position">
                  APPLY FOR AN OFFICE POSITION
                </S.ButtonLink>
              </Button>
            </S.ButtonContainer>
          )}
        </Container>
      </S.AboutSection>
      <S.Background background={background}></S.Background>
    </>
  );
};
