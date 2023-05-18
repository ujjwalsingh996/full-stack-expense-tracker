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
      console.log("User Signed Up");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  USER.findOne({ where: { email: email } })
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "User not found" });
      } else {
        if (user.password === password) {
          res.status(200).json({ message: "Login successful" });
        } else {
          res.status(401).json({ message: "Incorrect password" });
        }
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    });
};
