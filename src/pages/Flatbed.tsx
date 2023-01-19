import { Hero } from "../components/Home";
import { About, ServiceList } from "../general";
import { Container } from "../styles/container.styled";
import bgHero from "../images/about/aboutHero.png";
import BG from "../images/flatbed/image1.png";

function FlatbedPage() {
  return (
    <>
      <Hero showElements={false} title="Flatbed" background={bgHero} />
      <Container>
        <div style={{ paddingTop: "73px", paddingBottom: "73px" }}>
          <ServiceList />
        </div>
      </Container>
      <About
        title="Flatbed"
        textLeft={[
          "D&D United Corp began as a company with a very few flatbed trailers to our name. Since that time, we have expanded our services with a wide variety of other styles. However, we certainly have not forgotten our roots.",
          "If you are interested in getting top quality flatbed trailers to haul your goods across the country, we can certainly oblige. And we can do it for a low price that few of our so-called competitors can ever hope to match, much less beat. We realize that all of our customers are bound to have specific needs when it comes to shipping.",
        ]}
        textRight={[
          "Your goods may require a special method of delivery that may not always be fully compatible with standard dry van or flatbed trailers. We are fully equipped to offer you a wide variety of alternative solutions when it comes to trailer styles.",
          "Our staff of experienced and knowledgeable drivers and service experts is always ready to accommodate the needs of our customers. If you prefer the flatbed style of trailer, we can offer you the best and most up to date styles currently available on the market. Let us know what you need and we will be happy to give you more details on what we can do to satisfy you.  ",
        ]}
        background={BG}
      />
    </>
  );
}

export default FlatbedPage;
