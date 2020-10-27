import styled from '@emotion/styled'
import { md } from 'config/breakpoints'

export const Title = styled.span`
  padding: 2px 5px;
  border-radius: 5px;
  border: 1px solid rgb(226, 232, 240);
  font-size: 18px;
  font-weight: 500;
`

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 20px;
`

export const SwiperContainer = styled.div`
  margin-top: 20px;

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff001;

    transition: opacity 0.5s ease;

    ${md} {
      opacity: 0;
    }
  }

  &:hover {
    .swiper-button-next,
    .swiper-button-prev {
      opacity: 1;
    }
  }
`
