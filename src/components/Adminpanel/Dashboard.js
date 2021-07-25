import "./dashboard.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Popup from "../popup/Popup";
import { Link } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Button } from "@material-ui/core";

const abed = [
  {
    id: 1,
    discrption: [
      { subject: "Math" },
      { subject: "Bio" },
      { subject: "chimestry" },
    ],

    title: "Education",
  },
  {
    id: 2,
    discrption: [
      { subject: "Football" },
      { subject: "Baseball" },
      { subject: "basketball" },
      { subject: "Abed" },
    ],
    title: "Sport",
  },
  {
    id: 3,
    discrption: [
      { subject: "Plitical-1" },
      { subject: "Plitical-2" },
      { subject: "Plitical-3" },
    ],
    title: "Political",
  },
];

function Dashboard(props) {
  let history = useHistory();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [id, setId] = useState(null);
  const [des, setDes] = useState([]);
  const onclick = (e) => {
    setButtonPopup(true);

    setId(id);
    abed.map((value) => {
      if (value.id == e.target.id) {
        setDes(value.discrption);
      }
    });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <Button color="primary">All Events</Button>
        </div>
        <div>
          <Link to="/CreateSubEvent">
            <Button color="primary">Create Singe Event</Button>
          </Link>
        </div>
        <div>
          <Button
            color="primary"
            onClick={() => {
              localStorage.removeItem("userInfo");
              history.push("/");
            }}
          >
            logout
          </Button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {abed.map((imageUrl, index) => (
          <div key={index}>
            <button id={imageUrl.id} className="btn-style" onClick={onclick}>
              {imageUrl.title}
            </button>

            <div style={{ textAlign: "center" }}>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div>
          {des.map((val, index) => (
            <div key={index}>
              <button className="sub-btn-style">{val.subject}</button>
              <button>Edit</button>
              <button>delete</button>
            </div>
          ))}
        </div>
      </Popup>
    </div>
  );
}

export default Dashboard;
