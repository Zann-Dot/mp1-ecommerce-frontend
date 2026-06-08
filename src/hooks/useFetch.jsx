import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [])

    return { data, loading, error };
}
