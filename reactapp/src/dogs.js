import "./dogs.css";
import Slider from "./Slider";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getPosts = async () => {
    console.log("getting posts");
    try {
      await fetch("/getdogs")
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
    return <h1>Loading! Thank you for your patience! The dogs appreciate it!</h1>;
  }
}
export default Dogs;
