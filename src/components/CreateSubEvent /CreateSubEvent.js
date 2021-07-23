import React, { useState, useEffect } from "react";
import "./createsubevent.css";
import axios from "axios";
function CreateSubEvent() {
  const [subevent, setSubevent] = useState({
    title: "",
    description: "",
    date: "",
    name: "",
  });
  const { title, description, date, name } = subevent;
  const onChange = (e) => {
    setSubevent({ ...subevent, [e.target.name]: e.target.value });
  };

  console.log(subevent);
  return (
    <div className="main-form">
      <form>
        <div className="flex-form">
          <div>
            <label>Title</label>
          </div>
          <div>
            <input type="text" value={title} name="title" onChange={onChange} />
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
            <input type="file"></input>
          </div>
        </div>

        <div>
          <input name="add Event" type="submit"></input>
        </div>
      </form>
    </div>
  );
}

export default CreateSubEvent;
