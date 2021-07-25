import React, { useEffect } from "react";
import "../titles/title.css";
import aos from "aos";
import "aos/dist/aos.css";
function Tittle({ abed }) {
  useEffect(() => {
    aos.init({ duration: 1000 });
  });
  return (
    <div data-aos="zoom-in" className="title-1">
      <h1>{abed}</h1>
    </div>
  );
}

export default Tittle;
