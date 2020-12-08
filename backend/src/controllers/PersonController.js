const database = require("../database/connection");

const PersonController = {
  async index(req, res) {
    try {
      const persons = await database.select("*").table("Person");
      return res.json(persons);
    } catch (err) {
      res.json(err);
    }
  },

  async create(req, res) {
    const { cpf, name, email, birthday, nationality } = req.body;

    try {
      await database
        .insert({
          cpf,
          name,
          email,
          birthday,
          nationality,
          createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
        })
        .table("Person");
      return res.json({ message: "Successfully created person." });
    } catch (err) {
      res.json(err);
    }
  },

  async show(req, res) {
    const { id } = req.params;

    const person = await database.select("*").table("Person").where({ id: id });
    return res.json(person);
  },

  async update(req, res) {
    const { id } = req.params;
    const { cpf, name, email, birthday, nationality } = req.body;

    try {
      await database
        .where({ id: id })
        .update({
          cpf: cpf,
          name: name,
          email: email,
          birthday: birthday,
          nationality: nationality,
          updatedAt: new Date().toISOString().slice(0, 19).replace("T", " "),
        })
        .table("Person");

      res.json({ message: "Successfully updated person" });
    } catch (err) {
      res.json(err);
    }
  },

  async destroy(req, res) {
    const { id } = req.params;

    try {
      await database.where({ id: id }).del().table("Person");
      res.json({ message: "Successfully removed person." });
    } catch (err) {
      res.json(err);
    }
  },
};

module.exports = PersonController;
