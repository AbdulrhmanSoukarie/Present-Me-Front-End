import './App.css';
import SingleEvent from "./components/singleEvent/SingleEvent";
import eventImg from "./components/singleEvent/event-img.png";
import hostImg from "./components/singleEvent/host-image.png";

function App() {
  return (
    <div className="App">

      <SingleEvent
        title = "Algebra"
        eventimg = {eventImg}
        description = "Prepare for algebra"
        date = "7/7/2021"
        hostimg = {hostImg}
        hostname = "Omar Chouman"
       />
    
    </div>
  );
}

export default App;
