export const initialState = {
  basket: [
    {
      id: "12422342",
      title:
        "2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8 core CPU and 14 core GPU, 16GB RAM, 512GB SSD) - Space Grey - English",
      price: 2499.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SL1500_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding the item to the basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // Logic for removing the item to the basket

      // Cloning the basket
      let newBasket = [...state.basket];

      // Checkiing if the item exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // Item exists in basket, Remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id:${action.id}) as it is not in the basket`
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
