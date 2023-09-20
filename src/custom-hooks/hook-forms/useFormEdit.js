import { useContext, useEffect, useState } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import { editValidation } from "../../components/edit-page/editValidation";
import ErrorBoundary from "../../components/error-boundary/ErrorBoundary";

export default function useFormEdit() {

    const { updateGallery, galleries } = useContext(GalleryContext);
    const { user } = useContext(AuthContext);
    const { id } = useParams();

    const currentGallery = galleries.find(x => x._id === id);

    useEffect(() => {
        if (user._id !== currentGallery._ownerId) {
            return <ErrorBoundary />
        }
    })

    const [value, setValue] = useState({
        title: currentGallery.title,
        painting_tech: currentGallery.painting_tech,
        picture: currentGallery.picture,
        certificate: currentGallery.certificate,
        author: user.email,
        _ownerId: user._id,
        _id: currentGallery._id
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
        const error = editValidation(value);
        setFormError(error);

        if (Object.values(error).every(x => x === '') && Object.values(value).every(x => x !== '')) {
            updateGallery(id, value)
            setValue({ title: '', painting_tech: '', picture: '', certificate: '', })
        }

    }

    return { value, formError, onChange, onSubmit };
}