// Controller takes route requests, calls functions within the models, which utilize SQL commands from the ORM.
// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let budget = {
  all: function (cb) {
    orm.all("expenses_budgeted", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("expenses_budgeted", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("expenses_budgeted", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("expenses_budgeted", condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (expenseController.js).
module.exports = budget;
