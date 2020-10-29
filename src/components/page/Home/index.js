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
        <h1>『TT TIM E 很想說出口的事』</h1>
        <div>
          <h2>最有趣的市場洞察 最實用的貿易知識</h2>
          <h2>這裡是TT Time-很想說出口的事，歡迎加入我們的行列</h2>
        </div>
      </Style.Content>
    </>
  )
}

Home.propTypes = {}

export default Home
