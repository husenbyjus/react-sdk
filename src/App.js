import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [data, setData] = useState([]);
  const data1 = ["List 1", "List 2", "List 3"];
  useEffect(() => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products", true);
    xhr.onload = function () {
      console.log(xhr.responseText);
      setData(JSON.parse(xhr.responseText)?.data);
    };
    xhr.send();
  }, []);
  return (
    <div className="body">
      <h1>React from Scratch</h1>
      <ul>
        {data?.map((val) => (
          <li>{val.name}</li>
        ))}
      </ul>
    </div>
  );
}
