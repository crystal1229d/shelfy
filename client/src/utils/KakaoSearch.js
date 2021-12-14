import axios from 'axios';

class KakaoSearch {

    constructor(key) {
        this.kakao = axios.create({   // this.client 라고 해도 된다. 편한대로 naming
            baseURL: 'https://dapi.kakao.com/v3',
            params: { key: key },
        });
    }

    async searchBook(query) {
        const response = await this.kakao.get('/v3/search/book', {
            params: {
                query: query,   // 검색을 원하는 질의어 (required)
                sort : 'accuracy', // 결과문서 정렬 방식 accuracy(정확도순) 
                page: 1, // 페이지 번호
                size: 10, // 한 페이지에 보여질 문서 개수 
            }
        })
        console.log(response);
        return response;
    }
}

export default KakaoSearch