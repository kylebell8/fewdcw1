const nedb = require("nedb");

class Orders {
  constructor(orderFilePath) {
    console.log(orderFilePath);
    if (orderFilePath) {
      this.order = new nedb(orderFilePath);
      console.log("order connected to " + orderFilePath);
      orderFilePath;
    } else {
      this.order = new nedb();
    }
  }

  getAllEntries() {
    return new Promise((resolve, reject) => {
      this.order.find({}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function all() returns: ", entries);
        }
      });
    });
  }

  addEntry(order, id) {
    var entry = {
      order: order,
      id: id,
    };
    return new Promise((resolve, reject) => {
      this.order.insert(entry, function (err, doc) {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  }
}
module.exports = Orders;
