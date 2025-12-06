import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
} from '../reducers/shoppingCartReducer';

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

const API_BASE_URL = 'http://localhost:9000/workintech/ecommerce/management/api';


const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : ''
  };
};


export const addToCart = (product) => {
  return (dispatch, getState) => {
    const { shoppingCart } = getState();
    const existingItem = shoppingCart.cart.find(item => item.product.id === product.id);

    let newCart;
    if (existingItem) {
      newCart = shoppingCart.cart.map(item =>
        item.product.id === product.id
          ? { ...item, count: item.count + 1 }
          : item
      );
    } else {
      newCart = [...shoppingCart.cart, { count: 1, product }];
    }

    dispatch(setCart(newCart));
    
    localStorage.setItem('cart', JSON.stringify(newCart));
    
    console.log(' Product added to cart:', product.title);
  };
};


export const removeFromCart = (productId) => {
  return (dispatch, getState) => {
    const { shoppingCart } = getState();
    const newCart = shoppingCart.cart.filter(item => item.product.id !== productId);
    
    dispatch(setCart(newCart));
    localStorage.setItem('cart', JSON.stringify(newCart));
    
    console.log(' Product removed from cart');
  };
};


export const updateCartItemCount = (productId, count) => {
  return (dispatch, getState) => {
    const { shoppingCart } = getState();
    
    if (count <= 0) {
      dispatch(removeFromCart(productId));
      return;
    }

    const newCart = shoppingCart.cart.map(item =>
      item.product.id === productId
        ? { ...item, count }
        : item
    );

    dispatch(setCart(newCart));
    localStorage.setItem('cart', JSON.stringify(newCart));
    
    console.log(' Cart item count updated');
  };
};

export const clearCart = () => {
  return (dispatch) => {
    dispatch(setCart([]));
    localStorage.removeItem('cart');
    console.log(' Cart cleared');
  };
};

export const loadCartFromStorage = () => {
  return (dispatch) => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const cart = JSON.parse(savedCart);
        dispatch(setCart(cart));
        console.log(' Cart loaded from localStorage');
      }
    } catch (error) {
      console.error(' Error loading cart:', error);
    }
  };
};


export const fetchPaymentMethods = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/card`, {
        headers: getAuthHeaders()
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch payment methods');
      }
      
      const data = await response.json();
      if (data.length > 0) {
        dispatch(setPayment(data[0]));
      }
      console.log(' Payment methods fetched from backend');
      
    } catch (error) {
      console.error(' Error fetching payment methods:', error);
    }
  };
};

export const addPaymentMethod = (cardData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/card`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(cardData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to add payment method');
      }
      
      const data = await response.json();
      dispatch(setPayment(data));
      console.log(' Payment method added');
      
      return { success: true, data };
    } catch (error) {
      console.error(' Error adding payment method:', error);
      return { success: false, error: error.message };
    }
  };
};


export const fetchAddresses = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/address`, {
        headers: getAuthHeaders()
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch addresses');
      }
      
      const data = await response.json();
      if (data.length > 0) {
        dispatch(setAddress(data[0]));
      }
      console.log(' Addresses fetched from backend');
      
    } catch (error) {
      console.error(' Error fetching addresses:', error);
    }
  };
};

export const addAddress = (addressData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/address`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(addressData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to add address');
      }
      
      const data = await response.json();
      dispatch(setAddress(data));
      console.log(' Address added');
      
      return { success: true, data };
    } catch (error) {
      console.error(' Error adding address:', error);
      return { success: false, error: error.message };
    }
  };
};

// backend sipairş

export const createOrder = (orderData) => {
  return async (dispatch, getState) => {
    try {
      const { shoppingCart } = getState();
      
      const order = {
        ...orderData,
        products: shoppingCart.cart.map(item => ({
          product_id: item.product.id,
          count: item.count,
          detail: item.product.title
        })),
        price: shoppingCart.cart.reduce((total, item) => 
          total + (item.product.discountPrice * item.count), 0
        )
      };

      const response = await fetch(`${API_BASE_URL}/order`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(order)
      });
      
      if (!response.ok) {
        throw new Error('Failed to create order');
      }
      
      const data = await response.json();
      
      dispatch(clearCart());
      console.log(' Order created successfully');
      
      return { success: true, data };
    } catch (error) {
      console.error(' Error creating order:', error);
      return { success: false, error: error.message };
    }
  };
};