import "./dashboard.css";
import { useState } from "react";
const abed = [
  {
    id: 1,
    discrption: "chimestry",

    title: "Education",
  },
  {
    id: 2,
    discrption: "loli",
    title: "Sport",
  },
  {
    id: 3,
    discrption: "Plitical-3",
    title: "Political",
  },
];

function Dashboard(props) {
  const [event, setEvent] = useState([]);
  // const [subject , setSubject] = useState([]);
  function onClick() {
    setEvent(abed);
  }

  return (
    <div>
      <div className="btn " style={{ marginTop: "1.5rem" }}>
        <button className="btn-style" onClick={onClick}>
          All Events
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {event.map((val, index) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onclick={abed} className="btn-style">
              {val.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
