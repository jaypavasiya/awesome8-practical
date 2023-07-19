import React from 'react'
import user from "../assets/profile.png"
import verify from "../assets/EXPERT_ICON.svg"
import more from '../assets/more.svg'


const UserHeader = ({ hideMore, hideVerified, userData }) => {
    return (
        <div className='com_user_header com_flex_center com_flex_between'>
            <div className='com_flex_center'>
                <div className='user_header_profile'>
                    <img src={userData ? userData.profile :  user} alt="userProfile" />
                </div>
                <div className='user_header_details'>
                    <div className='com_flex_center user_header_user_detail'>
                        <p className='user_header_username'>{userData ? userData.username : '안녕 나 응애 '}</p>
                        {hideVerified ? <></> : <div className='com_flex_center'>
                            <img src={verify} alt="verify" />
                        </div>}
                        <span className='user_header_userdetail'>{userData ? userData.userdetail : '1일전'}</span>
                    </div>
                    {hideMore ? <></> : <div className='user_header_subdetails com_flex_center'>
                        <span>165cm</span>
                        <div className='com_flex_center'>
                            <svg width="3" height="2" viewBox="0 0 3 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1.5" cy="1" r="1" fill="#919EB6" />
                            </svg>
                        </div>
                        <span>53kg</span>
                    </div>}
                </div>
            </div>
            <div className='user_header_button'>
                {hideMore ?
                    <img src={more} alt="more" />
                    : <button>팔로우</button>
                }
            </div>
        </div>
    )
}

export default UserHeader