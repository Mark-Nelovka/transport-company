import { Container } from "../../../styles/container.styled";
import { ServiceList } from "../../../general";
import * as S from "./Service.styled";

export const Service = () => {
  return (
    <S.ServiceSection>
      <Container>
        <S.Title>We Offer Safe, Dependable, and Affordable Service</S.Title>
        <S.Description>
          Getting the very best commercial trucking services for your goods
          should never be a hassle. We will work with you to make sure that all
          of the best options for shipping your load in a safe and
          cost-effective manner will be explored.
        </S.Description>
        <ServiceList />
      </Container>
    </S.ServiceSection>
  );
};
