import React from "react";
import Popup from "../popup/Popup";
import "../categories/categories.css";
import { useState } from "react";
const slideImages = [
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

function Categories(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [id, setId] = useState(null);
  const [des, setDes] = useState([]);
  const onclick = (e) => {
    setButtonPopup(true);

    setId(id);
    slideImages.find((value) => {
      if (value.id == e.target.id) {
        setDes(value.discrption);
      }
    });
  };

  return (
    <div className="btn">
      {slideImages.map((imageUrl, index) => (
        <div key={index}>
          <button id={imageUrl.id} className="btn-style" onClick={onclick}>
            {" "}
            {imageUrl.title}
          </button>

          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div>
              {des.map((val, index) => (
                <div key={index}>
                  <button className="sub-btn-style">{val.subject}</button>
                </div>
              ))}
            </div>
          </Popup>
        </div>
      ))}
    </div>
  );
}

export default Categories;
