
import './App.css';
import Sliders from "./component/slider/Sliders"
import Categories from "./component/categories/Categories"
import Title from './component/titles/Title';
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
