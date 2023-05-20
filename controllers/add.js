const USER = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const generateAccessToken = (id, name) => {
    return jwt.sign({userId: id, name: name}, 'secretkey')
}

exports.postAddUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, 10, async (err, hash) => {
    console.log(err);
    await USER.create({
      name: name,
      email: email,
      password: hash,
    })
      .then((result) => {
        console.log("User Signed Up");
      })
      .catch((err) => {
        console.log(err);
      });
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
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            res.status(500).json({ message: "Something Went Wrong" });
          } else if (result === true) {
            res.status(200).json({ message: "Login successful", token: generateAccessToken(user.id, user.name) });
          } else {
            res.status(401).json({ message: "Incorrect password" });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    });
};
