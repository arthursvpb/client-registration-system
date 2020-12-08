import React, { useState, useEffect } from "react";

import api from "../services/api";

import user from "../images/user.png";

import "../styles/pages/person.css";

function Person() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    api.get("/person").then((res) => {
      setPersons(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Person list</h1>
      {persons.map((person) => {
        return (
          <div className="person-list">
            <div className="person">
              <div className="user">
                <h2>{person.name}</h2>
                <img src={user} alt="User" width={60}></img>
              </div>
              <div>
                <p>CPF: {person.cpf}</p>
                <p>E-mail: {person.email}</p>
                <p>Birthday: {person.birthday}</p>
                <p>Nationality: {person.nationality}</p>
                <p>Created at: {person.createdAt}</p>
                <p>Updated at: {person.updatedAt}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Person;
