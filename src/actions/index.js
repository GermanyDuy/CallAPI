import * as Types from "./../constants/actionType";
import callApi from "../utils/apiCaller";

/*
callApi("products", "GET", null).then(res => {
    this.props.fetchAllProducts(res.data)
  });
*/
export const actFetchProductsRequest = () => {
  return dispatch => {
    return callApi("products", "GET", null).then(res => {
      dispatch(actFetchProducts(res.data));
    });
  };
};

export const actFetchProducts = products => {
  return { type: Types.FETCH_PRODUCTS, products };
};

export const actDeleteProductRequest = id => {
  return dispatch => {
    return callApi(`products/${id}`, "DELETE", null).then(res => {
      dispatch(actDeleteProduct(id));
    });
  };
};

export const actDeleteProduct = id => {
  return { type: Types.DELETE_PRODUCT, id };
};

export const actAddProductRequest = product => {
  console.log(product, 333)
  return dispatch => {
    return callApi("products", "POST", product).then(res => {
      console.log(res, 444)
      //gọi api=>sau 1 khoảng thời gian nhận được cái res trả về=>server trả về res.data
      dispatch(actAddProduct(res.data)); //dispatch products tren server
      //dispatch action để lưu vào store
    });
  };
};

export const actAddProduct = product => {
  return {
    type: Types.ADD_PRODUCT,
    product
  };
};

export const actGetProductRequest = id => {
  //nhận id trên url rồi chuyển lên server
  return dispatch => {
    //nhận được response chính là product
    return callApi(`products/${id}`, "GET", null).then(res => {
      dispatch(actGetProduct(res.data));
    });
  };
};

export const actGetProduct = product => {
  //get prduct treen store nên có tham số là product
  return {
    type: Types.EDIT_PRODUCT,
    product
  };
};

export const actUpdateProductRequest = product => {
  return dispatch => {
    return callApi(`products/${product.id}`, "PUT", product).then(res => {
      dispatch(actUpdateProduct(res.data));
    });
  };
};

export const actUpdateProduct = product => {
  return {
    type: Types.UPDATE_PRODUCT,
    product
  };
};
