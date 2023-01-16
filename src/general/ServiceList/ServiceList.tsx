import check from "../../images/svg/check.svg";
import cool from "../../images/svg/cool.svg";
import settings from "../../images/svg/settings.svg";
import fin from "../../images/svg/fin.svg";
import star from "../../images/svg/star.svg";
import * as S from "./ServicesList.styled";

interface IItemProps {
  src: string;
  alt: string;
  title: string;
  text: string;
}

const ListItem = ({ src, alt, title, text }: IItemProps) => {
  return (
    <S.Item>
      <span>
        <img src={src} alt={alt} />
      </span>
      <S.ItemTitle>{title}</S.ItemTitle>
      <S.ItemText>{text}</S.ItemText>
    </S.Item>
  );
};

export const ServiceList = () => {
  return (
    <S.List>
      <ListItem
        src={check}
        alt="check icon"
        title="Transportation"
        text="Getting the very best commercial trucking services for your goods should never be a hassle."
      />
      <ListItem
        src={cool}
        alt="cool icon"
        title="Lease and Finance"
        text="Let us know what your needs are and
we can assist you to get a fair offer 
that will more than satisfy you."
      />
      <ListItem
        src={settings}
        alt="settings icon"
        title="Careers"
        text="We are always on the lookout for friendly and knowledge personnel to meet the needs of our customers."
      />
      <ListItem
        src={fin}
        alt="finance icon"
        title="Always The Best Price"
        text="At D&D United Corp we will offer you 
the safest, most efficient, and most affordable shipping experience."
      />
      <ListItem
        src={star}
        alt="star icon"
        title="Years Of Experience"
        text="Our mission is to give you the best transportation service on the North American continent."
      />
    </S.List>
  );
};
