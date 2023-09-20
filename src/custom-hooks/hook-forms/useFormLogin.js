import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginValidation } from "../../components/login-page/loginValidation";

export default function useFormLogin() {

  const { authLogin } = useContext(AuthContext);

  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  const [formError, setFormError] = useState({});

  function onChange(e) {
    setValue(oldValue => ({
      ...oldValue,
      [e.target.name]: e.target.value
    }))
  }

  function onSubmit(event) {
    event.preventDefault();
    setFormError(loginValidation(value))
    
    if (Object.values(value).every(x => x !== '')) {
      authLogin(value);
      setFormError({ email: '', password: '' })
    }
  }


  return { value, formError, onChange, onSubmit };
} 