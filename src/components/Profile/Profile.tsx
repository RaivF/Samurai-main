import React from 'react';
import s from './Profile.module.css'
import Post from '../MyPosts/Post/Posts'

const Profile = () => {
    return (
        <div className={s.content}>
            <img
                src="https://www.100hdwallpapers.com/wallpapers/1920x1200/snow_blue_eye_leopard-widescreen_wallpapers.jpg"
                alt=""/>
            <div>
                ava
            </div>
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Add</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="hi how are you"/>
                <Post message="hi iam fine"/>

            </div>
        </div>
    )
}
export default Profile