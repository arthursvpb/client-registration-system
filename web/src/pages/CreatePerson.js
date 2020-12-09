import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/api";

import '../styles/pages/createPerson.css'

function CreatePerson() {
  const history = useHistory();

  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");

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
      await api.post("/person", data).then();
      alert("Success");
    } catch (err) {
      alert("Error");
    }

    history.push("/person");
  }

  return (
    <div id="page-create-person">
      <h1>Create Person</h1>
      <main>
        <form onSubmit={handleSubmit} className="create-person-form">
          <fieldset>
            <legend>Data</legend>

            <label htmlFor="name">Name</label>
            <input
              className="input-block"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="cpf">CPF</label>
            <input
              className="input-block"
              id="cpf"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
            />

            <label htmlFor="birthday">birthday</label>
            <input
              className="input-block"
              id="birthday"
              value={birthday}
              placeholder="Ex: YYYY-MM-DD"
              onChange={(event) => setBirthday(event.target.value)}
            />

            <label htmlFor="email">E-mail</label>
            <input
              className="input-block"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="nationality">Nationality</label>
            <input
              className="input-block"
              id="nationality"
              value={nationality}
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

export default CreatePerson;
