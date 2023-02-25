import React from 'react';
import s from './Post.module.css'
type PropsPostType ={
    message:string
}
const Post = (props:PropsPostType) => {
    return (
        <div className={s.post}>
            <div>
                <img src="https://android-obzor.com/wp-content/uploads/2022/03/28e4ac42f547e6ac0f50f7cfa916ca93.jpg" alt=""/>
                {props.message}
            </div>
            <span>like</span>
        </div>
    )
}
export default Post