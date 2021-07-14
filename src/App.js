
import './App.css';
import Sliders from "./components/slider/Sliders"
import Categories from "./components/categories/Categories"
import Title from './components/titles/Title';
function App() {
  return (
    <div className="App">
    <Sliders></Sliders>
    <Title title="My Category"></Title>
    <Categories></Categories>
    </div>
  );
}

export default App;
