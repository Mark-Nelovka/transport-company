import FormTest from "./Form";
import { Container } from "../../styles/container.styled";
import {
  HeroSection,
  HeroContainer,
  TitleContainer,
  NameCompany,
  Title,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroContainer>
          <TitleContainer>
            <NameCompany>D&D United Corp.</NameCompany>
            <Title>
              Transportion <br /> and Freight Services <br /> in Chicago, Il
            </Title>
          </TitleContainer>
          <FormTest />
        </HeroContainer>
      </Container>
    </HeroSection>
  );
};
