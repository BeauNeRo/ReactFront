import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import NewProduct from './components/main_product';
import Nav from './components/navbar';
import LoginForm from './components/pages/MyPage/loginform';
import main from './slide_01.jfif';
import React,{useState} from 'react';

function App() {
  const adminUser = {
    email:"admin@admin.com",
    password:"admin"
  }

  const [user, setUser]=useState({name:"",email:""});
  const [error,setError]=useState("");

  const Login = details => {
      console.log(details);

      if(details.email == adminUser.email && details.password==adminUser.password){
        console.log("Logged in");
        setUser({
          name:details.name,
          email:details.email
        });
      } else {
        console.log("Details do not match!");
        setError("Details do not match!");
      }
  }

  const Logout = () => {
      setUser({name:"",email:""});
  }

  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact>
            <div className="container"><img src={main} className="main-image"/></div>
            <NewProduct/>
            <NewProduct/>
          </Route>
          <Route path="/company" exact>
            <h1>company</h1>
          </Route>
          <Route path="/shopping" exact>
            <h1>shopping</h1>
          </Route>
          <Route path="/fitting" exact>
            <h1>fitting</h1>
          </Route>
          <Route path="/loginform" exact>
            {(user.email != "")?(
              <div className="welcome">
                <h2>Welcome, <span>{user.name}</span></h2>
                <button onClick={Logout}>Logout</button>
              </div>
            ):(
              <LoginForm Login={Login} error={error}/>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;