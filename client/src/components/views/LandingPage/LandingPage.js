import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Sections/Card'

function LandingPage() {

    const [BookReports, setBookReports] = useState([])
    const [Limit, setLimit] = useState(8)
    const [Skip, setSkip] = useState(0)

    useEffect(() => {
        let body = {
            skip: Skip,
            limit: Limit 
        }

        getBookReports(body)

    }, [])

    const getBookReports = (body) => {
        Axios.post('/api/bookReport/bookReports', body)
            .then(response => {
                if (response.data.success) {
                    setBookReports(response.data.bookReportInfo)
                } else {
                    alert('독후감 정보를 가져오는데 실패했습니다');
                }
            })
    }

    const renderCards = BookReports.map((bookReport, index) => {
        return <Card key={index} book={bookReport} />
    })

    return (
        <section style={{ height:'100%', width:'100vw', padding:'15px 25px', display:'flex', gap:'30px' }}>
            {renderCards}
        </section>
    )
}

export default LandingPage
