import React from 'react';
import c from './Post.module.css'

const Post = (props) => {
    return (
        <div className={c.posts}>
            <div className={c.item}>
                <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5Ym7CMCLwsFyEPb0qXA3i6JWvxUItt9OwtA&usqp=CAU'></img>
                <div>
                    <span>{props.message}</span>
                </div>
                <div>
                    <span>Like</span> {props.numLike}
                </div>
            </div>
        </div>
    );
};

export default Post; 