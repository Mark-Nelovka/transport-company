import { Hero } from "../../Home";
import BG from "../../../images/about/aboutHero.png";
import blogImage from "../../../images/about/aboutBlog.png";
import { Container } from "../../../styles/container.styled";
import { ServiceList } from "../../../general";
import * as S from "./Blog.styled";
import { getDynamicPath } from "../../../helpers/getNavDynamicPath";

export const Blog = () => {
  return (
    <>
      <Hero title="Blog" showElements={false} background={BG} />
      <Container>
        <div style={{ paddingTop: "73px", paddingBottom: "73px" }}>
          <ServiceList />
        </div>
      </Container>
      <S.BlogSection>
        <Container>
          <S.Title>Here You Will Find Our Latest Blog Posts!</S.Title>
          <S.ContentContainer>
            <S.Date>June 13, 2020</S.Date>
            <div>
              <S.BlogImage src={blogImage} alt="Blog image" />
            </div>
            <S.DescriptionContainer>
              <S.DescriptionTitle>
                Start Your Trucking Career Today
              </S.DescriptionTitle>
              <S.DescriptionText>
                Trucking remains one of the best ways to earn money. For many
                truck drivers, it allows them to […]
              </S.DescriptionText>
              <S.DescriptionButtonContainer>
                <S.DescriptionButton>
                  <S.DescriptionLink
                    to={`/transport-company/about/blog/${getDynamicPath(
                      "Start Your Trucking Career Today"
                    )}`}
                    state={{
                      title: "Start Your Trucking Career Today",
                      image: blogImage,
                    }}
                  >
                    Read more
                  </S.DescriptionLink>
                </S.DescriptionButton>
              </S.DescriptionButtonContainer>
            </S.DescriptionContainer>
          </S.ContentContainer>
        </Container>
      </S.BlogSection>
    </>
  );
};
