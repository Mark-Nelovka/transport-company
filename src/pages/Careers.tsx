import { Hero } from "../components/Home";
import { About, ServiceList } from "../general";
import { Container } from "../styles/container.styled";
import bgHero from "../images/about/aboutHero.png";
import BG from "../images/careers/image1.png";

function CareersPage() {
  return (
    <>
      <Hero showElements={false} title="Careers" background={bgHero} />
      <Container>
        <div style={{ paddingTop: "73px", paddingBottom: "73px" }}>
          <ServiceList />
        </div>
      </Container>
      <About
        title="Careers"
        textLeft={[
          "We are always on the lookout for friendly and knowledgeable service personnel to meet the needs of our customers. If you would like to apply to work for D&D United Corp, we welcome your inquiries. We have a wide variety of openings in nearly every department.",
          "D&D United Corp is currently looking to hire new owner-operators who are fully licensed and ready to take on an exciting new set of challenges. We can work with you to make sure that you have all of the necessary permits and insurance qualifications to get started on making money with us right away.",
          "Our company values the services of qualified company drivers who desire to work with us part or full time. We offer excellent pay and benefits along with plenty of on the job training and experience.",
        ]}
        textRight={[
          "Please feel free to get in touch with us today in order to learn more about the opportunities we are prepared to extend to you.",
          "Not every employment opportunity at our company involves driving one of our big rigs. D&D United Corp is also looking for qualified personnel who can handle our dispatch requirements. If you have experience in this area, don't hesitate to contact us. We can always use someone with experience in this crucial area. We offer a high rate of pay along with excellent hours and job benefits.",
          "We are also ready to employ personnel in an office assistant capacity. As you can no doubt imagine, there is plenty of paperwork to be filed and details to be kept track of. If you possess office administrative or secretarial skills, don't hesitate to contact us for full employment details.",
        ]}
        buttons={true}
        background={BG}
      />
    </>
  );
}

export default CareersPage;
