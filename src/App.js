import React, {useEffect} from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Forgot from './components/Forgot';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {

  const loginname = useSelector((state) => state.loginName);

  useEffect(() => {
    if ((loginname) && (window.location.href !== 'http://localhost:3000/')) {
      window.location.replace('/')
    }
  }, [loginname]);

  return (
    <div className='App'>
        <Router>
        <Nav />
        <main className="form-signin">
                { loginname ?
                (<>
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About} />
                </>)
                :   <Route path="/" exact={true} component={Login} />
                
                }
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={Forgot} />
        </main>
        <Route path="/register" component={Register} />
        </Router>
    </div>
  )
};

export default App;