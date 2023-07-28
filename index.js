const { createStore, combineReducers } = require("redux");
//Products Constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

//Cart Constants
const GET_CARTS = "GET_CARTS";
const ADD_CART = "ADD_CART";

//creating Products state
const productsInitialState = {
  products: ["sugar", "salt"],
  numOfProducts: 2,
};

//creating Cart State
const cartInitialState = {
  carts: ["pen"],
  numOfCart: 1,
};

//creating Products Action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

//creating Cart Action
const getCarts = () => {
  return {
    type: GET_CARTS,
  };
};

const addCart = (cart) => {
  return {
    type: ADD_CART,
    payload: cart,
  };
};

//Product Reducer
const productReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numOfProducts: state.numOfProducts + 1,
      };

    default:
      return state;
  }
};

//creating cart reducer
const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case GET_CARTS:
      return {
        ...state,
      };

    case ADD_CART:
      return {
        carts: [...state.carts, action.payload],
        numOfCart: state.numOfCart + 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

//creating Store
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("ball"));
store.dispatch(getCarts());
store.dispatch(addCart("book"));
