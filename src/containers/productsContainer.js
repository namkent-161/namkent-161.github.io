import React, { Component } from 'react';
import Products from '../Components/Products';
import {connect} from 'react-redux';
import Product from '../Components/Product';

class ProductsContainer extends Component {
    render() {
        var {products} = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        )
    }

    showProduct(products) {
        var result = null;
        var {filterClassName, filterClassID} = this.props;
        if(products.length > 0) {
            if(filterClassName !== 'className' && filterClassName) {
                products = products.filter((product) => {
                    return product.className === filterClassName;
                })
            }
            if(filterClassID !== 'classID' && filterClassID) {
                products = products.filter((product) => {
                    return product.classId === filterClassID;
                })
            }
            result = products.map((item, index) => {
                return <Product item={item} key={index}></Product>
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        filterClassName: state.filterClassName,
        filterClassID: state.filterClassID,
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);
