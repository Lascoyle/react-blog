import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setDatas] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
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
                    if (error.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setError(error.message);
                        setIsPending(false);
                    }
                });
        }, 1000);

        return () => abortController.abort();

    }, [url])

    return { data, isPending, error}
}

export default useFetch;