import React from 'react'

function Card(props) {

    const renderAuthors = () => {
        return props.book.author[0];
    }

    const renderGenres = () => {
        props.book && props.book.genre.map((item) => (
            <div>{item}</div>
        ));
    }

    return (
        <div style={{ width:'270px', height:'290px', display:'grid', gridTemplateRows:'200px auto' }}>
            <div style={{ display:'flex', justifyContent:'center', alignItems:'center', background:'lightgray', borderRadius:'7px' }}>
                image
            </div>
            <div style={{ display:'grid', padding:'0 4px' }}>
                <div style={{ fontWeight:'800', color:'blueviolet' }}>{props.book.title}</div>
                <div>{renderAuthors()}</div>
                <div>{renderGenres()}</div>
                <div>{props.book.plot}</div>
            </div>
        </div>
    )
}

export default Card
