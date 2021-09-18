import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom"
import { getPost } from '../../Services/PostsService';
import { ThemeContext } from "../../Contexts/ThemeContext";
import loadingImg from "../../Assets/loading.gif"
import "./CommentList.css"

const CommentList = ({comments}) => {

    const { toggleTheme, darkMode } = useContext(ThemeContext);

    return (
        <>
            <h3 className="CommentList__title">Comments in this post</h3>
            <div className="CommentList row row-cols-1 row-cols-md-3 g-4">
                {comments.map((comment) => {
                    return (
                        <div className="col" key={comment.id}>
                            <div className={`card h-100 ${darkMode ? "text-white bg-dark" : ""}`}>
                                <div className="card-body">
                                    <h5 className="card-title">{comment.name}</h5>
                                    <p className="card-title"><em>{comment.email}</em></p>
                                    <p className="card-text">{comment.body}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default CommentList;