import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"></img>
            </div>
            <div>Ava</div>
            <MyPosts />
        </div>
    );
};

export default Profile; 