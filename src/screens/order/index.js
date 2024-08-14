import React, { useEffect } from "react";
import { CardList, Container, EmptyContainer } from "../cart/styles";
import { CardContainer, PriceContainer } from "../cart/components";
import { useStore } from "store";
import { OrderTitle, ParentContainer } from "./styles";
import { TbMoodEmpty } from "react-icons/tb";
import API from "utils/api";

const Orders = () => {
  const {
    state: { orders },
    actions: { updateOrders },
  } = useStore();

  async function getOrders() {
    const temp = await API("orders");
    await updateOrders(temp.data.reverse());
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      {orders && orders.length > 0 ? (
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
              <PriceContainer
                order={order}
                isOrder={true}
                coupon={order.coupon}
              />
            </Container>
          </ParentContainer>
        ))
      ) : (
        <EmptyContainer>
          <TbMoodEmpty size={24} color="#ff3f6c" />
          <p>No Orders Placed Yet!</p>
        </EmptyContainer>
      )}
    </>
  );
};

export default Orders;
