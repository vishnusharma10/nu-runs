import React, { useEffect,useState } from "react";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NotFoundPage from './pages/NotFouldPage';
import Homepage from "./pages/HomePage";
import NavBar from "./components/navbar";
import Login from "./components/Auth/SignIn";
import Profile from "./pages/Profile";
import axios from "axios";
import UserContext from "./context/userContext";
import SignUp from "./components/Auth/SignUp";
import CoursesPage from "./pages/CoursesPage";
import FooterSection from "./components/FooterSection";
import ChallengesPage from "./pages/Challenges";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
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
        if(tokenResponse.data){
          const userRes = await axios.get("http://localhost:8000/auth");
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
          <Route path="/get-started/" component={SignUp}></Route>
          <Route path="/profile/"component={Profile}></Route>
          <Route path="/courses/" component={CoursesPage}></Route>
          <Route path="/challenges/" component={ChallengesPage}></Route>
          <Route path="/login/" component={Login}></Route>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <FooterSection></FooterSection>
    </div>
    </UserContext.Provider>
  </Router>
    
  );
}

export default App;
