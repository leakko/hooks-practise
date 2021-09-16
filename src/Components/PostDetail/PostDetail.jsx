import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { getPost } from '../../Services/PostsService';
import loadingImg from "../../Assets/loading.gif"
import "./PostDetail.css"

const PostDetail = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        getPost(id)
        .then((post) => setPost(post))
    }, [id])

    useEffect (() => {
        if(post) {
            setLoading(false)
        }
    }, [post])

    return (
        loading ? <img style={{width: "200px"}} src={loadingImg}/> :
        <div className="PostDetail container">
            <div className="PostDetail__body col-8">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default PostDetail;