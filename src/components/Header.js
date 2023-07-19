import React from 'react'
import Arrow from '../assets/ARROW.svg'
import Bell from '../assets/BELL.svg'

const Header = () => {
    return (
        <header className='p_header'>
            <div className='com_container'>
                <div className='com_header com_flex_center com_flex_between'>
                    <div>
                        <img src={Arrow} alt="back" />
                    </div>
                    <h1 className='title'>자유톡</h1>
                    <div>
                        <img src={Bell} alt="notification" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header