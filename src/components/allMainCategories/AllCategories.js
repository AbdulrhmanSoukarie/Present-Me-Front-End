import React from "react";
import "./AllCategories.css";
import Education from "./images/education.png";
import Music from "./images/music.png";
import Technology from "./images/technology.png";

const Categories = [
  {
    title: "Education",
    image: Education,
  },
  {
    title: "Music",
    image: Music,
  },
  {
    title: "Technology",
    image: Technology,
  },
  {
    title: "Education",
    image: Education,
  },
  {
    title: "Music",
    image: Music,
  },
  {
    title: "Technology",
    image: Technology,
  },
];

const allCategories = () => {
  return (
    <div>
      <div className="container-1">
        {Categories.map((val, index) => (
          <div key={index} className="each-category">
            <div
              className="category-img"
              style={{ backgroundImage: `url(${val.image})` }}
            >
              <button className="btn-style">{val.title}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default allCategories;
