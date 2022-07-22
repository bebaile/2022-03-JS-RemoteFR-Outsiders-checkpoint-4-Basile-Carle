import React, { useEffect, useState } from "react";
import "@styles/Connexion.css";
import api from "@services/axios";
import { authentification } from "@services/authentification";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isIncorrectPassword, setIsIncorrectPassword] = useState(false);
  const [isIncorrectEmail, setIsIncorrectEmail] = useState(false);
  const [hasAnAccount, setHasAnAccount] = useState(false);
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
    setHasAnAccount(false);
    e.preventDefault();
    if (password !== passwordCheck) {
      setIsIncorrectPassword(true);
      document.getElementById("password").style.border = "1px solid red";
      document.getElementById("password-check").style.border = "1px solid red";
      console.error(
        "Le mot de passe de vérification ne correspond pas au mot de passe que vous avez proposé"
      );
    }
    const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
    if (!emailRegex.test(email)) {
      setIsIncorrectEmail(true);
      document.getElementById("email").style.border = "1px solid red";
      console.error("email invalide");
    }
    if (isIncorrectPassword || isIncorrectEmail) {
      return;
    }
    const ENDPOINT = "/user";
    const createUser = async () => {
      try {
        const result = await api.post(ENDPOINT, formData);
        console.error(result);
      } catch (err) {
        console.error(err);
      }
    };
    createUser();

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

  const handleConnectPage = () => {
    setHasAnAccount(true);
    // authentification(email, password);
    if (name !== "") {
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
  };

  return (
    <div className="main-connexion">
      <h1>Inscription / connexion</h1>
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
              <span>Email : </span>{" "}
              {isIncorrectEmail ? (
                <span className="incorrect-password">email incorrect</span>
              ) : null}
            </label>
          </div>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              onChange={emailChange}
              onClick={() => {
                document.getElementById("email").removeAttribute("style");
                setIsIncorrectEmail(false);
              }}
            />
          </div>
        </div>
        <div className="user-creation-form">
          <div>
            <label htmlFor="password">
              {hasAnAccount ? (
                <span>Entrez votre mot de passe : </span>
              ) : (
                <span>Créez un mot de passe : </span>
              )}
            </label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              onClick={() => {
                document.getElementById("password").removeAttribute("style");
                setIsIncorrectPassword(false);
              }}
              onChange={passwordChange}
            />
          </div>
        </div>
        {hasAnAccount ? null : (
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
                onClick={() => {
                  document
                    .getElementById("password-check")
                    .removeAttribute("style");
                  setIsIncorrectPassword(false);
                }}
              />
            </div>
          </div>
        )}

        {isIncorrectPassword ? (
          <div className="incorrect-password">
            Mots de passes proposés différents, vérifiez les
          </div>
        ) : null}
        <div className="button-submit">
          <div>
            <button type="submit" className="button-blue">
              Créer un compte
            </button>
          </div>
          <div>
            <button
              type="button"
              className="button-orange"
              onClick={handleConnectPage}
            >
              {hasAnAccount ? "Se connecter" : "J'ai déjà un compte"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
