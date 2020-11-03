import "./css/dogs.css";
import Slider from "./Slider";
import React, { useState, useEffect } from "react";

import dogimage from "./Images/buffer2.jpg";

function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getPosts = async () => {
    console.log("getting posts");
    try {
      await fetch("/posts")
        .then((res) => res.json())
        .then((result) => {
          setDogs(result);
          setLoaded(true);
        });
      console.log("dogs", dogs);
    } catch (err) {
      console.log("error ", err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []); // Only run the first time

  if (loaded) {
    return (
      <div className="App">
        <Slider images={dogs} />
      </div>
    );
  } else {
    return (
      <div>
        <img
          src={dogimage}
          alt="dog says thank you for waiting as the page loads"
        />
      </div>
    );
  }
}
export default Dogs;
