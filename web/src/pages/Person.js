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
    <div id="title">
      <h1>Person list</h1>
      <a href="/person/new" id="enter-create-person">
        Create new person
      </a>
      {persons.map((person) => {
        return (
          <div className="person-list">
            <div className="person">
              <div className="user">
                <h4>{person.name}</h4>
                <img src={user} alt="User" width={60}></img>
              </div>
              <div>
                <p><b>ID:</b> {person.id}</p>
                <p><b>CPF:</b> {person.cpf}</p>
                <p><b>E-mail:</b> {person.email}</p>
                <p><b>Birthday:</b> {person.birthday}</p>
                <p><b>Nationality:</b> {person.nationality}</p>
                <p><b>Created at:</b> {person.createdAt}</p>
                <p><b>Updated at:</b> {person.updatedAt}</p>
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
