import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok) {
                    throw Error('Could not fetch datas for that resource.')
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(error => {
                    setError(error.message);
                    setIsPending(false);
                });
        }, 1000);
    }, [])

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
        </div>
     );
}

export default Home;