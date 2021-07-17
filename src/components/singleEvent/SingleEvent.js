import React from "react";
import "./SingleEvent.css";

const SingleEvent = (props) => {
  return (
    <div className="container-2">
      <h1>{props.title}</h1>
      <img src={props.eventimg} className="event__img" alt="" />
      <div className="box-1">
        <div className="event-info">
          <h3>Title: {props.title}</h3>
          <h3>Description: {props.description}</h3>
          <h3>Event Date: {props.date}</h3>
        </div>
        <div className="host-info">
          <img  src={props.hostimg} alt="" />
          <h3>{props.hostname}</h3>
        </div>
      </div>
      <button className="btn">Attend</button>
    </div>
  );
};

export default SingleEvent;
