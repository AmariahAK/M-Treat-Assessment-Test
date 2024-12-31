import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { checkAuthStatus } from './redux/authSlice';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF',
      dark: '#0056b3',
    },
    secondary: {
      main: '#28A745',
    },
    error: {
      main: '#DC3545',
    },
    background: {
      default: '#F8F9FA',
    },
  },
});

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/" 
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} 
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;