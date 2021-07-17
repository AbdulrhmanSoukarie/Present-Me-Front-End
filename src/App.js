import "./App.css";
import Categories from "./components/categories/Categories";
import Title from "./components/titles/Title";
import Navbar from "./components/navbar/Navbar";
import Sliders from "./components/slider/Sliders";
import { UniqueFeatures } from "./components/UniqueFeatures/UniqueFeatures";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import { Slideshow } from "./components/TopEvent/TopEvent";
import "./App.css";
import SingleEvent from "./components/singleEvent/SingleEvent";
import eventImg from "./components/singleEvent/event-img.png";
import hostImg from "./components/singleEvent/host-image.png";

import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import { LoginPage } from "./components/LoginPage/LoginPage";
import AllCategories from "./components/allMainCategories/AllCategories";
import Adminpanel from "./components/Adminpanel/Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <Navbar />
            <Adminpanel></Adminpanel>
            <Footer />
          </Route>
          <Route exact path="/discover">
            <Navbar />
            <AllCategories></AllCategories>
            <Footer />
          </Route>
          <Route exact path="/admin">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Sliders></Sliders>
            <Title abed="My Category"></Title>
            <Categories></Categories>
            <Title abed="What Make Us Uniqe"></Title>
            <UniqueFeatures />
            <Title abed="Top Event"></Title>
            <Slideshow></Slideshow>
            <Title abed="Testimonials"></Title>
            <Testimonials />
            <Footer />
          </Route>
        </Switch>
      </Router>

      <SingleEvent
        title="Algebra"
        eventimg={eventImg}
        description="Prepare for algebra"
        date="7/7/2021"
        hostimg={hostImg}
        hostname="Omar Chouman"
      />
    </div>
  );
}

export default App;
