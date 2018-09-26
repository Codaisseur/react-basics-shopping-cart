import React, { Component } from 'react';

export class CheckoutButton extends Component {
    render() {
        return <button onClick={this.props.onClick}>Checkout!</button>
    }
}