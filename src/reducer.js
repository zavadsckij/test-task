let initialState = {
  products: [
    {
      id: 1,
      title: "Шампунь",
      img: "card-img.jpg",
      img2: "card-img2.jpg",
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
      new: true,
      price: 200,
      volume: 100,
      colors: ["золотой", "голубой", "желтый", "зеленый"],
      isCompare: false,
    },
    {
      id: 2,
      title: "Шампунь",
      img: "card2-img.jpg",
      img2: "card2-img2.jpg",
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
      new: true,
      price: 200,
      volume: 100,
      colors: ["золотой", "голубой", "желтый", "зеленый"],
      isCompare: false,
    },
    {
      id: 3,
      title: "Шампунь",
      img: "card3-img.jpg",
      img2: "card3-img2.jpg",
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
      new: true,
      price: 200,
      volume: 100,
      colors: ["золотой", "голубой", "желтый", "зеленый"],
      isCompare: false,
    },
  ],
  basket: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "SET__COMPARE") {
    let newProducts = [...state.products];
    newProducts.forEach((product) => {
      if (product.id === action.id) {
        product.isCompare = action.isCompare;
      }
    });
    return {
      ...state,
      products: newProducts,
    };
  }
  if (action.type === "ADD_TO_BASKET") {
    return {
      ...state,
      basket: [...state.basket, action.basketItem],
    };
  }
  if (action.type === "REMOVE_FROM_BASKET") {
    return {
      ...state,
      basket: [
        ...state.basket.filter((item) => {
          return item.id !== action.id;
        }),
      ],
    };
  }

  return state;
};

export const setCompare = (id, isCompare) => ({
  type: "SET__COMPARE",
  id,
  isCompare,
});
export const addToBasket = (basketItem) => ({
  type: "ADD_TO_BASKET",
  basketItem,
});
export const removeFromBasket = (id) => ({ type: "REMOVE_FROM_BASKET", id });

export default reducer;
