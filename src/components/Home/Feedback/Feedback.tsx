import { Container } from "../../../styles/container.styled";
import man from "../../../images/svg/manForm.svg";
import * as S from "./Feedback.styled";

export const Feedback = () => {
  return (
    <S.FeedbackSection>
      <S.ConfetyImageContainer>
        <Container>
          <S.ContentContainer>
            <S.DescriptionContainer>
              <S.DescriptionTitle>What makes us the best</S.DescriptionTitle>
              <S.DescriptionTextBold>
                If you are searching for the ultimate shipping service in the
                United States, get in touch with us today. We are prepared to
                offer you the best rates and most efficient service for all of
                your shipping needs. If you have any questions, comments, or
                concerns, we will be glad to hear them. Contact us here at our
                official site for more info concerning our specific rates and
                services.
              </S.DescriptionTextBold>
              <S.DescriptionText>
                We specialize in moving heavy cargo to all points in the nation.
                We understand that this type of freight can sometimes be
                extremely sensitive. We will do all in our power to make sure
                that your shipment reaches its destination safely.
              </S.DescriptionText>
              <S.DescriptionText>
                We also employ the highest possible safety and security
                standards to make sure that every load is delivered on time and
                in the optimum condition.
              </S.DescriptionText>
            </S.DescriptionContainer>
            <S.DescriptionContainer>
              <S.DescriptionTitle>What our clients said</S.DescriptionTitle>
              <S.DescriptionTextClients>
                What can I say from my 30 years altitude in the industry: Unique
                model of the business for drivers, Full Coverage in over 700
                nationwide service/repair facilities. Driver makes as owner
                without risk of unpredictable breakdown expenses. No normal wear
                repair expenses. They are hiring to retiring!
              </S.DescriptionTextClients>
              <S.AuthorContainer>
                <S.AuthorIcon src={man} alt="author icon" />
                <S.AuthorName>Eugene Polyakov</S.AuthorName>
              </S.AuthorContainer>
              <S.DescriptionTextClients>
                We have been using D&D United Corp for quite some time. The
                drivers are always on time and very professional. Their rates
                are the best in the industry. We will recommend them to anyone!
              </S.DescriptionTextClients>
              <S.AuthorContainer>
                <S.AuthorIcon src={man} alt="author icon" />
                <S.AuthorName>Kathy Willis</S.AuthorName>
              </S.AuthorContainer>
            </S.DescriptionContainer>
            <S.BgLogoContainer></S.BgLogoContainer>
          </S.ContentContainer>
        </Container>
      </S.ConfetyImageContainer>
    </S.FeedbackSection>
  );
};
