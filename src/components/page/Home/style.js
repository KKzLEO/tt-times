import styled from '@emotion/styled'
import { Image } from '@chakra-ui/core'
import { sm, md, lg, xl, lessThanLg } from 'config/breakpoints'
import Container from 'components/styled/Container'

export const Banner = styled(Container)`
  background-color: #ddd7d7;
  padding: 10px;

  .swiper-button-next {
    color: #fff001;
  }

  .swiper-button-prev {
    color: #fff001;
  }

  ${sm} {
    padding: 10px;
  }

  ${md} {
    padding: 20px;
  }

  ${lg} {
    height: calc(100vh - 80px - 50px);
    padding: 0 100px;
    padding-top: calc((100vh - 100px - 413px - 50px) / 2);
  }

  ${xl} {
    height: calc(100vh - 100px - 80px);
    padding: 0 160px;
    padding-top: calc((100vh - 100px - 478px - 80px) / 2);
  }
`

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
`

export const RespImg = styled(Image)`
  max-width: 100%;
  height: auto;
  cursor: pointer;
`

export const Content = styled(Container)`
  background-color: #ddd7d7;
  text-align: center;
  padding: 70px 25px;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  position: relative;

  div {
    margin-top: 10px;
    line-height: 25px;
  }

  h2 {
    font-weight: 700;
  }
`

export const ContentImage = styled.img`
  position: absolute;
  height: 80px;
  width: 120px;
  transform: translateY(-50%);
  top: 50%;

  ${lessThanLg} {
    display: none;
  }

  ${xl} {
    left: 30px;
  }
`
