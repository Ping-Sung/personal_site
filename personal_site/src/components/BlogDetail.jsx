/* eslint-disable no-unused-vars */
import React from 'react'
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import Comments from '../components/Comments'

import '../css/blogDetail.css'

export default function BlogDetail() {

    // get ID from url
    const blogID = useParams().id
    // console.log(blogID)

    const endpoint = "http://localhost:8000/api/diary/mixins/" + blogID + '/'
    const [isEdit, setIsEdit] = React.useState(false)
    const [blogDetail, setBlogDetail] = React.useState({})
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = React.useState(localStorage.getItem("authenticated"));
    React.useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setIsAuthenticated(loggedInUser);
        }
        console.log('detail isAuthenticated', isAuthenticated)
    }, []);


    // Get detail by ID
    function getBlogDetail() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(params)
        };
        fetch(endpoint, requestOptions).then(res => res.json()).then(data => {
            setBlogDetail(data)
        })
            .catch(err => console.log(err))
        // console.log('run get', blogs)
    }


    React.useEffect(() => {
        getBlogDetail()
    }
        , [])
    // console.log('detail ', blogDetail)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(blogDetail.title)
        console.log(blogDetail.content) // string
        const formData = {
            'title': blogDetail.title,
            'content': blogDetail.content
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        // 欠 authentication
        fetch(endpoint, requestOptions).then(res => {
            res.json()
            // redirect to /Blogs
            setIsEdit(false)
            // window.location.href = "/Blogs/" + blogID + '/'
            navigate("/Blogs/" + blogID + '/');
        })
            .catch(err => console.log(err))
        // props.createStudent(formData)
        // .then(data => console.log(data)); 
        // console.log(formData)
    }

    function handleChange(event) {
        console.log(event.target.value)
        setBlogDetail(prev => {
            return {
                ...prev,
                'title': event.target.value
            }
        })

    }

    

    return (
        <div className='blog-detail' data-color-mode="light">
            {
                (isEdit) ?
                    <div className="diary-form" >
                        <h1>Edit Diary</h1>

                        <form onSubmit={handleSubmit}>
                            <input
                                className='diary-title'
                                type="text"
                                placeholder="Type the title here"
                                onChange={handleChange}
                                name="title"
                                value={blogDetail.title}
                            />

                            <MDEditor
                                value={blogDetail.content}
                                onChange={(val) => setBlogDetail(prev => {
                                    return {
                                        ...prev,
                                        'content': val
                                    }
                                })}
                            />
                            <div className='diary-btns'>
                                <button type="button" className='edit-btn btn-cancel' onClick={() => setIsEdit(false)}>Cancel</button>
                                <button className='edit-btn'>save</button>
                            </div>

                        </form>
                    </div>
                    :
                    <div className='blog-detail-content'>
                        <h1>{blogDetail.title}</h1>
                        <p>{blogDetail.date}</p>
                        <MDEditor.Markdown source={blogDetail.content} style={{ whiteSpace: 'pre-wrap' }} />
                        <Comments />
                        {isAuthenticated && <button className='edit-btn' onClick={() => setIsEdit(true)}>Edit</button>}
                    </div>

            }

            {
                !isEdit &&
                <div className='back-link'>
                    <a href={'/Blogs'}>&#8592; Back</a>
                </div>
            }
        </div>
    );

}