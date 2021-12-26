import React from 'react'

function Card(props) {
    return (
        <div style={{ width:'270px', height:'290px', display:'grid', gridTemplateRows:'200px auto' }}>
            <div style={{ display:'flex', justifyContent:'center', alignItems:'center', background:'lightgray', borderRadius:'7px' }}>
                image
            </div>
            <div style={{ display:'grid', }}>
                <div>{props.book.title}</div>
                <div>{props.book.author[0]}</div>
                <div>{props.book.genre[0]}</div>
                <div>{props.book.plot}</div>
            </div>
        </div>
    )
}

export default Card
