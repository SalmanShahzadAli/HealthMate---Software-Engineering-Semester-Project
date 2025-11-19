import { useState } from 'react';
import { Eye, EyeOff, Heart } from 'lucide-react';

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        if (!formData.email || !formData.password) {
          throw new Error('Please fill in all fields');
        }
        if (!validateEmail(formData.email)) {
          throw new Error('Invalid email format');
        }
        console.log('Login:', { email: formData.email, password: formData.password });
      } else {
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
          throw new Error('Please fill in all fields');
        }
        if (!validateEmail(formData.email)) {
          throw new Error('Invalid email format');
        }
        if (formData.password.length < 6) {
          throw new Error('Password must be at least 6 characters');
        }
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        console.log('Register:', { name: formData.name, email: formData.email, password: formData.password });
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      console.log(isLogin ? 'Login successful!' : 'Registration successful!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #00b894 0%, #0984e3 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '28rem',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const brandStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  };

  const titleStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: 0,
  };

  const subtitleStyle = {
    color: '#4b5563',
    fontSize: '0.875rem',
    margin: 0,
  };

  const formContainerStyle = {
    background: 'white',
    borderRadius: '1rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
  };

  const toggleStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
  };

  const buttonActiveStyle = {
    flex: 1,
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    background: '#4f46e5',
    color: 'white',
    transition: 'all 0.3s',
  };

  const buttonInactiveStyle = {
    flex: 1,
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    background: '#f3f4f6',
    color: '#374151',
    transition: 'all 0.3s',
  };

  const formGroupStyle = {
    marginBottom: '1rem',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#374151',
    marginBottom: '0.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'all 0.3s',
    boxSizing: 'border-box',
  };

  const passwordWrapperStyle = {
    position: 'relative',
  };

  const passwordToggleStyle = {
    position: 'absolute',
    right: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#6b7280',
    padding: '0.25rem',
  };

  const errorStyle = {
    padding: '0.75rem',
    background: '#fef2f2',
    border: '1px solid #fecaca',
    borderRadius: '0.5rem',
    color: '#b91c1c',
    fontSize: '0.875rem',
    marginBottom: '1rem',
  };

  const submitButtonStyle = {
    width: '100%',
    padding: '0.5rem',
    background: loading ? '#9ca3af' : '#4f46e5',
    color: 'white',
    fontWeight: 600,
    border: 'none',
    borderRadius: '0.5rem',
    cursor: loading ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s',
    marginTop: '1.5rem',
  };

  const footerStyle = {
    textAlign: 'center',
    color: '#4b5563',
    fontSize: '0.875rem',
    marginTop: '1.5rem',
  };

  const footerButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#4f46e5',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.3s',
  };

  const noteStyle = {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '0.75rem',
    marginTop: '1.5rem',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>
          <div style={brandStyle}>
            <Heart style={{ width: '32px', height: '32px', color: '#ef4444', fill: '#ef4444' }} />
            <h1 style={titleStyle}>Health Mate</h1>
          </div>
          <p style={subtitleStyle}>Your personal health companion</p>
        </div>

        <div style={formContainerStyle}>
          <div style={toggleStyle}>
            <button
              onClick={() => !isLogin && toggleMode()}
              style={isLogin ? buttonActiveStyle : buttonInactiveStyle}
            >
              Login
            </button>
            <button
              onClick={() => isLogin && toggleMode()}
              style={!isLogin ? buttonActiveStyle : buttonInactiveStyle}
            >
              Register
            </button>
          </div>

          <div>
            {!isLogin && (
              <div style={formGroupStyle}>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  style={inputStyle}
                />
              </div>
            )}

            <div style={formGroupStyle}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                style={inputStyle}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Password</label>
              <div style={passwordWrapperStyle}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  style={inputStyle}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={passwordToggleStyle}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div style={formGroupStyle}>
                <label style={labelStyle}>Confirm Password</label>
                <div style={passwordWrapperStyle}>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    style={inputStyle}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={passwordToggleStyle}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div style={errorStyle}>
                {error}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              style={submitButtonStyle}
            >
              {loading ? 'Loading...' : (isLogin ? 'Login' : 'Create Account')}
            </button>
          </div>

          <p style={footerStyle}>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button onClick={toggleMode} style={footerButtonStyle}>
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>

        <p style={noteStyle}>
          This is a demo. Connect it to your backend for real authentication.
        </p>
      </div>
    </div>
  );
}