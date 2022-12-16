const nedb = require("nedb");

class Menu {
  constructor(menuFilePath) {
    console.log(menuFilePath);
    if (menuFilePath) {
      this.menu = new nedb(menuFilePath);
      console.log("menu connected to " + menuFilePath);
      menuFilePath;
    } else {
      this.menu = new nedb();
    }
  }
  

  getAllEntries() {
    return new Promise((resolve, reject) => {
      this.menu.find({}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function all() returns: ", entries);
        }
      });
    });
  }
}
module.exports = Menu;
