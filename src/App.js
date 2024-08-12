import React, { useEffect } from "react";
import { Banner } from "components";
import { Header } from "components";
import { Route, Routes } from "react-router-dom";
import { Home, Cart } from "screens";
import { Container } from "./styles";
import { useStore } from "store";
import API from "utils/api";
import { updateUserAtDB } from "utils/dbUtils";
import { USER_ID } from "constants";
import { updateItemsAtDB } from "utils/dbUtils";

const App = () => {
  const {
    actions: { updateUser, updateItems },
  } = useStore();

  async function fetchUser() {
    try {
      const res = await API.get(`users.json?id=${USER_ID}`);
      const data = res.data[0];
      await updateUser(data);
      await updateUserAtDB(data);
    } catch (e) {
      console.error("Error:", e);
    }
  }

  async function fetchItems() {
    try {
      const res = await API.get("items.json");
      const data = res.data;
      await updateItems(data);
      await updateItemsAtDB(data);
    } catch (e) {
      console.error("Error:", e);
    }
  }

  useEffect(() => {
    Promise.all([fetchUser(), fetchItems()]);
  }, []);

  return (
    <Container>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout/cart" element={<Cart />} />
      </Routes>
    </Container>
  );
};

export default App;
