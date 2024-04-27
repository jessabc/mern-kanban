import { useState } from "react";
import axios from "axios";
import useAuthContext from "./useAuthContext";

// https://codesplash.medium.com/get-environment-variable-dotenv-in-both-frontend-and-backend-mern-stack-with-vite-19c061e6dc19
// dotenv.config({
//   path: "../.env", //give .env file location
// });

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    // try {
    //   const response = await axios.post(
    //     `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
    //     { email, password }
    //   );
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
        { email, password }
      );

      dispatch({ type: "LOGIN", payload: response.data });

      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return { loading, error, login };
};

export default useLogin;
