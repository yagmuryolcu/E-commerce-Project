import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/actions/authActions'; // ← authActions'dan import et
import { Mail, Lock, Eye, EyeOff, ShoppingBag } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth); // ← auth reducer'dan al
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // ✅ authActions'daki loginUser kullan
    const result = await dispatch(loginUser(
      formData.email,
      formData.password,
      rememberMe
    ));
    
    if (result.success) {
      navigate('/');
    } else {
      alert(result.error || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFE4CC] rounded-full mb-4">
            <ShoppingBag className="w-8 h-8 text-[#FF6B35]" />
          </div>
          <h1 className="text-3xl font-bold text-[#2C3E50]">Welcome Back</h1>
          <p className="text-[#7F8C8D] font-normal text-m mt-2">Sign in to your account</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#7F8C8D]" />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="user@hotmail.com"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition ${
                  errors.email ? 'border-[#E74C3C]' : 'border-[#BDC3C7]'
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-[#E74C3C]">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#2C3E50] mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#7F8C8D]" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition ${
                  errors.password ? 'border-[#E74C3C]' : 'border-[#BDC3C7]'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#7F8C8D] hover:text-[#2C3E50]"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-[#E74C3C]">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-[#FF6B35] border-[#BDC3C7] rounded focus:ring-[#FF6B35] cursor-pointer"
              />
              <span className="ml-2 text-sm text-[#7F8C8D]">Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#FF6B35] hover:text-[#E85A2A] font-medium">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF6B35] text-white py-3 rounded-lg font-medium hover:bg-[#E85A2A] focus:ring-4 focus:ring-[#FFB399] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#7F8C8D]">
            Don't have an account?{' '}
            <a 
              href="/register"
              className="text-[#FF6B35] hover:text-[#E85A2A] font-medium"
            >
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}