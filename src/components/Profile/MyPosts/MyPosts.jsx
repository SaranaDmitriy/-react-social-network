import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements =
        props.posts.map(p => <Post message={p.message} numLike={p.numLike} />);

    return (
        <div className={c.postBlock}>
            <h3>My post</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={c.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts; 