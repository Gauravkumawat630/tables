
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './styles.css';

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import User from './components/User';
import Login from './components/Login';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/userform">User Form</Link>
            </li>
            <li>
              <Link to="/usertable">User Table</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route 
            path="/" 
            element={
              <ProtectedRoute auth={auth}>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/about" 
            element={
              <ProtectedRoute auth={auth}>
                <About />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/user/:userId" 
            element={
              <ProtectedRoute auth={auth}>
                <User />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/userform" 
            element={
              <ProtectedRoute auth={auth}>
                <UserForm />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/usertable" 
            element={
              <ProtectedRoute auth={auth}>
                <UserTable />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="*" 
            element={
              <ProtectedRoute auth={auth}>
                <NotFound />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
