import React from "react";
import { useFetch } from "./useFetch";
import "./people.css";

const People = () => {
  const people = useFetch("/api/v1/people");

  return (
    <div className="container">
      <h2>Peoples</h2>
      <ul>
        {people.data.map((person) => {
          const { image, name, quote, title, id } = person;
          return (
            <li key={id}>
              <img src={image} alt={name} />
              <h1>{name}</h1>
              <p className="quote">{quote}</p>
              <p className="title">{title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default People;
