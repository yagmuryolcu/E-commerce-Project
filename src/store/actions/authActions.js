import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const SET_USER = 'SET_USER';

export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';

const API_URL = 'http://localhost:9000/workintech/ecommerce/management/api';


export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });
    
    console.log(' Login Response:', response.data);
    console.log(' Remember Me:', rememberMe);
    
    const { token, username, email: userEmail, roleName } = response.data;
    
    // ✅ kullanıcı bilgilerini storage'a kaydet (rememberme'ye göre localStorage veya sessionStorage)
    const storage = rememberMe ? localStorage : sessionStorage;
    const storageType = rememberMe ? 'localStorage' : 'sessionStorage';
    
    const userData = {
      username,
      email: userEmail,
      roleName
    };
    
    storage.setItem('user', JSON.stringify(userData));
    console.log(`💾 User bilgileri ${storageType}'a kaydedildi`);
    console.log('📦 Stored user:', userData);
    
    // ✅ Eğer token varsa onu da kaydet
    if (token) {
      storage.setItem('token', token);
      console.log(' Token da kaydedildi:', token.substring(0, 20) + '...');
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      console.warn(' Backend token dönmedi ');
    }
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        username,
        email: userEmail,
        roleName
      }
    });
    
    return { success: true };
  } catch (error) {
    console.error('Login error:', error);
    dispatch({
      type: LOGIN_FAILED,
      payload: error.response?.data?.message || 'Login failed'
    });
    return { 
      success: false, 
      error: error.response?.data?.message || 'Login failed' 
    };
  }
};


export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  
  // token yoksa, sadece user bilgilerini kontrol et
  if (!token) {
    console.log('Token yok, session-based auth kullanılıyor');
    return { success: true };
  }

  try {
    const response = await axios.get(`${API_URL}/verify`, {
      headers: {
        'Authorization': token
      }
    });

    if (response.status === 200) {
      const userData = response.data;
      
      dispatch({
        type: SET_USER,
        payload: userData
      });
      
      if (userData.token) {
        const storage = localStorage.getItem('token') ? localStorage : sessionStorage;
        storage.setItem('token', userData.token);
        axios.defaults.headers.common['Authorization'] = userData.token;
      }
      
      console.log('Token verified, user logged in automatically');
      return { success: true };
    }
  } catch (error) {
    console.error(' Token verification failed:', error);
    
    const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (userStr) {
      console.log(' Token verify edilemedi ama user bilgisi mevcut (session-based)');
      return { success: true };
    }
    
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: LOGOUT });
    return { success: false };
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: LOGOUT });
};

export const loadUserFromStorage = () => async (dispatch) => {
  console.log(' loadUserFromStorage çalıştı');
  
  let token = localStorage.getItem('token');
  let userStr = localStorage.getItem('user');
  
  if (!token && !userStr) {
    console.log(' localStorage\'da veri yok, sessionStorage kontrol ediliyor...');
    token = sessionStorage.getItem('token');
    userStr = sessionStorage.getItem('user');
  } else if (token) {
    console.log(' Token localStorage\'dan alındı');
  } else if (userStr) {
    console.log(' User bilgisi localStorage\'dan alındı (token yok, session-based)');
  }
  
  if (userStr) {
    try {
      const user = JSON.parse(userStr);
      
      if (token) {
        axios.defaults.headers.common['Authorization'] = token;
      }
      
      dispatch({
        type: SET_USER,
        payload: user
      });
      
      console.log(' User loaded from storage:', user);
      console.log(' Storage type:', localStorage.getItem('user') ? 'localStorage' : 'sessionStorage');
      
      if (token) {
        const result = await dispatch(verifyToken());
        
        if (!result.success) {
          console.warn(' Token expired or invalid, logging out...');
          dispatch(logout());
        }
      } else {
        console.log(' Session-based auth, token verification atlandı');
      }
      
    } catch (error) {
      console.error(' Failed to load user from storage:', error);
      dispatch(logout());
    }
  } else {
    console.log(' Storage\'da user bilgisi bulunamadı');
  }
};


export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const fetchRoles = () => async (dispatch, getState) => {
  try {
    const { client } = getState();
    if (client?.roles?.length > 0) {
      console.log('Roles already fetched, skipping...');
      return;
    }

    const response = await axios.get(`${API_URL}/roles`);
    
    dispatch({
      type: SET_ROLES,
      payload: response.data
    });
    
    console.log(' Roles fetched from backend:', response.data);
    
  } catch (error) {
    console.error(' Error fetching roles:', error);
  }
};

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