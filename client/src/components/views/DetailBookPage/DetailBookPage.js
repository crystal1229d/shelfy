import Axios from 'axios'
import React, { useEffect, useState } from 'react'

function DetailBookPage(props) {
    const BookId = props.match.params.bookId
    const [Book, setBook] = useState({})

    useEffect(() => {
        getBookDetail()
        console.log(Book)
    }, [])

    const getBookDetail = () => {
        Axios.get(`/api/book/books_by_id?id=${BookId}&type=single`)
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    setBook(response.data.bookInfo[0])
                } else {
                    alert('책 정보를 가져오는데 실패했습니다')
                }
            })
            .catch(err => alert(err))
    }

    return (
        <div>
            DetailBookPage
            <div>{Book.title}</div>
            <div>{Book.author}</div>
            <div>{Book.genre}</div>
        </div>
    )
}

export default DetailBookPage