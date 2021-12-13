class KakaoSearch {
    constructor(key) {
        this.baseURL = "https://dapi.kakao.com";
        this.key = key;
        this.requestMethod = "GET"; 
        this.headers = {
            Authorization: `KakaoAK {${this.key}}`
        }
    }

    searchBook(query) {
        return '';
    }
}

export default KakaoSearch