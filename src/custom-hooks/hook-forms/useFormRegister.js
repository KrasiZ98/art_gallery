import { useContext, useState } from "react";
import { registeraValidation } from "../../components/register-page/registerValidation";
import { AuthContext } from "../../context/AuthContext";

export default function useFormRegister() {

    const { authRegister } = useContext(AuthContext);

    const [value, setValue] = useState({
        email: '',
        password: '',
        rePassword: '',
        address: '',
    });

    const [formError, setFormError] = useState({});

    function onChange(e) {
        setValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault();
        const error = registeraValidation(value);
        setFormError(error);

        if (Object.values(error).every(x => x === '') && Object.values(value).every(x => x !== '')) {
            authRegister(value);
            setValue({ email: '', password: '', rePassword: '', address: '', })
        }
    }

    return { value, formError, onChange, onSubmit };
}