import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                    src="andrei-kiselev.ru/img/irman1.jpg"
                    alt=""
                    name="Scott"
                     />
            <Palette />
        </div>
    )
}

export default Profile;