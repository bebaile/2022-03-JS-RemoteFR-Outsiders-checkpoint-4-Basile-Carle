const AbstractManager = require("./AbstractManager");

class favoriteManager extends AbstractManager {
  static table = "favorite";

  insert(favorite) {
    return this.connection.query(
      `insert into ${favoriteManager.table} (title) values (?)`,
      [favorite.title]
    );
  }

  update(favorite) {
    return this.connection.query(
      `update ${favoriteManager.table} set title = ? where id = ?`,
      [favorite.title, favorite.id]
    );
  }
}

module.exports = favoriteManager;
