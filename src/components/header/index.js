import React from "react";
import {
  Container,
  LogoImg,
  Badge,
  BadgeContainer,
  LabelsContainer,
  Label,
  LabelLeftContainer,
} from "./styles";
import { BsHandbag } from "react-icons/bs";

import Logo from "assets/logo.svg";

const LABEL_DATA = [
  {
    text: "Men",
    borderColor: "#ee5f73",
  },
  {
    text: "Women",
    borderColor: "#fb56c1",
  },
  {
    text: "Kids",
    borderColor: "#f26a10",
  },
  {
    text: "Home & Living",
    borderColor: "#f2c210",
  },
  {
    text: "Beauty",
    borderColor: "#0db7af",
  },
  {
    text: "Studio",
    borderColor: "#ff3f6c",
  },
];

const Header = () => {
  return (
    <Container>
      <LabelLeftContainer>
        <LogoImg alt="img" src={Logo} />
        <LabelsContainer>
          {LABEL_DATA.map((data, _) => (
            <Label bgcolor={data.borderColor} key={data.text}>
              {data.text}
            </Label>
          ))}
        </LabelsContainer>
      </LabelLeftContainer>
      <BadgeContainer>
        <BsHandbag size={22} color="#282c3f" />
        <Badge>1 </Badge>
      </BadgeContainer>
    </Container>
  );
};

export default Header;
