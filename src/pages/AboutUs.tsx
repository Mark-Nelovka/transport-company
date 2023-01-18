import { About } from "../general";
import { Hero } from "../components/Home";
import { ServiceList } from "../general";
import bgHero from "../images/about/aboutHero.png";
import bgAbout from "../images/about/aboutCub.png";
import { Container } from "../styles/container.styled";

function AboutUsPage() {
  return (
    <section>
      <Hero showElements={false} title="About Us" background={bgHero} />
      <Container>
        <section style={{ paddingTop: "73px", paddingBottom: "73px" }}>
          <ServiceList />
        </section>
      </Container>
      <About
        background={bgAbout}
        title="About Us"
        textLeft={[
          "D&D United Corp Services Inc is a transportation company based in Illinois that was opened in 2013 by Sergiu Tintiuc, a long-time veteran of the trucking industry. Mr. Tintiuc started the company as the owner/operator. For the first two and a half years of its existence, he worked with his own truck, a 2006 Freightliner Century.",
          "As the company grew and working alone became no longer feasible, Mr. Tintiuc decided to buy additional trucks and hire new drivers to operate them. As things stand today, D&D United Corp Services now has 40 trucks and 45 trailers. The vast majority of them are brand new 2019 models.",
        ]}
        textRight={[
          "In the early days, the company operated with flat beds exclusively. Since that time, we have significantly diversified our range of equipment. As of 2019, we now have dry vans and Conestoga trailers. This gives us the extra edge we need to handle any situation, no matter how big or small.",
          "Our mission is to give you the best transportation service on the North American continent. Feel free to get in touch with us today. We'll be glad of any opportunity to share with you what we can do on behalf of your business.",
        ]}
      />
    </section>
  );
}

export default AboutUsPage;
