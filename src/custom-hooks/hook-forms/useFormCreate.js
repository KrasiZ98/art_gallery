import { useContext, useState } from "react";
import { createValidation } from "../../components/create-page/createValidation";
import { GalleryContext } from "../../context/GalleryContext";
import { AuthContext } from "../../context/AuthContext";

export default function useFormCreate() {

    const { createGallery } = useContext(GalleryContext);
    const { user } = useContext(AuthContext);

    const [value, setValue] = useState({
        title: '',
        painting_tech: '',
        picture: '',
        certificate: '',
        author: user.email,
        _ownerId: user._id
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
        const error = createValidation(value);
        setFormError(error);

        if (Object.values(error).every(x => x === '') && Object.values(value).every(x => x !== '')) {
            createGallery(value)
            setValue({ title: '', painting_tech: '', picture: '', certificate: '', })
        }

    }

    return { value, formError, onChange, onSubmit };
}