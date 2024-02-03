// 

import { useEffect, useState } from "react";

function List() {

    const [error, setError] = useState(null)

    const { cool, notcool } = [1, 2]
    console.log(cool);
    const [blogs, setBlogs] = useState(null)

    // Would this filtering work here?
    const handleDelete = (id) => {

        const newBlogs = blogs.filter(b => b.id !== id)

        setBlogs(newBlogs);
    }


    useEffect(() => {

        fetch('http://localhost:8000/blogs', { mode: 'cors' }).then(
            res => {

                // Need to guard this one here a little in case of an error
                if (!res.ok) {
                    throw Error("an error has happened")
                }
                return res.json()
            }
        ).then(res => {


            setBlogs(res)

        }).catch((err) => {
            console.log("the error is ", err);
            setError(err.message)

        })
    }, [])

    return (
        <div className="home" style={{ textAlign: "center" }}>
     
            {error && <div> {error } </div>}
            {/* This makes sure conditional rendering evaluate the left one first */}
     
     
            {blogs && blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p style={{ display: "inline", margin: "0 20px" }}>Written by {blog.author}</p>
                    <button style={{ display: "inline" }} onClick={() => handleDelete(blog.id)}>Delete this line
                    </button>
                </div>
            ))}
        </div>
    );
}

// And then using this youw oudl have maybe 1 or 2 items in the least 
// and that's a lot better then not having any? 
export default List;