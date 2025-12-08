export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const CLEAR_WISHLIST = 'CLEAR_WISHLIST';
export const SET_WISHLIST = 'SET_WISHLIST';


export const addToWishlist = (product) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product
  };
};

export const removeFromWishlist = (productId) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: productId
  };
};

export const clearWishlist = () => {
  return {
    type: CLEAR_WISHLIST
  };
};