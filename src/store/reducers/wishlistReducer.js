import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, CLEAR_WISHLIST } from '../actions/wishlistAction';

const initialState = {
  items: []
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      const existingItem = state.items.find(item => item.product.id === action.payload.id);
      
      if (existingItem) {
        return state;
      }
      
    
      return {
        ...state,
        items: [...state.items, { product: action.payload }]
      };
    }
      
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.payload)
      };
      
    case CLEAR_WISHLIST:
      return {
        ...state,
        items: []
      };
      
    default:
      return state;
  }
};

export default wishlistReducer;