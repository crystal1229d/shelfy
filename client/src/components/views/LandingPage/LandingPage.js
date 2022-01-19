import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Sections/Card'

function LandingPage() {

    const [Books, setBooks] = useState([])
    const [Limit, setLimit] = useState(8)
    const [Skip, setSkip] = useState(0)

    useEffect(() => {
        let body = {
            skip: Skip,
            limit: Limit 
        }

        // getBooks(body)

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
        return <Card key={index} book={book} />
    })

    return (
        <section style={{ height:'100%', width:'100vw', padding:'15px 25px', display:'flex', gap:'30px' }}>
            {renderCards}
        </section>
    )
}

export default LandingPage
