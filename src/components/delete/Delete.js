import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { GalleryContext } from "../../context/GalleryContext";
import { AuthContext } from "../../context/AuthContext";
import useGetById from "../../custom-hooks/hook-request/useGetById";

export const Delete = () => {
    const { deleteGallery } = useContext(GalleryContext);
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const [gallery, setGallery] = useGetById(id, []);

    if (gallery._ownerId !== user._id) {
        return <h1 style={{color: 'red'}}>You are not the owner</h1>
    }

    const choice = window.confirm('Are tou sure to want to delete this post?');

    if (choice) {
        deleteGallery(id);
    } else {
        navigate(`/details/${id}`)
    }
}