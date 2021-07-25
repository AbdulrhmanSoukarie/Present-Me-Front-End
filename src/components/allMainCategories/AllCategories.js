import React, {useState, useEffect} from "react";
import "./AllCategories.css";
import { Link } from "react-router-dom";
import axios from "axios";

const AllCategories = () => {

  const [categories, setCategories] = useState([])

    useEffect(() => {
    axios.get('http://localhost:8000/mainw')
        .then(res => {
            console.log(res);
            setCategories(res.data);
        })
        .catch(err => {
            console.log(err);
    })
  })

  return (
    <div>
      <div className="container-1">
        {categories.map((category) => (
          <div key={category.id} className="each-category">
            <div
              className="category-img"
              style={{ backgroundImage: `url(${category.imgUrl})` }}
            >
              <Link to="/single" className="btn-style">
                {category.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
