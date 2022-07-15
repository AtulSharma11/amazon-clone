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
      return { state };
    default:
      return state;
  }
};

export default reducer;
