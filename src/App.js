import './App.css';

import Categories from "./components/categories/Categories"
import Title from './components/titles/Title';
import Navbar from "./components/navbar/Navbar";
import Sliders from "./components/slider/Sliders"
import { UniqueFeatures } from './components/UniqueFeatures/UniqueFeatures';

import { Slideshow } from './components/TopEvent/TopEvent';

import Testimonials from './components/testimonials/Testimonials';
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
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
    
    </div>
  );
}

export default App;
