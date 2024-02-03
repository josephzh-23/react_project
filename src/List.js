// 

import { useState } from "react";

function List() {


    
    const { cool, notcool } = [1, 2]
    console.log(cool);
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete() = 

    return (
        <div className="home" style={{ textAlign: "center" }}>


            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={handleDelete(blog.id)}></button>
                </div>
            ))}
        </div>
    );
}

// And then using this youw oudl have maybe 1 or 2 items in the least 
// and that's a lot better then not having any? 
export default List;