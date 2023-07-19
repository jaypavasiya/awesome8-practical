import React from 'react'
import Slider from 'react-slick'
import AddComment from './AddComment'
import HashTag from './HashTag'
import UserHeader from './UserHeader'
import dummyImage from '../assets/dummyImage.jpg'
import comment from '../assets/talke.svg'
import save from '../assets/bookmark.svg'
import more from '../assets/more.svg'
import heart from '../assets/heart.png'
import Discussion from './Discussion'


const Post = () => {
    const tags = ["#2023", "#TODAYISMONDAY", "#TOP", "#POPS!", "#WOW", "#ROW"]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'post_image_slider'
    };
    return (
        <div className="com_container">
            <UserHeader />
            <div>
                <p className="post_title">
                    지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
                </p>
                <div className='post_details'>
                    <p className="post_text">
                        지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시 어떤 상품이 제일 괜찮았어?
                    </p>
                    <p className="post_text">
                        후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일 재밌었다던데 맞아???
                    </p>
                    <p className="post_text">
                        올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!
                    </p>
                </div>
            </div>
            <div className='post_hashtags com_flex_center'>
                {tags.map((tag, index) => {
                    return (
                        <HashTag key={index} tag={tag} />
                    )
                })}
            </div>
            <div className="images_slider">
                <Slider {...settings}>
                    {Array.from(Array(5), (i) => {
                        return (
                            <div key={i} className={'slider_image_content'}>
                                <img src={dummyImage} alt="img" />
                            </div>
                        )

                    })}
                </Slider>
            </div>
            <div className="post_reactions com_flex_center">
                <div className='com_flex_center post_react'>
                    <img src={heart} alt="heart" />
                    <span>5</span>
                </div>
                <div className='com_flex_center post_react'>
                    <img src={comment} alt="comment" />
                    <span>5</span>
                </div>
                <div className='com_flex_center post_react'>
                    <img src={save} alt="save" />
                </div>
                <div className='com_flex_center post_react'>
                    <img src={more} alt="more" />
                </div>
            </div>
            <div className="com_separator"></div>
            <div className="post_discussion">
               <Discussion />
            </div>
            <AddComment />
        </div >
    )
}

export default Post

