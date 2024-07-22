import CartActionTypes from "./cart.types";

export  const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});


// export const toggleCartHidden = () => {
//     // returns an action
//     return {
//       type: 'TOGGLE_CART_HIDDEN',
//       payload: CartActionTypes
//     }
//   };
