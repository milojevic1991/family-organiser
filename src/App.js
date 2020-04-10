import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import{BrowserRouter, Route,Switch} from 'react-router-dom'

import Login from './componentes/LoginForm/Login';
import Register from './componentes/RegisterForm/Register';
import Home from './container/Home'
 import { Button } from 'antd';

function App() {
  return (
    <BrowserRouter>
    <div className ='App'>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Button href='/login' type="primary">Login</Button>
      <Button href='/register' type="primary">Register</Button>
    </div>
    </BrowserRouter>
  );
}

export default App;
