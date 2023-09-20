import { createContext, useState } from "react";
import useGetAll from "../custom-hooks/hook-request/useGetAll";
import * as galleryServices from "../services/galleryServices";
import { useNavigate } from "react-router-dom";

export const GalleryContext = createContext();

const GalleryContextProvider = (props) => {

    const [galleries, setGalleries] = useGetAll([]);
    const [serverError, setServerError] = useState(null);

    const navigate = useNavigate();

    async function createGallery(gallery) {
        const result = await galleryServices.create(gallery);
        if (result.message) {
            setServerError(result.message);
            return serverError;
        }

        setGalleries(oldGallery => [...oldGallery, result]);
        navigate('/catalog');
    }

    async function updateGallery(id, gallery) {
        const result = await galleryServices.update(id, gallery);
        if (result.message) {
            setServerError(result.message);
            return serverError;
        }

        setGalleries(galleries.map(x => x._id === id ? result : x));
        navigate(`/details/${id}`);
    }

    async function deleteGallery(id) {
        const result = await galleryServices.remove(id);
        if (result.message) {
            setServerError(result.message);
            return serverError;
        }

        await galleryServices.remove(id);
        setGalleries(galleries.filter(x => x._id !== id))
        navigate('/catalog');
    }

    return (
        <GalleryContext.Provider value={{ galleries, serverError, createGallery, updateGallery, deleteGallery }}>
            {props.children}
        </GalleryContext.Provider>
    )
}

export default GalleryContextProvider;