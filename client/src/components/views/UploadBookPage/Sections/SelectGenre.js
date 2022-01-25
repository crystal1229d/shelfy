import React, { useState } from 'react'
import { Form, Select } from 'antd';

const { Option } = Select;

function SelectGenre(props) {

    // const [SelectedOptions, setSelectedOptions] = useState([])

    const renderGenreOptionLists = () => (
        props.list && props.list.map((item) => (
            <Option key={item.key} value={item.value} style={{ textTransform: 'uppercase' }}>{item.value}</Option>
        ))
    )

    return ( 
        <Form.Item name="genre" label="태그">
            <Select value={props.value} onChange={props.selectHandler} mode="multiple" placeholder="Please select genre">
                {renderGenreOptionLists()}
            </Select>
        </Form.Item>
    )
}

export default SelectGenre
