import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import Axios from 'axios'
import { Icon } from 'antd'
import { Fragment } from 'react'

function FileUpload(props) {

    const [Images, setImages] = useState([])

    const dropHandler = (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])

        Axios.post('/api/bookReport/image', formData, config)
            .then(response => {
                if (response.data.success) {
                    console.log(response)
                    setImages([...Images, response.data.filePath])
                } else {
                    alert('이미지 파일 저장에 실패했습니다')
                }
            })
    }

    const deleteHandler = image => {
        console.log('deleteHandler', image)
        // let currentIndex = Images.indexOf(image)
    }

    return (
        <div>

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

            <div style={{ width:'600px', height:'240px', overflowX:'auto', display:'flex', gap:'10px', border:'2px solid lightgray', background:'#eeeeee' }}>
                { Images.map((image, index) => (
                    <div>
                        <img 
                            style={{ minWidth:'300px', width:'300px', height:'240px', objectFit:'scale-down' }} src={`http://localhost:5000/${image}`} /> 
                    </div>
                ))}
            </div>

        </div>
            

    )
}

export default FileUpload