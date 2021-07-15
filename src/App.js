import './App.css';
import MainCategories from "./components/allMainCategories/AllCategories";

import Categories from "./components/categories/Categories"
import Title from './components/titles/Title';
import Navbar from "./components/navbar/Navbar";
import Sliders from "./components/slider/Sliders"
import { UniqueFeatures } from './components/UniqueFeatures/UniqueFeatures';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './components/Home';
import { Slideshow } from './components/TopEvent/TopEvent';

import Testimonials from './components/testimonials/Testimonials';
import Footer from "./components/footer/Footer";
import { LoginPage } from './components/LoginPage/LoginPage';
function App() {
  return (
    <div className="App">
      <Router>
              <Switch>
               <Route exact path="/abed">
               <Navbar  />
               <Home/>
               <Footer />
               </Route>
               <Route exact path="/admin">
                        <LoginPage/>
                     
               </Route>
                <Route exact path="/">
                        <Navbar />
                        <Sliders></Sliders>
                        <Title abed="My Category"></Title>
                        <Categories></Categories>
                        <Title abed="What Make Us Uniqe"></Title>
                        <UniqueFeatures/>
                        <Title abed="Top Event"></Title>
                        <Slideshow></Slideshow>
                        <Title abed="Testimonials"></Title>
                        <Testimonials />
                        <Footer />
                </Route>
            </Switch>
            </Router>

      <MainCategories />
    
    </div>
  );
}

export default App;
