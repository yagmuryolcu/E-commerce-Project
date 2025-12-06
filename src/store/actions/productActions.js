import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
} from '../reducers/productReducer';


export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setProductList = (products) => ({
  type: SET_PRODUCT_LIST,
  payload: products,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setFetchState = (state) => ({
  type: SET_FETCH_STATE,
  payload: state,
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});


const API_BASE_URL = 'http://localhost:9000/workintech/ecommerce/management/api';


export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      
      const data = await response.json();
      dispatch(setCategories(data));
      console.log('✅ Categories fetched from backend:', data);
      
    } catch (error) {
      console.error(' Error fetching categories:', error);
    }
  };
};

// backend limit

export const fetchProducts = (categoryId, filter, sort, limit = 25, offset = 0) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState('FETCHING'));

      const params = new URLSearchParams();
      if (categoryId) params.append('category', categoryId);
      if (filter) params.append('filter', filter);
      if (sort) params.append('sort', sort);
      params.append('limit', limit);
      params.append('offset', offset);

      const response = await fetch(`${API_BASE_URL}/products?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      
      dispatch(setProductList(data.products));
      dispatch(setTotal(data.total));
      dispatch(setFetchState('FETCHED'));
      
      console.log('✅ Products fetched from backend:', data);
      
    } catch (error) {
      console.error('❌ Error fetching products:', error);
      dispatch(setFetchState('FAILED'));
    }
  };
};