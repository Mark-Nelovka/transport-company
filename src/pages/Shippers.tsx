import { Hero } from "../components/Home";
import { Container } from "../styles/container.styled";
import bgHero from "../images/about/aboutHero.png";
import BG from "../images/shippers/shippers.png";
import { About, ServiceList } from "../general";

function ShippersPage() {
  return (
    <>
      <Hero showElements={false} title="Shippers" background={bgHero} />
      <Container>
        <div style={{ paddingTop: "73px", paddingBottom: "73px" }}>
          <ServiceList />
        </div>
      </Container>
      <About
        title="Shippers"
        textLeft={[
          "The first rule of being a competent business owner is knowing your limitations. As much as you would like to be there for every stage of the shipping and delivery process, it simply isn't possible. The next best alternative is to make sure that your goods are always in the hands of an expert who will do their best to ensure that they reach their destination in perfect condition and with plenty of time to spare.",
          "When it comes to shipping your goods across the country, you need to know that your merchandise is in safe hands. We are experienced professionals in every aspect of shipping. All of our drivers are insured as are the truck and the load itself. We take the utmost care in making sure that your goods arrive in a safe and timely manner to their eventual destination.",
          "We likewise take the utmost care in making sure that you get the best possible deal for our services.",
        ]}
        textRight={[
          "We will work with you to make sure that you fully understand the rates that are involved. There are never any hidden fees or other nasty surprises.All of our charges are stated clearly and transparently on the bill. We will answer any questions you have on this matter well ahead of time so that you will know exactly what kind of services you are getting, for how long in duration, and just how much you will be paying in the end. This is part of our pledge of honest service to our valued customers.",
          "If you are searching for the ultimate shipping service in the United States, get in touch with us today. We are prepared to offer you the best rates and most efficient service for all of your shipping needs. If you have any questions, comments, or concerns, we will be glad to hear them.",
          "Contact us here at our official site for more info concerning our specific rates and services.",
        ]}
        background={BG}
      />
    </>
  );
}

export default ShippersPage;
