const USER = require("../models/users");

exports.postAddUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  USER.create({
    name: name,
    email: email,
    password: password,
  })
    .then((result) => {
      console.log("User Signed Up")
    })
    .catch((err) => {
      console.log(err);
    });
};
