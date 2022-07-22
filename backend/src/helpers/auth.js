const { v4: uuidv4 } = require("uuid");
const argon2 = require("argon2");
const jwt = require("json-web-token");
require("dotenv").config();

const createId = () => {
  const uuid = uuidv4();
  return uuid;
};

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};
const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

const verifyPassword = (plainPassword, hash) => {
  return argon2.verify(hash, plainPassword, hashingOptions);
};

// console.error(process.env.PRIVATE_KEY);

const createToken = (idusers, name, email) => {
  const DATA = { idusers, name, email };

  return jwt.encode(process.env.PRIVATE_KEY, DATA, (err, token) => {
    if (err) {
      return err;
    }
    return token;
  });
};

module.exports = { createId, hashPassword, verifyPassword, createToken };
