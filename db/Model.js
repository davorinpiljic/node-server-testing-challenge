const db = require("../dbConfig.js");

module.exports = {
  add,
  remove
};

function add(user) {
  return db("database").insert(user);
}

function remove(id) {
  return db("database").where(id);
}
