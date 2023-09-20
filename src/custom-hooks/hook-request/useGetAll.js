import { useEffect, useState } from "react";

export default function useGetAll(defaultValue) {
    const [galleries, setGalleries] = useState(defaultValue);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/gallery')
            .then((respone) => respone.json())
            .then((result) => setGalleries(Object.values(result)))
            .catch((error) => console.log(error.message))
    }, [])

    return [galleries, setGalleries];
}