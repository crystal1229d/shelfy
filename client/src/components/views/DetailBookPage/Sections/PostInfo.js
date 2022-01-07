import React from 'react'

function PostInfo(props) {

    const beautifyDate = (fullDate) => {
        console.log(fullDate) // 2021-12-16T17:32:24.213Z
        let date = `${fullDate.substr(0, 4)}년 ${fullDate.substr(5, 2)}월 ${fullDate.substr(8, 2)}일`
        let time = fullDate.substr(11, 5)
        return date
    }

    return (
        <div style={{ width:'340px', height:'120px', margin:'0 auto', display:'grid', gridTemplateColumns:'50px 150px 1fr' }}>
            <div style={{ width:'50px', height:'50px' }}><img style={{ width:'100%', borderRadius:'50%' }} src={props.post.writer && props.post.writer.image} alt='writer' /></div>
            <div>{props.post.writer && props.post.writer.name}</div>
            <div>{props.post.writer && props.post.writer.email}</div>
            <div></div>
            <div>{props.post.createdAt && beautifyDate(props.post.createdAt)}</div>
            <div>{props.post.updatedAt && beautifyDate(props.post.updatedAt)}</div>
        </div>
    )
}

export default PostInfo