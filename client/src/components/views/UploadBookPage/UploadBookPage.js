import React, { useState } from 'react'
import Axios from 'axios';
import { Typography, Button, Form, Input, Rate, Select, DatePicker } from 'antd';
import SelectGenre from './Sections/SelectGenre';
import SearchBook from './Sections/SearchBook';

const { Title: TitleTag } = Typography;
const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const GenreData = [
    { key: 1, value: 'fiction'},
    { key: 2, value: 'non-fiction'},
    { key: 3, value: 'SF'},
    { key: 4, value: 'romance'},
    { key: 5, value: 'biography'},
    { key: 6, value: 'autobiography'},
    { key: 7, value: 'poetry'},
    { key: 8, value: 'informational'},
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
        setGenre([...event])
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

        // automatic page refresh ??????
        event.preventDefault()

        // ????????? ?????? 
        if ( !ISBN || !Title || !Author || !Genre || !MyShelf) {
            return alert("?????? ????????? ??????????????? ?????????")
        }

        const body = {
            writer: props.user.userData._id,
            isbn: ISBN, 
            title: Title,
            author: Author,
            publisher: Publisher,
            publicationDate: PublicationDate,
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
                    alert('??? ?????? ???????????? ??????????????????')
                    props.history.push('/')
                } else {
                    alert("??? ?????? ???????????? ??????????????????")
                }
            })

    }

    return (
        <div style={{ marginTop: '25px' }}>
            
            <div style={{ textAlign: 'center' }}>
                <TitleTag level={2}>??? ?????? ?????????</TitleTag>
            </div>
            
            <div>
                <Form {...formItemLayout} onSubmit={SubmitHandler}>

                    <Form.Item label="????????????(ISBN)" style={{ margin: '0px' }}>
                        <Form.Item 
                            name="ISBN" 
                            hasFeedback
                            rules={[{ required: true }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <Input value={ISBN} onChange={isbnChangeHandler}/>
                        </Form.Item>

                        {/* <SearchBook isbn={ISBN} title={Title} author={Author} />
                        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
                            <Button type="button" onClick={GetBookInfoWithISBN}>
                                ???????????? ????????????!
                            </Button>
                        </Form.Item> */}
                    </Form.Item>
                    
                    <Form.Item name="title" label="??????">
                        <Input value={Title} onChange={titleChangeHandler}/>
                    </Form.Item>

                    <Form.Item name="author" label="??????">
                        <Input value={Author} onChange={authorChangeHandler}/>
                    </Form.Item>

                    <Form.Item name="publisher" label="?????????">
                        <Input value={Publisher} onChange={publisherChangeHandler}/>
                    </Form.Item>

                    <Form.Item name="price" label="??????">
                        <Input type="number" value={Price} onChange={priceChangeHandler}/>
                    </Form.Item>

                    {/* <Form.Item 
                        name="publication_date" 
                        label="????????????" 
                        rules={[{ type: 'array', required: false }]}
                    >
                        <DatePicker value={PublicationDate} onChange={publicationDateChangeHandler}/>
                    </Form.Item> */}

                    <SelectGenre list={GenreData} value={Genre} selectHandler={genreChangeHandler} />

                    <Form.Item name="plot" label="?????????">
                        <TextArea value={Plot} onChange={plotChangeHandler}/>
                    </Form.Item>

                    <Form.Item label="??????">
                        <Select value={MyShelf} onChange={myShelfChangeHandler}>
                            <Select.Option value="default">?????? ??????</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="rate" label="??????">
                        <Rate value={Rating} onChange={ratingChangeHandler}/>
                    </Form.Item>

                    {/* <Form.Item 
                        name="reading_period" 
                        label="?????? ??????"
                        rules={[{ type: 'array', required: false }]}
                    >
                        <RangePicker value={ReadingPeriod} onChange={readingPeriodChangeHandler}/>
                    </Form.Item> */}

                    <Form.Item wrapperCol={{ span: 12, offset: 12, }}>
                        <Button type="primary" htmlType="submit" style={{ padding: '5px 30px' }}>
                            ?????????
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}

export default UploadBookPage
