import React, { useState } from "react";

import "./createsubevent.css";
import axios from "axios";
function CreateSubEvent() {
  const [subevent, setSubevent] = useState({
    title: "",
    description: "",
    date: "",
    name: "",
    mainImage: "",
  });
  const { title, description, date, name, mainImage } = subevent;
  const onChange = (e) => {
    setSubevent({ ...subevent, [e.target.name]: e.target.value });
  };

  const onSubmet = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    await axios
      .post("http://localhost:8001/subevent/create", subevent)
      .then((response) => {
        console.log("Status: ", response.status);
        console.log(response);
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });
  };
  console.log(subevent);
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Create Sub Event</h1>
      </div>
      <div className="main-form">
        <form onSubmit={onSubmet}>
          <div className="flex-form">
            <div>
              <label>Title</label>
            </div>
            <div>
              <input
                type="text"
                value={title}
                name="title"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="flex-form">
            <div>
              <label>Event Description</label>
            </div>
            <div>
              <textarea
                name="description"
                value={description}
                type="text"
                onChange={onChange}
              ></textarea>
            </div>
          </div>
          <div className="flex-form">
            <div>
              <label>Auther Name</label>
            </div>
            <div>
              <input name="name" value={name} type="text" onChange={onChange} />
            </div>
          </div>
          <div className="flex-form">
            <div>
              <label>Event Date</label>
            </div>
            <div>
              <input name="date" value={date} type="date" onChange={onChange} />
            </div>
          </div>

          <div className="flex-form">
            <div>
              <label>Auther Image</label>
            </div>
            <div>
              <input type="file"></input>
            </div>
          </div>
          <div className="flex-form">
            <div>
              <label>Event Image</label>
            </div>
            <div>
              <input name="myImage" type="file"></input>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <input className="btn-2" name="add Event" type="submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSubEvent;
