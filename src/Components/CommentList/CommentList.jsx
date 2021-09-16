import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { getPost } from '../../Services/PostsService';
import loadingImg from "../../Assets/loading.gif"
import "./CommentList.css"

const CommentList = ({comments}) => {

    return (
        <div className="CommentList row row-cols-1 row-cols-md-3 g-4">
            {comments.map((comment) => {
                return (
                    <div className="col" key={comment.id}>
                        <div className="card h-100">
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
    );
};

export default CommentList;