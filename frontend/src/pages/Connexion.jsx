import React, { useEffect, useState } from "react";
import "@styles/Connexion.css";

export default function Connexion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [formData, setFormData] = useState({
    name,
    email,
    password,
  });

  useEffect(() => {
    setFormData({
      name,
      email,
      password,
    });
  }, [name, email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.error(formData);
  };

  const nameChange = (e) => {
    console.error(e.target.value);
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const passwordCheckChange = (e) => {
    setPasswordCheck(e.target.value);
  };

  return (
    <div className="main-connexion">
      <h1>Formulaire d'inscription</h1>
      <form
        action=""
        method="post"
        className="formulaire"
        onSubmit={handleSubmit}
      >
        <div className="user-creation-form">
          <div>
            <label htmlFor="name">
              <span>Nom : </span>
            </label>
          </div>
          <div>
            <input type="text" name="name" id="name" onChange={nameChange} />
          </div>
        </div>
        <div className="user-creation-form">
          <div>
            <label htmlFor="email">
              <span>Email : </span>
            </label>
          </div>
          <div>
            <input type="text" name="email" id="email" onChange={emailChange} />
          </div>
        </div>
        <div className="user-creation-form">
          <div>
            <label htmlFor="password">
              <span>Créez un mot de passe : </span>
            </label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={passwordChange}
            />
          </div>
        </div>
        <div className="user-creation-form">
          <div>
            <label htmlFor="password-check">
              <span>Vérifiez votre mot de passe : </span>
            </label>
          </div>
          <div>
            <input
              type="password"
              name="password-check"
              id="password-check"
              onChange={passwordCheckChange}
            />
          </div>
        </div>
        <div className="button-submit">
          <button type="submit" className="button-blue">
            Créer un compte
          </button>
        </div>
      </form>
    </div>
  );
}
