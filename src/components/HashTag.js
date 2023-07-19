import React from 'react'

const HashTag = ({ tag }) => {
    return (
        <div className='com_hashtag'>
            <span className='com_sub_hashtag_text'>
                {tag}
            </span>
        </div>
    )
}

export default HashTag