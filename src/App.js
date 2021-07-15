import './App.css';

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
function App() {
  return (
    <div className="App">
      <Router>
        
           
       
              <Switch>
               <Route exact path="/abed">
               <Navbar />
               <Home/>
               <Footer />
               </Route>
              
             <Route exact path="/">
                    <Navbar />
                    <Sliders></Sliders>
                    <Title title="My Category"></Title>
                    <Categories></Categories>
                    <Title title="What Make Us Uniqe"></Title>
                    <UniqueFeatures/>
                    <Title title="Top Event"></Title>
                    <Slideshow></Slideshow>
                    <Title title="Testimonials"></Title>
                    <Testimonials />
                    <Footer />
            </Route>
            </Switch>
            </Router>
    </div>
  );
}

export default App;
