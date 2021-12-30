import React from 'react'

function Card(props) {

    const renderAuthors = () => {
        return props.book.author[0];
    }

    const renderGenres = () => {

        console.log('props.book', props.book)
        return props.book.genre[0];
        // props.book && props.book.genre.map((item) => {
        //     console.log('item', item)
        //     return <div>{item}</div>
        // })

        // props.book && props.book.genre.map((item) => (
        //     <div>{item}</div>
        // ))

        // props.book && props.book.map((genre) => {
        //     console.log('item', genre)
        //     return <div>{genre}</div>
        // })
        
    }

    const renderPlot = () => {
        return props.book.plot;
    }

    return (
        <a href={`/book/${props.book._id}`} style={{ textDecoration:'none', color:'rgba(0, 0, 0, 0.65)' }}>
        <div style={{ width:'270px', height:'290px', display:'grid', gridTemplateRows:'200px auto' }}>
            <div style={{ display:'flex', justifyContent:'center', alignItems:'center', background:'lightgray', borderRadius:'7px' }}>
                image
            </div>
            <div style={{ display:'grid', padding:'0 4px' }}>
                <div style={{ fontWeight:'800', color:'blueviolet' }}>{props.book.title}</div>
                <div>{renderAuthors()}</div>
                <div>{renderGenres()}</div>
                <div>{renderPlot()}</div>
            </div>
        </div>
        </a>
    )
}

export default Card
