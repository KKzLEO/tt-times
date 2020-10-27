import React from 'react'
import * as Style from './style'

import SwiperCore, { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import VideoItem from 'components/page/Video/Item'
import { breakpoints } from 'config/breakpoints'

SwiperCore.use([Navigation, Autoplay])

const sliderBreakpoints = {
  [breakpoints._xs]: {
    slidesPerView: 1,
  },
  [breakpoints._sm]: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  [breakpoints._md]: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  [breakpoints._lg]: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
}

const Recommendation = ({ videos }) => {
  return (
    <Style.Container>
      <Style.Title>推薦觀看</Style.Title>
      <Style.SwiperContainer>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation
          breakpoints={sliderBreakpoints}
        >
          {videos.map((props, index) => (
            <SwiperSlide>
              <VideoItem key={`video-${index}`} {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Style.SwiperContainer>
    </Style.Container>
  )
}

export default Recommendation
