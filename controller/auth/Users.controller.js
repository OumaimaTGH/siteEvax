const Users = require("../../models/Users.models");
const ValidateRegister = require("../../validation/register");
const ValidateLogin = require("../../validation/login");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const gen__token = (user) => {
  const payload = {
    id: user._id,
    fullname: user.fullname,
    email: user.email,
    role: user.role
  };
  const token = jwt.sign(payload, process.env.KEY, { expiresIn: 3600 });
  return token;
};

// !custom__function

const Error__handler = (err) => {
  if (process.env.ENV_ === "development") {
    {
      message: err.message;
    }
  }
  if (process.env.ENV__ === "production") {
    {
      message: "erreur contacter nous pour plus de detail ";
    }
  }
};

module.exports = {
  Add_Admin: async (req, res) => {
    const { errors, isValid } = ValidateRegister(req.body);
    if (!isValid) {
      res.status(StatusCodes.NOT_FOUND).json(errors);
    } else {
      await Users.findOne({ email: req.body.email })
        .then((data) => {
          if (data) {
            errors.email = "Compte existe déja";
            res.status(StatusCodes.NOT_FOUND).json(errors);
          }
          var hash = bcrypt.hashSync(req.body.password, 10);
          const user = new Users({
            fullname: req.body.fullname,
            email: req.body.email,
            password: hash,
            role: 1,
          });
          user
            .save()
            .then(() =>
              res
                .status(StatusCodes.CREATED)
                .json({ message: "Enregistrement avec succès" })
            )
        })
        .catch((err) => {
          res.status(StatusCodes.NOT_FOUND).json(Error__handler(err));
        });
    }
  },
  Login: async (req, res) => {
    const { errors, isValid } = ValidateLogin(req.body);
    if (!isValid) {
      res.status(StatusCodes.NOT_FOUND).json(errors);
    } else {
      await Users.findOne({ email: req.body.email })
        .then((data) => {
          if (!data) {
            errors.email = "Le compte n'éxiste pas ";
            res.status(StatusCodes.NOT_FOUND).json(errors);
          } else {
            bcrypt.compare(req.body.password, data.password).then((isMatch) => {
              if (!isMatch) {
                errors.password = "Mot de passe incorrect ";
                res.status(StatusCodes.NOT_FOUND).json(errors);
              } else {
                req.headers.authorization = null;
                const token = gen__token(data);
                res
                  .status(StatusCodes.CREATED)
                  .json({ success: true, token: "Bearer " + token });
              }
            });
          }
        })
        .catch((err) => {
          res.status(500).json(Error__handler(err));
        });
    }
  },
};
