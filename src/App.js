import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import SiteLayout from './Main/SiteLayout';
import Login from './Main/Login';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  const [isLogin, setIslogin] = React.useState(false);

  React.useEffect(() => {
    const tokenexist = localStorage.getItem('token');
    if (tokenexist) {
      setIslogin(true)
    } else {
      setIslogin(false)
    }
  }, [])
  return (
    <>

      <Router>
        {
          isLogin ? <SiteLayout /> : <Login />
        }
      </Router>

    </>
  );
}

export default App;
