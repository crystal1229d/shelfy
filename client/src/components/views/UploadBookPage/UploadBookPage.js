import React from 'react'
import { Typography, Button, Form, Input, Rate, Select } from 'antd';

const { Title: TitleTag } = Typography;
const { Option } = Select;
const { TextArea } = Input;

function UploadBookPage() {

    const SubmitHandler = event => {
        console.log('SubmitHandler')
    }

    return (
        <div>
            <div><TitleTag level={2}>책 정보 업로드</TitleTag></div>
            <div>
                <Form
                    onFinish={SubmitHandler} 
                    initialValues={{
                        rate: 5.0
                    }}
                >

                    <Form.Item
                        name="select-multiple"
                        label="Select[multiple]"
                        rules={[ {
                            required: true,
                            message: 'Please select genre of the book!',
                            type: 'array',
                        }, ]}>
                        <Select mode="multiple" placeholder="Please select genre">
                            <Option value="fiction">Fiction</Option>
                            <Option value="non-fiction">Non-Fiction</Option>
                            <Option value="sf">SF</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="rate" label="Rate">
                        <Rate />
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}

export default UploadBookPage
