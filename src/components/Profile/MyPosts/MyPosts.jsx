import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={c.postBlock}>
            <h3>My post</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={c.posts}>
                <Post message='Hi, how are you?' numLike='15' />
                <Post message="It's my first post" numLike='10' />
            </div>
        </div>
    );
};

export default MyPosts; 