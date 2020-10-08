import React from 'react';
import c from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"></img>
            </div>
            <div className={c.descriptionBlock}>Ava + description</div>
        </div>
    );
};

export default ProfileInfo; 