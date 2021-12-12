import React, { useState } from 'react'
import { Typography, Button, Form, Input, InputNumber, Rate, Select, DatePicker } from 'antd';

const { Title: TitleTag } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;

function UploadBookPage(props) {

    const [ISBN, setISBN] = useState('')
    const [Title, setTitle] = useState('')
    const [Author, setAuthor] = useState([])
    const [Publisher, setPublisher] = useState('')
    const [PublicationDate, setPublicationDate] = useState('')
    const [Price, setPrice] = useState(0)
    const [Genre, setGenre] = useState([])
    const [MyShelf, setMyShelf] = useState('default')
    const [Rating, setRating] = useState(5)
    const [ReadingPeriod, setReadingPeriod] = useState([])

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 11 },
    }

    const validateMessages = {
        required: '${name} is required!', 
    }

    const isbnChangeHandler = event => {
        setISBN(event.currentTarget.value)
    }

    const titleChangeHandler = event => {
        setTitle(event.currentTarget.value)
    }

    const authorChangeHandler = event => {
        setAuthor(event.currentTarget.value)
    }

    const publisherChangeHandler = event => {
        setPublisher(event.currentTarget.value)
    }

    const publicationDateChangeHandler = event => {
        setPublicationDate(event.currentTarget.value)
    }

    const priceChangeHandler = event => {
        setPrice(event.currentTarget.value)
    }

    const genreChangeHandler = event => {
        setGenre(event.currentTarget.value)
    }

    const myShelfChangeHandler = event => {
        setMyShelf(event.currentTarget.value)
    }

    const ratingChangeHandler = event => {
        setRating(event.currentTarget.value)
    }

    const readingPeriodChangeHandler = event => {
        setReadingPeriod(event.currentTarget.value)
    }

    const GetBookInfoWithISBN = () => {
        console.log('GetBookInfoWithISBN')
    }

    const SubmitHandler = event => {
        console.log('SubmitHandler')
    }

    return (
        <div style={{ marginTop: '25px' }}>
            
            <div style={{ textAlign: 'center' }}>
                <TitleTag level={2}>책 정보 업로드</TitleTag>
            </div>
            
            <div>
                <Form
                    {...formItemLayout} 
                    onFinish={SubmitHandler} 
                    validateMessages={validateMessages} 
                    initialValues={{
                        rate: 5.0
                    }}
                >

                    <Form.Item label="도서코드(ISBN)" style={{ margin: '0px' }}>
                        <Form.Item 
                            name="ISBN" 
                            hasFeedback
                            rules={[{ required: true }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            onChange={isbnChangeHandler}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
                            <Button type="button" onClick={GetBookInfoWithISBN}>
                                ISBN으로 도서정보 가져오기
                            </Button>
                        </Form.Item>
                    </Form.Item>
                    
                    <Form.Item name="title" label="제목" onChange={titleChangeHandler}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="author" label="저자" onChange={authorChangeHandler}>
                        <Input />
                    </Form.Item>

                    <Form.Item 
                        name="price" 
                        label="가격"
                        rules={[ { type: 'number', min: 0, }]}
                        onChange={priceChangeHandler}
                    >
                        <InputNumber />
                    </Form.Item>

                    <Form.Item name="publisher" label="출판사" onChange={publisherChangeHandler}>
                        <Input />
                    </Form.Item>

                    <Form.Item 
                        name="publication_date" 
                        label="출판일자" 
                        rules={[{ type: 'array', required: false }]}
                        onChange={publicationDateChangeHandler}
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        name="genre"
                        label="장르"
                        rules={[ {
                            required: true,
                            message: 'Please select genre of the book!',
                            type: 'array',
                        }, ]}
                        onChange={genreChangeHandler}
                    >
                        <Select mode="multiple" placeholder="Please select genre">
                            <Option value="fiction">Fiction</Option>
                            <Option value="non-fiction">Non-Fiction</Option>
                            <Option value="sf">SF</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="책장" onChange={myShelfChangeHandler}>
                        <Select>
                            <Select.Option value="default">기본 책장</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="rate" label="별점" onChange={ratingChangeHandler}>
                        <Rate />
                    </Form.Item>

                    <Form.Item 
                        name="reading_period" 
                        label="독서 기간"
                        rules={[{ type: 'array', required: false }]}
                        onChange={readingPeriodChangeHandler}
                    >
                        <RangePicker />
                    </Form.Item>

                    <Form.Item 
                        wrapperCol={{
                            span: 12,
                            offset: 12,
                        }}
                    >
                        <Button type="primary" htmlType="submit" style={{ padding: '5px 30px' }}>
                            업로드
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}

export default UploadBookPage
