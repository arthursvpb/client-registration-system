import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/api";

import "../styles/pages/updatePerson.css";

function UpdatePerson() {
  const history = useHistory();

  const [person, setPerson] = useState([]);

  useEffect(() => {
    api.get("/person/16").then((res) => {
      setPerson(res.data[0]);
    });
  }, []);

  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");

  console.log(cpf, name, email, birthday, nationality);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      cpf,
      name,
      email,
      birthday,
      nationality,
    };
    try {
      await api.put("/person/16", data);
      alert("Success");
    } catch (err) {
      alert("Error");
    }

    history.push("/person");
  }

  return (
    <div id="page-update-person">
      <h1>Update Person</h1>
      <main>
        <form onSubmit={handleSubmit} className="update-person-form">
          <fieldset>
            <legend>Data</legend>

            <label htmlFor="name">Name</label>
            <input
              className="input-block"
              id="name"
              defaultValue={person.name}
              onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="cpf">CPF</label>
            <input
              className="input-block"
              id="cpf"
              defaultValue={person.cpf}
              onChange={(event) => setCpf(event.target.value)}
            />

            <label htmlFor="birthday">birthday</label>
            <input
              className="input-block"
              id="birthday"
              defaultValue={person.birthday}
              onChange={(event) => setBirthday(event.target.value)}
            />

            <label htmlFor="email">E-mail</label>
            <input
              className="input-block"
              id="email"
              defaultValue={person.email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="nationality">Nationality</label>
            <input
              className="input-block"
              id="nationality"
              defaultValue={person.nationality}
              onChange={(event) => setNationality(event.target.value)}
            />
          </fieldset>
          <button className="confirm-button" type="submit">
            Confirm
          </button>
        </form>
      </main>
    </div>
  );
}

export default UpdatePerson;
