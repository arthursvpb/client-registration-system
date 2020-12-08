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

  async function handleRemovePerson(id) {
    await api.delete(`/person/${id}`);

    setPersons(persons.filter((person) => person.id !== id));
  }

  return (
    <div>
      <h1>Person list</h1>
      <a href="/person/new" id="enter-create-person">
        Create new person
      </a>
      {persons.map((person) => {
        return (
          <div className="person-list">
            <div className="person">
              <div className="user">
                <h2>{person.name}</h2>
                <img src={user} alt="User" width={60}></img>
              </div>
              <div>
                <p>ID: {person.id}</p>
                <p>CPF: {person.cpf}</p>
                <p>E-mail: {person.email}</p>
                <p>Birthday: {person.birthday}</p>
                <p>Nationality: {person.nationality}</p>
                <p>Created at: {person.createdAt}</p>
                <p>Updated at: {person.updatedAt}</p>
                <a href={`/person/${person.id}/edit`}>Update</a>
                <button onClick={() => handleRemovePerson(person.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Person;
