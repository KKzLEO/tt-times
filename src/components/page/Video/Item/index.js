import React from 'react'
import * as Style from './style'
import { useHistory } from 'react-router-dom'

const VideoItem = ({ imageUrl, imageAlt, title, id, badge, hover }) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/video/${id}`)
  }

  return (
    <Style.Container onClick={handleClick} hover={hover}>
      <Style.Img src={imageUrl} alt={imageAlt} />
      <Style.ContentContainer>
        <Style.Badge>{badge}</Style.Badge>
        <Style.Title>{title}</Style.Title>
      </Style.ContentContainer>
    </Style.Container>
  )
}

export default VideoItem
