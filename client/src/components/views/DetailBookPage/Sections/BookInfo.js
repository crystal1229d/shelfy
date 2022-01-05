import React from 'react'

function BookInfo(props) {
    console.log(props)
    return (
        <div style={{ width:'340px', height:'200px', margin:'0 auto' }}>
            <div>제목</div>
            <div>{props.book.title}</div>
            <div>작가</div>
            <div>{props.book.author}</div>
            <div>장르</div>
            <div>{props.book.genre}</div>
        </div>
    )
}

export default BookInfo
