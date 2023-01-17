import { Container } from "../../styles/container.styled";
import phoneIcon from "../../images/svg/phone.svg";
import facebookIcon from "../../images/svg/facebook.svg";
import * as S from "./Footer.styled";

export const Footer = () => {
  return (
    <footer>
      <S.FooterTop>
        <Container>
          <S.TopContainer>
            <S.TopCall>For More Information, Please Call:</S.TopCall>
            <S.TopPhoneButton>
              <S.TopPhone href={`tel:(847) 262-9800`}>
                <S.TopPhoneIconContainer>
                  <S.TopPhoneIcon src={phoneIcon} alt="Footer phone icon" />
                </S.TopPhoneIconContainer>
                (847) 262-9800
              </S.TopPhone>
            </S.TopPhoneButton>
            <S.TopSocialButton>
              <S.TopSocialLink to="https://www.facebook.com/">
                <S.TopFacebookIcon
                  src={facebookIcon}
                  alt="Footer facebook icon"
                />
              </S.TopSocialLink>
            </S.TopSocialButton>
            <S.TopButton>
              <S.TopButtonLink to="/transport-company/contacts">
                CONTACT US
              </S.TopButtonLink>
            </S.TopButton>
          </S.TopContainer>
        </Container>
      </S.FooterTop>
    </footer>
  );
};
