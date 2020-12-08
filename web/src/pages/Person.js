import React, { useState, useEffect } from "react";

import api from "../services/api";

function Person() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    api.get("/person").then((res) => {
      setPersons(res.data);
    });
  }, []);

  console.log(persons);

  return <h1>Person</h1>;
}

export default Person;
