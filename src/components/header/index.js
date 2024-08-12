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
  Item,
  ItemText,
  ItemList,
  ProfileImg,
} from "./styles";
import { BsHandbag } from "react-icons/bs";

import Logo from "assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHistory } from "react-icons/ai";

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

const NAV_ITEM = [
  {
    text: "Sai",
    icon: (
      <ProfileImg
        src="https://avatars.githubusercontent.com/u/43849911?v=4"
        alt="img"
      />
    ),
    link: "/",
  },
  {
    text: "Orders",
    icon: <AiOutlineHistory size={24} />,
    link: "/orders",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const ishome = pathname === "/";

  function handleClick(e) {
    e.preventDefault();
    navigate("/checkout/cart");
  }

  return (
    <Container ishome={+ishome}>
      <LabelLeftContainer>
        <LogoImg onClick={() => navigate("/")} alt="img" src={Logo} />
        {ishome && (
          <LabelsContainer>
            {LABEL_DATA.map((data, _) => (
              <Label bgcolor={data.borderColor} key={data.text}>
                {data.text}
              </Label>
            ))}
          </LabelsContainer>
        )}
      </LabelLeftContainer>
      {ishome ? (
        <ItemList>
          {NAV_ITEM.map((item, _) => (
            <Item key={item.text}>
              {item.icon}
              <ItemText>{item.text}</ItemText>
            </Item>
          ))}
          <Item>
            <BadgeContainer onClick={handleClick}>
              <BsHandbag size={22} color="#282c3f" />
              <Badge>2 </Badge>
            </BadgeContainer>
            <ItemText>Bag</ItemText>
          </Item>
        </ItemList>
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
