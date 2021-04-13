import React, { Component } from 'react';
import ProductsContainer from './containers/productsContainer'
import ClassNameContainer from './containers/classNameContainer';
import ClassIDContainer from './containers/classIDContainer';
class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ClassNameContainer />
                </div>
                <div className="row">
                    <ClassIDContainer />
                </div>
                <div className="row">
                    <ProductsContainer />
                </div>
            </div>

        )
    }
}

export default App;
