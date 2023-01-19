import { Hero } from "../components/Home";
import { About, ServiceList } from "../general";
import { Container } from "../styles/container.styled";
import bgHero from "../images/about/aboutHero.png";
import BG from "../images/finance/fin.png";

function FinancePage() {
  return (
    <>
      <Hero showElements={false} title=" Lease & Finance" background={bgHero} />
      <Container>
        <div style={{ paddingTop: "73px", paddingBottom: "73px" }}>
          <ServiceList />
        </div>
      </Container>
      <About
        title="We Offer Lease & Finance Options"
        textLeft={[
          "We understand that you may prefer to do the trucking yourself rather than leave it in the hands of someone else. If this is the case, we will be happy to work with you on leasing a truck of your own.",
          "If you would like to lease a truck for short or long term commercial use, we can help you. We offer a wide variety of leasing and financing programs. Let us know what your needs are and we can assist you to get a fair offer that will more than satisfy you.",
          "D&D United Corp recommends the Compass financing system to our customers who desire to lease one of our trucks for their own use.",
        ]}
        textRight={[
          "The Compass system is extremely easy to use. Once you apply and get approval, you can make payments via the web exactly in the same manner as using Paypal or an online banking system. This convenience makes it easy to finance your lease in a safe and convenient manner.",
          "We can work with you in any situation that you desire, from leasing short or long term to leasing to own. If you prefer to use the Pro Funding system, we can work with you in this area as well.",
          "Get in touch with us to learn more about our leasing options.",
        ]}
        background={BG}
      />
    </>
  );
}
export default FinancePage;
