import React from 'react'
import * as Style from './style'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMainContext } from 'components/Context'
import { useHistory } from 'react-router-dom'
import LOGO from 'assets/images/logo.png'

SwiperCore.use([Navigation, Pagination, Autoplay])

const Home = (props) => {
  const {
    state: { videos },
  } = useMainContext()

  const history = useHistory()

  const handleClick = (videoId) => () => {
    history.push(`/tt-times/video/${videoId}`)
  }

  return (
    <>
      <Style.Banner>
        <Style.Title>第1季 後疫情時代 新貿易進行式</Style.Title>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          centeredSlides
          loop
          loopFillGroupWithBlank
          navigation
          autoplay
        >
          {videos.map(({ imageUrl, imageAlt, id }) => (
            <SwiperSlide key={`home-video-slider-${id}`}>
              <div>
                <Style.RespImg
                  src={imageUrl}
                  alt={imageAlt}
                  onClick={handleClick(id)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Style.Banner>
      <Style.Content>
        <Style.ContentImage src={LOGO} alt="logo" />
        <h1>『TT TIME 很想說出口的事』</h1>
        <div>
          <h2>#拚貿易！有撇步！</h2>
          <h2>#世界在變，態度要有！</h2>
          <h2>
            #全新硬核脫口秀，每集7分鐘，聽Uncle
            Tim與Tom小哥說出口的事，讓你跟上全球貿易新浪潮
          </h2>
        </div>
      </Style.Content>
    </>
  )
}

Home.propTypes = {}

export default Home
