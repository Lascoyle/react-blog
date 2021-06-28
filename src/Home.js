import { useState } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "Lorem ipsum...", author: "Toad", id: 1 },
        { title: "Welcome party!", body: "Lorem ipsum...", author: "Boo", id: 2 },
        { title: "Web dev top tips", body: "Lorem ipsum...", author: "Wario", id: 3 },
        { title: "Poor boy, I'm a big mushroom head...", body: "Lorem ipsum...", author: "Toad", id: 3 },
        { title: "It's holidays!", body: "Lorem ipsum...", author: "Wario", id: 5 },
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"></BlogList>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Wario' )} title="Wario's Blogs"></BlogList>
        </div>
     );
}

export default Home;