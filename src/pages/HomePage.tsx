import { Hero, Advantage, Service, Feedback } from "../components/Home";
import background from "../images/home/homeHero.png";

function HomePage() {
  return (
    <>
      <Hero
        background={background}
        showElements={true}
        title="Transportion and Freight Services in Chicago, Il"
      />
      <Advantage />
      <Service />
      <Feedback />
    </>
  );
}

export default HomePage;
