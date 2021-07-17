import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import "./AllCategories.css";
import Education from "./images/education.png";
import Music from "./images/music.png";
import Technology from "./images/technology.png";


const AllCategories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
    axios.get('http://localhost:8000/categories/get')
        .then(res => {
            console.log(res);
            setCategories(res.data);
        })
        .catch(err => {
            console.log(err);
        })
})

    return ( 
    <div >
        <div className="container">
            {categories.map( (category) => (
                <div key={category.id} className="each-category">
                    <div className="category-img" style={{ 'backgroundImage': `url(${category.image})`}}>
                        <button className="btn">{category.name}</button>
                    </div>
                </div>
            ) )}
        </div>  
    </div>
    )
}

export default AllCategories