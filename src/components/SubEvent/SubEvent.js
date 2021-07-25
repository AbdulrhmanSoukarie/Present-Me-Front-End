import React from "react";
import "./subevent.css";
import { Link } from "react-router-dom";
import img_1 from "../singleEvent/event-img.png";

function SubEvent() {
  return (
    <div className="subevent-container">
      <div>
        <div>
          <img
            style={{ borderRadius: "10px", maxWidth: "100%" }}
            src={img_1}
          ></img>
        </div>
        <div className="text-container">
          <div className="text-1-container">
            <p>Subject :</p>

            <p>HostName : </p>

            <p>Date : </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <button className="btn-1">
            <Link to="/single">Read More</Link>
          </button>
        </div>
      </div>
      <div>
        <div>
          <img
            style={{ borderRadius: "10px", maxWidth: "100%" }}
            src={img_1}
          ></img>
        </div>
        <div className="text-container">
          <div className="text-1-container">
            <p>Subject :</p>

            <p>HostName : </p>

            <p>Date : </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <button className="btn-1">
            <Link to="/single">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubEvent;
