import React from 'react'
import UserHeader from './UserHeader'
import comment from '../assets/talke.svg'
import heart from '../assets/heart.png'
import profile2 from '../assets/profile2.png'

const Discussion = () => {
    return (
        <>
            <UserHeader hideMore={true} />
            <div className='discussion_main'>
                <div className='discussion_detail'>

                    <p className='discussion_text'>
                        어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
                        우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
                        아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
                        괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
                        꼭 봐주세용~!
                    </p>
                    <div className='discussion_reaction com_flex_center'>
                        <div className='com_flex_center comment_react'>
                            <img src={heart} alt="heart" />
                            <span>5</span>
                        </div>
                        <div className='com_flex_center comment_react'>
                            <img src={comment} alt="comment" />
                            <span>5</span>
                        </div>
                    </div>
                    <div className="discussion_sub">
                        <UserHeader hideMore={true} hideVerified={true} userData={
                            {
                                username: 'ㅇㅅㅇ',
                                userdetail: '1일전',
                                profile : profile2
                            }
                        }/>
                        <div className='discussion_detail'>

                            <p className='discussion_text'>
                                오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
                            </p>
                            <div className='discussion_reaction com_flex_center'>
                                <div className='com_flex_center comment_react'>
                                    <img src={heart} alt="heart" />
                                    <span>5</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discussion