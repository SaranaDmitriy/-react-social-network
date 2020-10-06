import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <span>My post</span>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                <Post message='Hi, how are you?' numLike='15' />
                <Post message="It's my first post" numLike='10' />
            </div>
        </div>
    );
};

export default MyPosts; 