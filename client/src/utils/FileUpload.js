import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import Axios from 'axios'
import { Icon } from 'antd'

function FileUpload(props) {

    const [Images, setImages] = useState([])

    const dropHandler = (files) => {
        console.log('dropHandler', files)

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])

        Axios.post('/api/bookReport/image', formData, config)
            .then(response => {
                if (response.data.success) {
                    console.log(response)
                } else {
                    alert('이미지 파일 저장에 실패했습니다')
                }
            })
    }

    const deleteHandler = image => {
        console.log('deleteHandler', image)
    }

    console.log(props)

    return (
        <div style={{ width:'300px', height:'240px', display:'flex', alignItems:'center', justifyContent:'center', border:'2px dashed lightgray', background:'#eeeeee' }}>
            <Dropzone onDrop={dropHandler}>
                {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Icon type="plus" style={{ fontSize:'2rem' }} />
                    </div>
                )}
            </Dropzone>
        </div>
    )
}

export default FileUpload
