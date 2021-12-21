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
                console.log(response)
            })
    }

    const renderCards = Books.map((book, index) => {
        return <div>book.title</div>
    })

    return (
        <div>
            {renderCards}
        </div>
    )
}

export default LandingPage
