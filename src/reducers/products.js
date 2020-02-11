import * as Types from "./../constants/actionType";
var initialState = [];
var findIndex = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};
const products = (state = initialState, action) => {
  var index = -1;
  var { id, product } = action;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case Types.DELETE_PRODUCT:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    case Types.ADD_PRODUCT:
      // state.push(products);
      return [...state,action.product];
    case Types.UPDATE_PRODUCT:
      index = findIndex(state, product.id); //không lấy id phía trên mà lấy id trên action.product
      state[index] = product;
      return [...state];
    default:
      return [...state];
  }
};
export default products;
