import styled from '@emotion/styled'
import { Image } from '@chakra-ui/core'
import RespContainer from 'components/styled/Container'
import { lessThanSm } from 'config/breakpoints'

export const TitleContainer = styled(RespContainer)`
  margin-top: 40px;
  border: 1px solid rgb(226, 232, 240);
  border-left: none;
  border-right: none;
  text-align: center;

  h1 {
    font-weight: 200;
    font-size: 2em;
    margin: 0.67em 0;
  }

  h2 {
    font-weight: 400;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #2e338e;
  }
`

export const Content = styled.div`
  margin-top: 40px;
`

export const PodcastItem = styled.div`
  display: flex;
  border-radius: 5px;
  border: 1px solid rgb(226, 232, 240);
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const PodcastImg = styled(Image)`
  width: 211px;

  ${lessThanSm} {
    width: 100%;
  }
`

export const ContentContainer = styled.div`
  flex: 1 1;
  padding: 20px;
`

export const PodcastTitle = styled.div`
  div {
    margin-top: 10px;
    font-size: 24px;
  }
`

export const PodcastText = styled.div`
  margin-top: 10px;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

export const Audio = styled.audio`
  margin-top: 10px;
  width: 100%;
`
