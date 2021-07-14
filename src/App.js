import './App.css';

import Categories from "./components/categories/Categories"
import Title from './components/titles/Title';
import Navbar from "./components/navbar/Navbar";
import Sliders from "./components/slider/Sliders"
import { UniqueFeatures } from './components/UniqueFeatures/UniqueFeatures';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sliders></Sliders>
      <Title title="My Category"></Title>
      <Categories></Categories>
      <Title title="What Make Us Uniqe"></Title>

      <UniqueFeatures/>
    </div>
  );
}

export default App;
