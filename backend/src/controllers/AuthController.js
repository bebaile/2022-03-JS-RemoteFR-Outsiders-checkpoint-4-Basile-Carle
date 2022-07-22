const models = require("../models");
const {
  hashPassword,
  verifyPassword,
  createToken,
} = require("../helpers/auth");

class AuthController {
  static session = (req, res) => {
    const { email, password } = req.body;

    // find  hashedpassword from provided email
    models.users.findByEmail(email).then((result) => {
      if (result[0].length === 1) {
        verifyPassword(password, result[0][0].password).then((isVerified) => {
          if (isVerified) {
            const { idusers, name } = result[0][0];
            const payload = { idusers, name, email };
            const token = createToken(payload);
            console.error(token);
            res
              .status(201)
              .cookie("mygreentoken", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
              })
              .json({
                message: "Authentification réussie",
                idusers,
                name,
                email,
              });
          }
        });
      }
    });
  };
}

//   console.error(result[0].password);
//     verifyPassword(password, result[0].password).then((isVerified) => {
//       if (isVerified) {
// const { idusers, name } = result[0];
// const payload = { idusers, name, email };
// const token = createToken(payload);
// console.error(token);
// création de token ...
// ... puis création de cookie
// res.status(200).send("email et mot de passe correspondent");
//   } else {
//     res.status(401).send("Erreur de mot de passe ou login");
//   }
// });
//   } else {
//     res.status(404).send("User not found");
//   }

module.exports = AuthController;
