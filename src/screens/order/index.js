import React, { useEffect } from "react";
import { CardList, Container } from "../cart/styles";
import { CardContainer, PriceContainer } from "../cart/components";
import { useStore } from "store";
import { getOrdersFromDB } from "utils/dbUtils";
import { OrderTitle, ParentContainer } from "./styles";

const Orders = () => {
  const {
    state: { orders },
    actions: { updateOrders },
  } = useStore();

  async function getOrders() {
    const temp = await getOrdersFromDB();
    await updateOrders(temp);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      {orders &&
        orders.map((order, key) => (
          <ParentContainer key={order.id}>
            <OrderTitle>
              <b>
                Order ({+key + 1}/{orders.length})
              </b>
              : {order.id}
            </OrderTitle>
            <Container isorder={1}>
              <CardList isorder={1}>
                {order.cart.map((item, _) => (
                  <CardContainer isOrder={true} item={item} key={item.id} />
                ))}
              </CardList>
              <PriceContainer order={order} isOrder={true} coupon={order.coupon} />
            </Container>
          </ParentContainer>
        ))}
    </>
  );
};

export default Orders;
