import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { getComments, getPost } from '../../Services/PostsService';
import CommentList from '../CommentList/CommentList';
import loadingImg from "../../Assets/loading.gif"
import "./PostDetail.css"

const PostDetail = () => {
    const { id } = useParams()
    const [ post, setPost ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ commentsList, setCommentsList ] = useState(null)
    const [ commentsLoading, setCommentsLoading ] = useState(true)

    useEffect(() => {
        getPost(id)
        .then((post) => setPost(post))
    }, [id])

    useEffect (() => {
        if(post) {
            setLoading(false)
        }
    }, [post])

    useEffect (() => {
        getComments(id)
        .then((commentsArr) => {
            setCommentsList(commentsArr)
        })
    }, [id])

    useEffect (() => {
        if(commentsList) {
            setCommentsLoading(false)
        }
    }, [commentsList])

    return (
        loading ? <img style={{width: "200px"}} src={loadingImg}/> :
        <div className="PostDetail container">
            <div className="PostDetail__body col-8">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            {commentsLoading ? 
                <>
                    <img style={{width: "200px"}} src={loadingImg}/>
                    <p>Loading comments</p>
                </> :
                    <CommentList comments={commentsList}/>
            }
        </div>
    );
};

export default PostDetail;