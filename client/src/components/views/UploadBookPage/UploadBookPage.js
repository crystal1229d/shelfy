import React, { useState } from 'react'
import Axios from 'axios';
import { Typography, Button, Form, Input, Rate, Select, DatePicker } from 'antd';

const { Title: TitleTag } = Typography;
const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const GenreData = [
    { key: 1, value: 'fiction'},
    { key: 2, value: 'non-fiction'},
    { key: 3, value: 'SF'},
    { key: 4, value: 'romance'},
]

function UploadBookPage(props) {

    const [ISBN, setISBN] = useState('')
    const [Title, setTitle] = useState('')
    const [Author, setAuthor] = useState([])
    const [Publisher, setPublisher] = useState('')
    const [PublicationDate, setPublicationDate] = useState('')
    const [Price, setPrice] = useState(0)
    const [Plot, setPlot] = useState('')
    const [Genre, setGenre] = useState([])
    const [MyShelf, setMyShelf] = useState('default')
    const [Rating, setRating] = useState(5.0)
    const [ReadingPeriod, setReadingPeriod] = useState([])
    const [Cover, setCover] = useState('')

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 11 },
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
        console.log(Genre)
        setGenre([...Genre, event[0]])
        console.log(Genre)
    }

    const plotChangeHandler = event => {
        setPlot(event.currentTarget.value)
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

    const coverChangeHandler = event => {
        setCover(event.currentTarget.value)
    }

    const GetBookInfoWithISBN = () => {
        console.log('GetBookInfoWithISBN')
    }

    const SubmitHandler = event => {
        console.log('SubmitHandler')

        // automatic page refresh 방지
        event.preventDefault()

        console.log('ISBN', ISBN);
        console.log('Title', Title);
        console.log('Author', Author);
        console.log('Publisher', Publisher);
        console.log('PublicationDate', PublicationDate);
        console.log('Price', Price);
        console.log('Genre', Genre);
        console.log('Plot', Plot);
        console.log('MyShelf', MyShelf);
        console.log('Rating', Rating);


        // 유효성 체크 
        if ( !ISBN || !Title || !Author || !Genre || !MyShelf) {
            return alert("필수 값들을 넣어주셔야 합니다")
        }

        const body = {
            writer: props.user.userData._id,
            isbn: ISBN, 
            title: Title,
            author: Author,
            publisher: Publisher,
            // publicationDate: PublicationDate,
            price: Price,
            genre: Genre,
            plot: Plot,
            myShelf: MyShelf,
            rating: Rating,
            // readingPeriod: ReadingPeriod,
            // cover: Cover 
        }

        Axios.post("/api/book", body)
            .then(response => {
                if (response.data.success) {
                    alert('책 정보 업로드에 성공했습니다')
                    props.history.push('/')
                } else {
                    alert("책 정보 업로드에 실패했습니다")
                }
            })

    }

    return (
        <div style={{ marginTop: '25px' }}>
            
            <div style={{ textAlign: 'center' }}>
                <TitleTag level={2}>책 정보 업로드</TitleTag>
            </div>
            
            <div>
                <Form
                    {...formItemLayout} 
                    onSubmit={SubmitHandler} 
                >

                    <Form.Item label="도서코드(ISBN)" style={{ margin: '0px' }}>
                        <Form.Item 
                            name="ISBN" 
                            hasFeedback
                            rules={[{ required: true }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <Input value={ISBN} onChange={isbnChangeHandler}/>
                        </Form.Item>

                        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
                            <Button type="button" onClick={GetBookInfoWithISBN}>
                                ISBN으로 도서정보 가져오기
                            </Button>
                        </Form.Item>
                    </Form.Item>
                    
                    <Form.Item name="title" label="제목">
                        <Input value={Title} onChange={titleChangeHandler}/>
                    </Form.Item>

                    <Form.Item name="author" label="저자">
                        <Input value={Author} onChange={authorChangeHandler}/>
                    </Form.Item>

                    <Form.Item name="price" label="가격">
                        <Input type="number" value={Price} onChange={priceChangeHandler}/>
                    </Form.Item>

                    <Form.Item name="publisher" label="출판사">
                        <Input value={Publisher} onChange={publisherChangeHandler}/>
                    </Form.Item>

                    {/* <Form.Item 
                        name="publication_date" 
                        label="출판일자" 
                        rules={[{ type: 'array', required: false }]}
                    >
                        <DatePicker value={PublicationDate} onChange={publicationDateChangeHandler}/>
                    </Form.Item> */}

                    <Form.Item
                        name="genre"
                        label="장르"
                        rules={[ {
                            required: true,
                            message: 'Please select genre of the book!',
                            type: 'array',
                        }, ]}
                    >
                        <Select value={Genre} onChange={genreChangeHandler} mode="multiple" placeholder="Please select genre">
                            <Option value="fiction">Fiction</Option>
                            <Option value="non-fiction">Non-Fiction</Option>
                            <Option value="sf">SF</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="plot" label="줄거리">
                        <TextArea value={Plot} onChange={plotChangeHandler}/>
                    </Form.Item>

                    <Form.Item label="책장">
                        <Select value={MyShelf} onChange={myShelfChangeHandler}>
                            <Select.Option value="default">기본 책장</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="rate" label="별점">
                        <Rate value={Rating} onChange={ratingChangeHandler}/>
                    </Form.Item>

                    {/* <Form.Item 
                        name="reading_period" 
                        label="독서 기간"
                        rules={[{ type: 'array', required: false }]}
                    >
                        <RangePicker value={ReadingPeriod} onChange={readingPeriodChangeHandler}/>
                    </Form.Item> */}

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
