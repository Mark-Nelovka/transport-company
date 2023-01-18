import FormTest from "./Form";
import { Container } from "../../styles/container.styled";
import {
  HeroSection,
  HeroContainer,
  TitleContainer,
  NameCompany,
  Title,
} from "./Hero.styled";

interface IHero {
  title: string;
  showElements: boolean;
  background: string;
}

export const Hero = ({ title, showElements, background }: IHero) => {
  return (
    <HeroSection showElements={showElements} background={background}>
      <Container>
        <HeroContainer showElements={showElements}>
          <TitleContainer>
            {showElements && <NameCompany>D&D United Corp.</NameCompany>}
            <Title showElements={showElements}>{title}</Title>
          </TitleContainer>
          {showElements && <FormTest />}
        </HeroContainer>
      </Container>
    </HeroSection>
  );
};
