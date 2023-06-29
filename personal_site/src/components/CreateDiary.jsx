/* eslint-disable no-unused-vars */
import React from 'react'
import MDEditor from '@uiw/react-md-editor';
import '../css/createDiary.css'
import { useNavigate } from "react-router-dom";



export default function CreateDiary() {

    const endpoint = "http://localhost:8000/api/diary/mixins/"
    const [content, setContent] = React.useState("**Hello world!!!**");
    const [title, setTitle] = React.useState("");
    const [isAuthenticated, setIsAuthenticated] = React.useState(null);
    React.useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setIsAuthenticated(loggedInUser);
        }
    }, []);

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault()
        console.log(title)
        console.log(content) // string
        const formData = {
            'title': title,
            'content': content
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        // 欠 authentication
        fetch(endpoint, requestOptions).then(res => {
            res.json()
            // redirect to /Blogs
            navigate("/Blogs");
        })
            .catch(err => console.log(err))
        // props.createStudent(formData)
        // .then(data => console.log(data)); 
        // console.log(formData)
    }

    function handleChange(event) {
        console.log(event.target.value)
        setTitle(event.target.value)
    }

    // React.useEffect(() => !isAuthenticated && navigate("/Blogs"), []);


    return (

        <div className="diary-form" data-color-mode="light">
            <h1>New Diary</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className='diary-title'
                    type="text"
                    placeholder="Type the title here"
                    onChange={handleChange}
                    name="title"
                    value={title}
                />

                <MDEditor
                    value={content}
                    onChange={setContent}
                />
                {/* <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} /> */}
                <button className='diary-btn'>save</button>
            </form>
        </div>
    );

}
