import { 
  LOGIN_REQUEST,
  LOGIN_SUCCESS, 
  LOGIN_FAILED, 
  LOGOUT,
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE
} from '../actions/authActions';

const initialState = {
  user: null,
  token:null,
  isAuthenticated: false,
  loading: false,
  error: null,
  roles: [],
  theme: 'light',
  language: 'en'
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
      
    case LOGIN_SUCCESS:
    case SET_USER:
      return {
        ...state,
         user: action.payload.user || action.payload,
         token: action.payload.token || state.token, 
        isAuthenticated: true,
        loading: false,
        error: null
      };
      
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false
      };
      
    case LOGOUT:
      return {
        ...state,
        user: null,
         token: null,
        isAuthenticated: false,
        loading: false,
        error: null
      };
      
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload
      };
      
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      };
      
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
      
    default:
      return state;
  }
}