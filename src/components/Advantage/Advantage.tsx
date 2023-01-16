import { Container } from "../../styles/container.styled";
import item from "../../images/home/homeList1.png";
import secondItem from "../../images/home/homeList2.png";
import itemThree from "../../images/home/homeList3.png";
import itemEmb from "../../images/home/homeEmbList1.png";
import secondItemEmb from "../../images/home/homeEmbList2.png";
import itemEmbThree from "../../images/home/homeEmbList3.png";
import * as S from "./Advantage.styled";

interface IListProps {
  srcEmb: string;
  altEmb: string;
  srcImg: string;
  altImg: string;
  title: string;
  text: string;
}

const List = ({ srcEmb, altEmb, srcImg, altImg, title, text }: IListProps) => {
  return (
    <S.ContentItem>
      <S.ContentItemEmblemContainer>
        <S.ContentItemEmblem src={srcEmb} alt={altEmb} />
      </S.ContentItemEmblemContainer>
      <img src={srcImg} alt={altImg} />
      <S.ContentItemTitle>{title}</S.ContentItemTitle>
      <S.ContentItemText>{text}</S.ContentItemText>
    </S.ContentItem>
  );
};

export const Advantage = () => {
  return (
    <S.AdvantageSection>
      <Container>
        <S.Title>Transportation and Freight Services Like No Other</S.Title>
        <S.ContentList>
          <List
            srcEmb={itemEmb}
            altEmb="emblem one"
            srcImg={item}
            altImg="item one"
            title="Conestoga"
            text="When you need the ultimate protection for a high-value load, there's a special kind of trailer for the job. Conestoga trailers use a tarp system that maximizes space for a wide variety of loads and ultimate weatherproofed protection."
          />
          <List
            srcEmb={secondItemEmb}
            altEmb="second emblem"
            srcImg={secondItem}
            altImg="second item"
            title="High Value"
            text="We understand that a significant amount of your goods will be high-value items that may need to be shipped to 
a tighter schedule. We are qualified to handle these goods in a timely and efficient fashion."
          />
          <List
            srcEmb={itemEmbThree}
            altEmb="three emblem"
            srcImg={itemThree}
            altImg="three item"
            title="Flatbed"
            text="If you are interested in getting top quality flatbed trailers to haul your goods across the country, we can certainly oblige. And we can do it for a low price that few of our so-called competitors can ever hope to match, much 
less beat."
          />
        </S.ContentList>
      </Container>
    </S.AdvantageSection>
  );
};
