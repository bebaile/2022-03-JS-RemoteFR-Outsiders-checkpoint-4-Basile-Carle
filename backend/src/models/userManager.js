const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${userManager.table} (name) values (?)`,
      [user]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${userManager.table} set title = ? where id = ?`,
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

module.exports = userManager;
