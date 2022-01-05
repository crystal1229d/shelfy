import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookImage from './Sections/BookImage'
import BookInfo from './Sections/BookInfo'
import PostInfo from './Sections/PostInfo'

function DetailBookPage(props) {
    const BookId = props.match.params.bookId
    const [Book, setBook] = useState({})

    useEffect(() => {
        getBookDetail()
    }, [])

    const getBookDetail = () => {
        Axios.get(`/api/book/books_by_id?id=${BookId}&type=single`)
            .then(response => {
                if (response.data.success) {
                    setBook(response.data.bookInfo[0])
                } else {
                    alert('책 정보를 가져오는데 실패했습니다')
                }
            })
            .catch(err => alert(err))
    }

    return (
        <div style={{ width:'calc(100vw - 25%)', minWidth:'100vw', margin:'30px auto', height:'fit-content' }}>
            DetailBookPage
            <PostInfo post={Book} />
            <BookImage book={Book} />
            <BookInfo book={Book} />
        </div>
    )
}

export default DetailBookPage