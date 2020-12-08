import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/api";

function UpdatePerson() {
  const history = useHistory();

  const [person, setPerson] = useState([]);

  useEffect(() => {
    api.get("/person/16").then((res) => {
      setPerson(res.data[0]);
    });
  }, []);

  let cpf = person.cpf;
  let name = person.name;
  let email = person.email;
  let birthday = person.birthday;
  let nationality = person.nationality;

  console.log(person);

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      cpf,
      name,
      email,
      birthday,
      nationality,
    };

    console.log(data);

    api
      .put("/person/16", data)
      .then((res) => {
        console.log(res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });

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
            <input className="input-block" id="name" defaultValue={name} />

            <label htmlFor="cpf">CPF</label>
            <input className="input-block" id="cpf" defaultValue={cpf} />

            <label htmlFor="birthday">birthday</label>
            <input
              className="input-block"
              id="birthday"
              defaultValue={birthday}
            />

            <label htmlFor="email">E-mail</label>
            <input className="input-block" id="email" defaultValue={email} />

            <label htmlFor="nationality">Nationality</label>
            <input
              className="input-block"
              id="nationality"
              defaultValue={nationality}
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
