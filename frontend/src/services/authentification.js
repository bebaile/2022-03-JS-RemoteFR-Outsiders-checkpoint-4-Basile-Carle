import api from "@services/axios";

const authentification = (email, password) => {
  const ENDPOINT = "/auth";
  const connect = async () => {
    try {
      const result = api.post(ENDPOINT, { email, password });
      console.error(result);
    } catch (error) {
      console.error(error);
    }
  };
  connect();
};

const deconnexion = () => {};

export { authentification, deconnexion };
