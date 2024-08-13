import React, { useEffect } from "react";
import { Banner } from "components";
import { Header } from "components";
import { Route, Routes } from "react-router-dom";
import { Home, Cart, Orders } from "screens";
import { Container } from "./styles";
import { useStore } from "store";
import API from "utils/api";
import { updateUserAtDB } from "utils/dbUtils";
import { USER_ID } from "constants/index";
import { updateItemsAtDB } from "utils/dbUtils";
import { getCartFromDB } from "utils/dbUtils";
import { updateCouponsAtDB } from "utils/dbUtils";
import { setCookieIfNotExists } from "utils/cookie";

const App = () => {
  const {
    actions: { updateUser, updateItems, updateCart, updateCoupons },
  } = useStore();

  async function fetchUser() {
    try {
      const res = await API.post("user", {
        id: USER_ID,
      });
      const data = res.data;
      await updateUser(data);
      await updateUserAtDB(data);
    } catch (e) {
      console.error("Error:", e);
    }
  }

  async function fetchItems() {
    try {
      const res = await API.get("products");
      const data = res.data;
      await updateItems(data);
      await updateItemsAtDB(data);
    } catch (e) {
      console.error("Error:", e);
    }
  }

  async function fetchCartItems() {
    try {
      const data = await getCartFromDB();
      await updateCart(data);
    } catch (e) {
      console.error("Error:", e);
    }
  }

  async function fetchCartItems() {
    try {
      const data = await getCartFromDB();
      await updateCart(data);
    } catch (e) {
      console.error("Error:", e);
    }
  }

  async function fetchCoupons() {
    try {
      const res = await API.get("coupons");
      const data = res.data;
      await updateCoupons(data);
      await updateCouponsAtDB(data);
    } catch (e) {
      console.error("Error:", e);
    }
  }

  useEffect(() => {
    setCookieIfNotExists();
    Promise.all([fetchUser(), fetchItems(), fetchCartItems(), fetchCoupons()]);
  }, []);

  return (
    <Container>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout/cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </Container>
  );
};

export default App;
