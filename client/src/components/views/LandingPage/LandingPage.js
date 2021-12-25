import Axios from 'axios'
import React, { useEffect, useState } from 'react'

function LandingPage() {

    const [Books, setBooks] = useState([])
    const [Limit, setLimit] = useState(8)
    const [Skip, setSkip] = useState(0)

    useEffect(() => {
        let body = {
            skip: Skip,
            limit: Limit 
        }

        getBooks(body)

    }, [])

    const getBooks = (body) => {
        Axios.post('/api/book/books', body)
            .then(response => {
                if (response.data.success) {
                    setBooks(response.data.bookInfo)
                } else {
                    alert('책 정보를 가져오는데 실패했습니다');
                }
            })
    }

    const renderCards = Books.map((book, index) => {
        console.log(book, index)
        return <div key={index}>{book.title}</div>
    })

    return (
        <div>
            {renderCards}
        </div>
    )
}

export default LandingPage
