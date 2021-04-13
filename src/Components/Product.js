import React, { Component } from 'react';

class Product extends Component {
    render() {
        var {item} = this.props;
        return (
            <tr>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.className}</th>
                <td>{item.classId}</td>
            </tr>
        )
    }
}

export default Product;
