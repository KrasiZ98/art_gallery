import { createContext, useState } from "react";
import useLocalStoarage from "../custom-hooks/hook-localStorage/useLocalStorage";
import { useNavigate } from "react-router-dom";
import * as authServices from "../services/authServices";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const key = 'userData';

  const [auth, setAuth] = useLocalStoarage(key, []);
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();

  async function authLogin(value) {
    const result = await authServices.login(value);
    if (result.message) {
      setServerError(result.message);
      return serverError;
    }

    setAuth(result);
    navigate('/');
  }

  async function authRegister(value) {
    const result = await authServices.register(value);
    if (result.message) {
      setServerError(result.message);
      return serverError;
    }

    setAuth(result);
    navigate('/');
  }

  function authLogout() {
    localStorage.clear(key);
    setAuth({});
    navigate('/');
  }

  return (
    <AuthContext.Provider value={{ user: auth, key, serverError, authLogin, authLogout, authRegister }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;