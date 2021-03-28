import React, { useEffect,useState } from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NotFoundPage from './pages/NotFouldPage';
import Homepage from "./pages/HomePage";
import NavBar from "./components/navbar";
import Authenticate from "./components/Auth/Authentication";
import Login from "./components/Auth/SignIn";
import Profile from "./pages/Profile";
import axios from "axios";
import UserContext from "./context/userContext";
axios.defaults.withCredentials = true;

function App() {
  const [userData,setUserData] = useState({
    token:undefined,
    user:undefined
  });
  useEffect(()=>{
    const checkLoggedIn = async()=>{
      const result = await axios.get("http://localhost:8000/auth/");
      if(result.data.token){
        const tokenResponse = await axios.post("http://localhost:8000/auth/tokenisvalid");
        console.log(tokenResponse.data)
        if(tokenResponse.data){
          const userRes = await axios.get("http://localhost:8000/auth");
          console.log(userRes.data);
          setUserData({token:userRes.token,user:userRes.data});
        }
        
      }
      else {
        await axios.get("http://localhost:8000/auth/logout");
      }
    }
    checkLoggedIn();
  },[]);
  return (
    <Router>
      <UserContext.Provider value={{userData,setUserData}}>
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesListPage} />
          <Route path="/article/:name" component={ArticlePage} />
          <Route path="/get-started/" component={Authenticate}></Route>
          <Route path="/login/" component={Login}></Route>
          <Route path="/profile">{Profile}</Route>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
    </UserContext.Provider>
  </Router>
    
  );
}

export default App;
