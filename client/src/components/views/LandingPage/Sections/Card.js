import React from 'react'

function Card(props) {

    console.log(props)

    const renderWriter = () => {
        return props.bookReport.writer.name;
    }

    const renderTags = () => {
        const listItems = props.bookReport && props.bookReport.tag.map((item, index) => (
            <div key={index} style={{ width:'fit-content', padding:'2px 7px', color:'slateblue', borderRadius:'6px', background:'lightgray' }}>{item}</div>
        ))

        return listItems
    }

    const renderPlot = () => {
        return props.bookReport.plot;
    }

    return (
        <a href={`/bookReport/${props.bookReport._id}`} style={{ textDecoration:'none', color:'rgba(0, 0, 0, 0.65)' }}>
        <div style={{ width:'270px', height:'290px', display:'grid', gridTemplateRows:'200px auto' }}>
            <div style={{ display:'flex', justifyContent:'center', alignItems:'center', background:'lightgray', borderRadius:'7px' }}>
                image
            </div>
            <div style={{ display:'grid', padding:'0 4px' }}>
                <div style={{ fontSize:'1.1rem', fontWeight:'800', color:'blueviolet' }}>{props.bookReport.title}</div>
                <div>{renderWriter()}</div>
                <div style={{ display:'flex', gap:'5px' }}>{renderTags()}</div>
                <div style={{ hiehgt:'40px', overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis' }}>{renderPlot()}</div>
            </div>
        </div>
        </a>
    )
}

export default Card
