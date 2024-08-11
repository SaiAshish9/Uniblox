import React from "react";
import {
  Container,
  LogoImg,
  Badge,
  BadgeContainer,
  LabelsContainer,
  Label,
  LabelLeftContainer,
  SecureImgContainer,
  SecureImg,
  SecureText,
} from "./styles";
import { BsHandbag } from "react-icons/bs";

import Logo from "assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  function handleClick(e) {
    e.preventDefault();
    navigate("/checkout/cart");
  }

  return (
    <Container isHome={+isHome}>
      <LabelLeftContainer>
        <LogoImg onClick={() => navigate("/")} alt="img" src={Logo} />
        {isHome && (
          <LabelsContainer>
            {LABEL_DATA.map((data, _) => (
              <Label bgcolor={data.borderColor} key={data.text}>
                {data.text}
              </Label>
            ))}
          </LabelsContainer>
        )}
      </LabelLeftContainer>
      {isHome ? (
        <BadgeContainer onClick={handleClick}>
          <BsHandbag size={22} color="#282c3f" />
          <Badge>1 </Badge>
        </BadgeContainer>
      ) : (
        <SecureImgContainer>
          <SecureImg
            alt="img"
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
          />
          <SecureText>100% SECURE</SecureText>
        </SecureImgContainer>
      )}
    </Container>
  );
};

export default Header;
