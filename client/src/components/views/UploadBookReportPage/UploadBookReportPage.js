import React, { useState } from 'react'
import Axios from 'axios';
import { Typography, Button, Form, Input, Rate, Select, DatePicker } from 'antd';
import SelectGenre from './Sections/SelectGenre';

const { Title: TitleTag } = Typography;
const { TextArea } = Input;

// const GenreData = [
//     { key: 1, value: 'fiction'},
//     { key: 2, value: 'non-fiction'},
//     { key: 3, value: 'SF'},
//     { key: 4, value: 'romance'},
//     { key: 5, value: 'biography'},
//     { key: 6, value: 'autobiography'},
//     { key: 7, value: 'poetry'},
//     { key: 8, value: 'informational'},
// ]

function UploadBookReportPage(props) {

    const [ISBN, setISBN] = useState('')
    const [Title, setTitle] = useState('')
    const [Report, setReport] = useState('')
    const [Plot, setPlot] = useState('')
    const [HashTag, setHashTag] = useState([])
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

    const reportChangeHandler = event => {
        setReport(event.currentTarget.value)
    }

    const HashTagChangeHandler = event => {
        setHashTag([...event])
    }

    const ratingChangeHandler = event => {
        setRating(event.currentTarget.value)
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

        // 유효성 체크 
        if ( !ISBN || !Title || !Author || !Genre || !MyShelf) {
            return alert("필수 값들을 넣어주셔야 합니다")
        }

        const body = {
            writer: props.user.userData._id,
            isbn: ISBN, 
            title: Title,
            report: Report,
            tag: HashTag,
            plot: Plot,
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
                <Form {...formItemLayout} onSubmit={SubmitHandler}>

                    <Form.Item label="도서코드(ISBN)" style={{ margin: '0px' }}>
                        <Form.Item 
                            name="ISBN" 
                            hasFeedback
                            rules={[{ required: true }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <Input value={ISBN} onChange={isbnChangeHandler}/>
                        </Form.Item>
                    </Form.Item>
                    
                    <Form.Item name="title" label="제목">
                        <Input value={Title} onChange={titleChangeHandler}/>
                    </Form.Item>

                    <SelectGenre list={GenreData} value={Genre} selectHandler={HashTagChangeHandler} />

                    <Form.Item name="report" label="독후감">
                        <TextArea value={Report} onChange={reportChangeHandler}/>
                    </Form.Item>

                    <Form.Item name="rating" label="별점">
                        <Rate value={Rating} onChange={ratingChangeHandler}/>
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 12, offset: 12, }}>
                        <Button type="primary" htmlType="submit" style={{ padding: '5px 30px' }}>
                            업로드
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}

export default UploadBookReportPage
