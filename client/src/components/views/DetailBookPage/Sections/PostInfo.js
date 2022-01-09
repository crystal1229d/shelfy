import React from 'react'
import './PostInfo.css'

function PostInfo(props) {

    const beautifyDate = (fullDate) => {
        console.log(fullDate) // 2021-12-16T17:32:24.213Z
        let date = `${fullDate.substr(0, 4)}년 ${fullDate.substr(5, 2)}월 ${fullDate.substr(8, 2)}일`
        let time = fullDate.substr(11, 5)
        return date
    }

    return (
        <div className='profile'>
            <div className='image'><img src={props.post.writer && props.post.writer.image} alt='writer' /></div>
            <div className='name'>{props.post.writer && props.post.writer.name}</div>
            <div className='email'>{props.post.writer && props.post.writer.email}</div>
            <div className='date-create'>{props.post.createdAt && beautifyDate(props.post.createdAt)}</div>
            {/* <div className='date-update'>{props.post.updatedAt && beautifyDate(props.post.updatedAt)}</div> */}
        </div>
    )
}

export default PostInfo