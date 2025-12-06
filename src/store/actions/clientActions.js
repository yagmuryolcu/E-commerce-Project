import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
} from '../reducers/clientReducer';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});


const API_BASE_URL = 'http://localhost:9000/workintech/ecommerce/management/api';


export const fetchRoles = () => {
  return async (dispatch, getState) => {
    try {
      // Rol kontrolü
      const { client } = getState();
      if (client.roles.length > 0) {
        console.log('Roles already fetched, skipping...');
        return;
      }

      const response = await fetch(`${API_BASE_URL}/roles`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch roles');
      }
      
      const data = await response.json();
      dispatch(setRoles(data));
      console.log(' Roles fetched from backend:', data);
      
    } catch (error) {
      console.error(' Error fetching roles:', error);
    }
  };
};


export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        console.log('No token found');
        return;
      }

      const response = await fetch(`${API_BASE_URL}/verify`, {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to verify user');
        localStorage.removeItem('token');
        return;
      }
      
      const data = await response.json();
      dispatch(setUser(data));
      console.log(' User verified from backend:', data);
      
    } catch (error) {
      console.error(' Error fetching user:', error);
      localStorage.removeItem('token');
    }
  };
};


export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      
      // Token'ı localStorage'a kaydet
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      
      // User bilgisini Redux'a kaydet
      dispatch(setUser(data.user || data));
      console.log(' Login successful:', data);
      
      return { success: true, data };
      
    } catch (error) {
      console.error(' Login error:', error);
      return { success: false, error: error.message };
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch(setUser({}));
    console.log('✅ User logged out');
  };
};