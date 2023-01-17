import { Container } from "../../styles/container.styled";
import phoneIcon from "../../images/svg/phone.svg";
import markerIcon from "../../images/svg/marker.svg";
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
      <S.BasicFooter>
        <Container>
          <S.BasicContainer>
            <S.BasicContentContainer>
              <S.BasicContentTitle>About D&D United Corp</S.BasicContentTitle>
              <S.BasicContentText>
                Our goal at D&D United Corp is to give you the safest, most
                efficient, and most affordable shipping experience. We offer a
                wide range of transportation options, including flatbed, dry
                van, and Conestoga.
              </S.BasicContentText>
            </S.BasicContentContainer>
            <S.BasicContentContainer>
              <S.BasicContentTitle>Have Questions?</S.BasicContentTitle>
              <S.BasicContactsContainer>
                <S.BasicIconContainer>
                  <S.BasicIcon src={phoneIcon} alt="Footer phone icon" />
                </S.BasicIconContainer>
                <S.BasicLinksContainer>
                  <S.BasicButtonLinks>
                    <S.BasicLink href="tel:(847) 262-9800">
                      <S.BasicLinkText>Tel: </S.BasicLinkText>
                      (847) 262-9800
                    </S.BasicLink>
                  </S.BasicButtonLinks>
                  <S.BasicButtonLinks>
                    <S.BasicLink href="tel:(847) 262-9800">
                      <S.BasicLinkText>Fax: </S.BasicLinkText>
                      (847) 262-9801
                    </S.BasicLink>
                  </S.BasicButtonLinks>
                  <S.BasicButtonLinks>
                    <S.BasicLink href="mailto:D-dunitedcorp@outlook.com">
                      <S.BasicLinkText>eMail: </S.BasicLinkText>
                      D-dunitedcorp@outlook.com
                    </S.BasicLink>
                  </S.BasicButtonLinks>
                  <S.BasicButtonLinks>
                    <S.BasicLink href="/transport-company">
                      <S.BasicLinkText>Web: </S.BasicLinkText>
                      D&D United Corp
                    </S.BasicLink>
                  </S.BasicButtonLinks>
                </S.BasicLinksContainer>
              </S.BasicContactsContainer>
            </S.BasicContentContainer>
            <S.BasicContentContainer>
              <S.BasicContentTitle>Have Questions?</S.BasicContentTitle>
              <S.BasicContactsContainer>
                <S.BasicIconContainer>
                  <S.BasicIcon src={markerIcon} alt="Marker map" />
                </S.BasicIconContainer>
                <S.BasicLinksContainer>
                  <S.BasicButtonLinks>
                    <S.BasicLink href="/transport-company">
                      D&D United Corp
                    </S.BasicLink>
                  </S.BasicButtonLinks>
                  <S.BasicMarkerText>16830 Chicago Ave</S.BasicMarkerText>
                  <S.BasicMarkerText>Lansing, IL 60438</S.BasicMarkerText>
                  <S.BasicMarkerText>U.S.A.</S.BasicMarkerText>
                </S.BasicLinksContainer>
              </S.BasicContactsContainer>
            </S.BasicContentContainer>
          </S.BasicContainer>
        </Container>
      </S.BasicFooter>
    </footer>
  );
};
