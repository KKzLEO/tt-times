import React from 'react'
import * as Style from './style'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Section from 'components/styled/Section'
import { breakpoints } from 'config/breakpoints'
import { useMainContext } from 'components/Context'
import { useHistory } from 'react-router-dom'

SwiperCore.use([Navigation, Pagination, Autoplay])

const sliderBreakpoints = {
  [breakpoints._sm]: {
    slidesPerView: 1,
  },
  [breakpoints._md]: {
    slidesPerView: 1,
  },
  [breakpoints._lg]: {
    slidesPerView: 1.5,
    spaceBetween: 40,
  },
}

const Home = (props) => {
  const {
    state: { videos },
  } = useMainContext()

  const history = useHistory()

  const handleClick = (videoId) => () => {
    console.log('fucku')
    history.push(`/video/${videoId}`)
  }

  return (
    <>
      <Style.Banner>
        <Swiper
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          centeredSlides
          loop
          loopFillGroupWithBlank
          navigation
          breakpoints={sliderBreakpoints}
        >
          {videos.map(({ imageUrl, imageAlt, id }) => (
            <SwiperSlide key={`home-video-slider-${id}`}>
              <Style.RespImg
                src={imageUrl}
                alt={imageAlt}
                onClick={handleClick(id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Style.Banner>
      <Section>
        <Style.Title>
          <h2>關於我們</h2>
          <h3>TT TIME 很想說出口的事</h3>
        </Style.Title>
        <Style.Content>
          最有趣的<Style.Highlight>市場洞察</Style.Highlight>，最實用的
          <Style.Highlight>貿易知識</Style.Highlight>
          <br />
          這裡是TT Time-很想說出口的事，歡迎加入我們的行列
        </Style.Content>
      </Section>
    </>
  )
}

Home.propTypes = {}

export default Home
