import styled from '@emotion/styled'
import { Image } from '@chakra-ui/core'
import { sm, md, lg, xl } from 'config/breakpoints'
import Container from 'components/styled/Container'

export const Banner = styled.div`
  .swiper-button-next {
    color: #fff001;
  }

  .swiper-button-prev {
    color: #fff001;
  }

  img {
    max-width: 100%;
    height: auto;
    width: 100%;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;

  &:before {
    content: '';
    display: block;
    height: 40px;
    background: #f6d50c;
    width: 15px;
    margin-right: 5px;
  }

  h2 {
    font-weight: 700;
    font-size: 38px;
    margin: 0;
    margin-right: 5px;
  }

  h3 {
    font-size: 16px;
    margin: 0;
  }

  @media (max-width: 396px) {
    h3 {
      font-size: 16px;
      margin-left: 25px;
    }
  }

  ${sm} {
    &:before {
      height: 40px;
    }

    h2 {
      font-size: 38px;
    }

    h3 {
      font-size: 16px;
    }
  }

  ${md} {
    &:before {
      height: 40px;
    }

    h2 {
      font-size: 42px;
    }

    h3 {
      font-size: 20px;
      margin: 0;
    }
  }

  ${lg} {
    &:before {
      height: 50px;
    }

    h2 {
      font-size: 46px;
    }

    h3 {
      font-size: 24px;
      margin: 0;
    }
  }

  ${xl} {
    &:before {
      height: 50px;
    }

    h2 {
      font-size: 50px;
    }

    h3 {
      font-size: 28px;
      margin: 0;
    }
  }
`

export const Content = styled.p`
  margin-top: 30px;
  font-size: 30px;
  font-weight: 900;

  ${sm} {
    font-size: 30px;
    margin-top: 30px;
  }

  ${md} {
    font-size: 35px;
    margin-top: 50px;
  }

  ${lg} {
    font-size: 40px;
    margin-top: 70px;
  }

  ${xl} {
    font-size: 45px;
    margin-top: 90px;
  }
`

export const Highlight = styled.span`
  color: #f6d50c;
`

export const RespImg = styled(Image)`
  max-width: 100%;
  height: auto;
  cursor: pointer;
`

export const ContentV2 = styled(Container)`
  background-color: #ddd7d7;
  text-align: center;
  padding: 70px 10px;
  margin-top: 40px;
  margin-bottom: 40px;

  h1 {

  }

  h2 {
    margin: 0;
  }
`


