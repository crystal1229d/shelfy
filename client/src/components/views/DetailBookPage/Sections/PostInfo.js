import React from 'react'

function PostInfo(props) {
    return (
        <div>
            {props.post.writer && props.post.writer.email}
            {props.post.writer && props.post.writer.name}
            {props.post.createdAt}
            {props.post.updatedAt}
        </div>
    )
}

export default PostInfo