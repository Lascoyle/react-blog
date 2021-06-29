import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setDatas] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok) {
                    throw Error('Could not fetch datas for that resource.')
                    }
                    return res.json();
                })
                .then(data => {
                    setDatas(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(error => {
                    setError(error.message);
                    setIsPending(false);
                });
        }, 1000);
    }, [url])

    return { data, isPending, error}
}

export default useFetch;