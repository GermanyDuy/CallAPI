import React, { Component } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actFetchProductsRequest,
  actDeleteProductRequest
} from "./../../actions/index";
class ProductListPage extends Component {
  //lấy dữ liệu trên server rồi đổ vào products
  //sd lifecycle hook
  componentDidMount() {
    // được gọi ngay sau khi component render lần dầuu tiên
    // callApi("products", "GET", null).then(res => {
    //   this.props.fetchAllProducts(res.data)
    // });
    this.props.fetchAllProducts();
  }

  onDelete = id => {
    // var { products } = this.state;
    // callApi(`products/${id}`, "DELETE", null).then(res => {
    //   this.setState({
    //     products: res.data
    //   });
    //   if (res.status === 200) {
    //     //OK
    //     var index = this.findIndex(products, id);
    //     if (index !== -1) {
    //       products.splice(index, 1);
    //       this.setState({
    //         products
    //       });
    //     }
    //   }
    // });
    this.props.onDeleteProduct(id);
  };

  render() {
    var { products } = this.props; //du lieu tren redux
    //sd axios để kết nối lên server lấy danh sách product
    //do tg render là 1s mà tg kết nối server là 5s nên ds không hiển thị được
    //tạm thời sử dụng lifecycle
    // var { products } = this.state;

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="product/add" className="btn btn-info">
          Thêm Sản Phẩm
        </Link>

        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
  showProducts(products) {
    var result = null;
    if (products && products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: id => {
      dispatch(actDeleteProductRequest(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
