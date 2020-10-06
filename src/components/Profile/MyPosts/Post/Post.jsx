import React from 'react';
import c from './Post.module.css'

const Post = (props) => {
    return (
        <div className={c.posts}>
            <div className={c.item}>
                <img alt='' src='https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg'></img>
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