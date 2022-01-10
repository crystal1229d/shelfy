import React from 'react'
import css from './BookInfo.css'

function BookInfo(props) {

    const renderGenres = () => {
        console.log(props.book)
        const listItems = props.book && props.book.genre.map((item, index) => (
            <div key={index} style={{ width:'fit-content', padding:'2px 7px', color:'slateblue', borderRadius:'6px', background:'lightgray' }}>{item}</div>
        ))

        return listItems
    }

    return (
        <div className='wrapper'>
            <div>제목</div>
            <div className='content'>{props.book.title}</div>
            <div>작가</div>
            <div className='content'>{props.book.author}</div>
            <div>장르</div>
            <div className='content'>{props.book && renderGenres}</div>
            <div>줄거리</div>
            <div className='content'>{props.book.plot}</div>
        </div>
    )
}

export default BookInfo
