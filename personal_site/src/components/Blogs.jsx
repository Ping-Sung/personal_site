/* eslint-disable no-unused-vars */
import React from 'react'
import '../css/blogs.css'
import RemovalModal from './RemovalModal'
import { useNavigate } from 'react-router-dom'

function Blogs() {
    const navigate = useNavigate();
    const endpoint = "http://localhost:8000/api/diary/mixins/"
    const [blogs, setblogs] = React.useState([])
    const [isAuthenticated, setIsAuthenticated] = React.useState(null);
    React.useEffect(() => {
        getBlogs()
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setIsAuthenticated(loggedInUser);
        }
        console.log('blogs isAuthenticated', isAuthenticated)
    }, []);


    function getBlogs() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(params)
        };
        fetch(endpoint, requestOptions).then(res => res.json()).then(data => {
            setblogs(data)
        })
            .catch(err => console.log(err))
        // console.log('run get', blogs)
    }


    function deleteBlog(blog_id) {
        console.log('delete', blog_id)
        const requestOptions = {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + isAuthenticated,
            },
            // body: JSON.stringify(formData)
        };
        // 欠 authentication
        const del_url = endpoint + blog_id
        console.log(del_url)
        fetch(del_url, requestOptions).then(res => {

            console.log('delete success')
            // redirect to /Blogs
            // navigate('/Blogs')
            window.location.href = "/Blogs"
        })
            .catch(err => console.log(err))
    }

    // console.log('blogs', blogs)

    // display the blogs 
    return (
        <div className="blogs">
            <h1>Here is my Blogs</h1>
            {
                blogs.length > 0 ?
                    blogs.map((blog) => (
                        <div className="blog-el" key={blog.id}>
                            <div className='blog-el-head'>
                                <h2 className="blog-title">{blog.title}</h2>
                                <p className="blog-create-date">{blog.date}</p>
                            </div>
                            <div className='blog-content'>
                                <p>{blog.content}</p>
                            </div>
                            <a href={'Blogs/' + blog.id + '/'}>see more...</a>
                            {
                                isAuthenticated &&
                                <RemovalModal
                                    pk={blog.id}
                                    deleteBlog={deleteBlog}
                                />
                            }
                        </div>
                    ))
                    :
                    <p>There are no blogs yet.</p>
            }
        </div>
    )
}

export default Blogs