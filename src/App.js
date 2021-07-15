import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainPage from './Components/Home/MainPage/MainPage';
import Profile from './Components/Profile/Profile';
import './style.css';

export default function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route  path="/git-user/:id" component={ Profile} />
      </Router>
    </>
  );
}
