import React from 'react'
import imagesMode from '../assets/imagesmode.svg'

const AddComment = () => {
  return (
    <div className='com_flex_center add_commit_main'>
      <div className='add_commit_image'><img src={imagesMode} alt="commit"/></div>
      <div className='add_commit_input'><input type="text" placeholder='댓글을 남겨주세요.' /></div>
      <div className='add_commit_post'><button>등록</button></div>
    </div>
  )
}

export default AddComment