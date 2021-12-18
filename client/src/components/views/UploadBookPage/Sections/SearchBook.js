import React from 'react'
import { Form, Button } from 'antd'
import KakaoSearch from '../../../../utils/KakaoSearch'
import dotenv from "dotenv";
dotenv.config();

function SearchBook(props) {

    const kakaoSearch = new KakaoSearch(process.env.REACT_APP_KAKAO_API_KEY);
    console.log(process.env.REACT_APP_KAKAO_API_KEY);
    const search = query => {
        console.log(query)
        kakaoSearch
            .searchBook(query)
            .then(response => console.log(response))
    }

    return (
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
            <Button type="button" onClick={search}>
                도서정보 가져오기
            </Button>
        </Form.Item>
    )
}

export default SearchBook