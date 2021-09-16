import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { getPosts } from '../../Services/PostsService';
import "./Home.css"
import loadingImg from "../../Assets/loading.gif"

const Home = () => {

    const [ posts, setPosts ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect (() => {
        getPosts()
        .then((posts) => {
            setPosts(posts)
        })
    }, [])

    useEffect (() => {
        if(posts) {
            setLoading(false)
        }
    }, [posts])

    return (
        <div className="Home container">
            {loading ?
                <img style={{width: "200px"}} src={loadingImg}/> :
                <>
                    <h1>Posts</h1>
                    <div className="Home__body row row-cols-1 row-cols-md-3 g-4">
                        {posts.map((post) => {
                            return (
                                <div className="col" key={post.id}>
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">{post.title}</h5>
                                            <p className="card-text">{post.body}</p>
                                            <Link to={`/${post.id}`} className="card-link"><button className="btn btn-primary">See detail</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            }
        </div>
    );
};

export default Home;