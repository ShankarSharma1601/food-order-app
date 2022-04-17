import "./App.css";
//import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./compnents/TopBar";
import About from "./compnents/About";
import Contact from "./compnents/Contact";
import Policy from "./compnents/Policy";
import NavBar from "./compnents/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import AdminScreen from "./screens/AdminScreen";





function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Switch>
      <Route path='/admin' component={AdminScreen} />
        <Route path='/login' component={Login} exact />
        <Route path='/register' component={Register} exact />
        <Route path='/cart' component={CartScreen} exact />
        <Route path='/about' component={About} exact />
        <Route path='/contact' component={Contact} exact />
        <Route path='/policy' component={Policy} exact />
        <Route path='/' component={HomeScreen} exact />
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;



