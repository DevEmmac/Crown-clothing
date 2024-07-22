import React from "react";

import CustomButton from "../custom/custom-button.component";

import './cart-dropdown.style.css';

const CartDropdown = () => ( 
    <div className="cart-dropdown">
        <div className="cart-items" />
           <CustomButton>Go To CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;