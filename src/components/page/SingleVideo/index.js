import React from 'react'
import { useParams } from 'react-router-dom'
import * as Style from './style'
import { Badge } from 'components/styled'
import Recommendation from 'components/page/Video/Recommendation'
import { useMainContext } from 'components/Context'

const SingleVideoPage = () => {
  const { state: { videos, videoObj } } = useMainContext()
  const { videoId } = useParams()
  const { videoUrl, title, badge } = videoObj[videoId]

  const filteredVideos = videos.filter(({ id }) => id !== videoId)

  return (
    <Style.VideoContainer>
      <Style.Iframe
        title={title}
        src={videoUrl}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
      ></Style.Iframe>
      <Style.TitleContainer>
        <Badge>{badge}</Badge>
        <Style.Title>{title}</Style.Title>
      </Style.TitleContainer>
      <Recommendation videos={filteredVideos} />
    </Style.VideoContainer>
  )
}

export default SingleVideoPage
