import { useState } from 'react';
import { Link } from "react-router-dom";

import { User, Mail, Lock, Eye, EyeOff, ShoppingBag } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    roleId: 1 //tekrar bak
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    } else if (formData.username.trim().length > 150) {
      newErrors.username = 'Username must be less than 150 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 150) {
      newErrors.email = 'Email must be less than 150 characters';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (formData.password.length > 150) {
      newErrors.password = 'Password must be less than 150 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      
      const registerData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: {
          id: formData.roleId
        }
      };

      // API çağrısı 
      const response = await fetch('/workintech/ecommerce/management/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        alert('Registration successful! Please login.');
        // Logine yönlendirme eklicem
      } else {
        const error = await response.json();
        alert(error.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 mt-8 mb-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFE4CC] rounded-full mb-4">
            <ShoppingBag className="w-8 h-8 text-[#FF6B35]" />
          </div>
          <h1 className="text-3xl font-bold text-[#2C3E50]">Create Account</h1>
          <p className="text-[#7F8C8D] font-normal text-m mt-2">Join us and start shopping</p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-[#2C3E50] mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#7F8C8D]" />
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition ${
                  errors.username ? 'border-[#E74C3C]' : 'border-[#BDC3C7]'
                }`}
              />
            </div>
            {errors.username && (
              <p className="mt-1 text-sm text-[#E74C3C]">{errors.username}</p>
            )}
          </div>

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

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#2C3E50] mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#7F8C8D]" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition ${
                  errors.confirmPassword ? 'border-[#E74C3C]' : 'border-[#BDC3C7]'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#7F8C8D] hover:text-[#2C3E50]"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-[#E74C3C]">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 mt-1 text-[#FF6B35] border-[#BDC3C7] rounded focus:ring-[#FF6B35]"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-[#7F8C8D]">
              I agree to the{' '}
              <a href="#" className="text-[#FF6B35] hover:text-[#E85A2A] font-medium">
                Terms and Conditions
              </a>{' '}
              and{' '}
              <a href="#" className="text-[#FF6B35] hover:text-[#E85A2A] font-medium">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-[#FF6B35] text-white py-3 rounded-lg font-medium hover:bg-[#E85A2A] focus:ring-4 focus:ring-[#FFB399] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#7F8C8D]">
            Already have an account?{' '}
            
            <Link 
            to="/login"
            className="text-[#FF6B35] hover:text-[#E85A2A] font-medium"
            >
            Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}