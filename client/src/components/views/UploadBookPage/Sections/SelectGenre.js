import React, { useState } from 'react'

function SelectGenre(props) {

    // const [Genre, setGenre] = useState([])

    const renderGenreOptionLists = () => {
        props.list && props.list.map((value, index) => {
            // <Option value={}>Fiction</Option>
            console.log(value, index);
        })
    }

    return ( 
        // <Form.Item name="genre" label="장르">
        //     <Select value={Genre} onChange={genreChangeHandler} mode="multiple" placeholder="Please select genre">
        //         <Option value="fiction">Fiction</Option>
        //         <Option value="non-fiction">Non-Fiction</Option>
        //         <Option value="sf">SF</Option>
        //     </Select>
        // </Form.Item>
        <div></div>
    )
}

export default SelectGenre
