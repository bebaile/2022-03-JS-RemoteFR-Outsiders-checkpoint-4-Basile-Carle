const AbstractManager = require("./AbstractManager");

class usersManager extends AbstractManager {
  static table = "users";

  findByEmail(email) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
  }

  insert(id, name, email, password) {
    return this.connection.query(
      `insert into ${this.table} (idusers, name, email, password) values (?, ?, ?, ?)`,
      [id, name, email, password]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }

  deleteuser(id) {
    return this.connection.query(
      `delete from ${this.table} where iduser_places = ?`,
      [id]
    );
  }
}

module.exports = usersManager;
