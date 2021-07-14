import './App.css';

import Categories from "./components/categories/Categories"
import Title from './components/titles/Title';
import Navbar from "./components/navbar/Navbar";
import Sliders from "./components/slider/Sliders"
import { UniqueFeatures } from './components/UniqueFeatures/UniqueFeatures';
import {TopEvent} from './components/TopEvent/TopEvent';
import { Slideshow } from './components/TopEvent/TopEvent';

import Testimonials from './components/testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sliders></Sliders>
      <Title title="My Category"></Title>
      <Categories></Categories>
      <Title title="What Make Us Uniqe"></Title>

      <UniqueFeatures/>
      <Slideshow/>
      <Title title="Top Event"></Title>
      <TopEvent></TopEvent>
      <Title title="Testimonials"></Title>
      <Testimonials />
    
    </div>
  );
}

export default App;
