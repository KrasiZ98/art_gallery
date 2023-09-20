import { useEffect, useState } from "react";

export default function useGetById(id, defaultValue) {
    const [gallery, setGallery] = useState(defaultValue);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/gallery/' + id)
            .then((respone) => respone.json())
            .then((result) => setGallery(result))
            .catch((error) => console.log(error.message))
    }, [id]);

    return [gallery, setGallery];
}