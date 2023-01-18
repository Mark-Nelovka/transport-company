import { Hero } from "../../../Home";
import aboutHero from "../../../../images/about/aboutHero.png";
import { useLocation } from "react-router-dom";
import { Container } from "../../../../styles/container.styled";
import * as S from "./DetBlog.styled";
import {
  DescriptionText,
  DescriptionTextBold,
} from "../../../Home/Feedback/Feedback.styled";

export const DetailsBlog = () => {
  const { state } = useLocation();

  return (
    <>
      <Hero showElements={false} background={aboutHero} title={state.title} />
      <S.DetailsSection>
        <S.DetTitle>{state.title}</S.DetTitle>
        <S.DetImageContainer>
          <S.DetImage src={state.image} alt="Image" />
        </S.DetImageContainer>
        <Container>
          <S.DetTextContainer>
            <DescriptionTextBold>
              Trucking remains one of the best ways to earn money. For many
              truck drivers, it allows them to travel across the country and
              take in new sights. Few office jobs offer the same kind of
              adventure. At D&D United Corp, we offer high-quality trucking
              services to a myriad of clients. We want you to join us as a
              driver. Here are some of the benefits and reasons why you should
              join our team.
            </DescriptionTextBold>
            <DescriptionTextBold>We Offer Competitive Pay</DescriptionTextBold>
            <DescriptionText>
              While a job is always more than just a paycheck, we know that
              earning an income is important. At D&D United Corp, we offer
              competitive pay for all of our drivers. Since our company was
              founded and operated by a truck driver, we understand just what
              your time is worth. For those who want to start working their way
              towards financial freedom, we can offer you the pay to get
              started. All you need to do is drive.
            </DescriptionText>
            <DescriptionTextBold>We Offer Different Hours</DescriptionTextBold>
            <DescriptionText>
              Not everyone enjoys working 9 to 5. Some people work better in the
              graveyard shift or during the afternoons. We try to accommodate
              everyone's schedule. That's why we have both full and part-time
              positions available. If you want to just do a bit of trucking on
              the side of your current job, then we're eager to accept you. For
              those who are just starting out and want to try for a full
              position, we're happy to show you the ropes and get you started
              with trucking immediately. Trucking veterans are most assuredly
              welcome as well. With a flexible schedule, you can work exactly
              how much you need to.
            </DescriptionText>
            <DescriptionTextBold>
              New Drivers and Veterans are Welcome
            </DescriptionTextBold>
            <DescriptionText>
              While every business always loves to have experienced workers, we
              understand that everyone has to start somewhere. Luckily, D&D
              United Corp is owned and operated by those who have a long history
              of experience in the field. New drivers can learn from that
              experience quickly and receive the training that they need to be
              high-quality drivers. We're a great company to start out with and
              hone your skills. We're also a great place for veteran truck
              drivers to join. When you want to work with peers who have worked
              in the industry for as long as you have, then we're the company to
              join. You'll find a similar set of peers just like you waiting to
              swap stories and welcome you to the family.
            </DescriptionText>
            <DescriptionTextBold>
              We Offer Numerous Benefits
            </DescriptionTextBold>
            <DescriptionText>
              While pay and a great working environment are wonderful, benefits
              are just as important. Our truck drivers can receive numerous
              benefits to make their lives just that much easier. To see what
              benefits you can receive, give us a call.
            </DescriptionText>
            <DescriptionTextBold>Apply with Our Team Today</DescriptionTextBold>
            <DescriptionText>
              If you want to try out a career that's totally different from a
              standard 9 to 5 job, then you might want to consider trucking.
              You'll receive great pay, benefits, and be able to work a schedule
              of your choosing. Start working with a great company and welcoming
              staff by applying now.
            </DescriptionText>
            <DescriptionTextBold>
              Click <S.DetLink to="/transport-company">Here</S.DetLink> for our
              application form!
            </DescriptionTextBold>
          </S.DetTextContainer>
        </Container>
      </S.DetailsSection>
    </>
  );
};
