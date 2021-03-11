import './css/App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NavBar from "./navbar";
import NotFoundPage from './pages/NotFouldPage';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
        <Route path ="/" component={HomePage} exact></Route>
        <Route path="/about"c component={AboutPage}></Route>
        <Route path="/articles-list" component = {ArticlesListPage}></Route>
        <Route path= "/article/:name" component={ArticlePage}></Route>
        <Route path="" component={NotFoundPage}></Route>
        </Switch>
        
    </div>
    </Router>
    
  );
}

export default App;
