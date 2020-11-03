import React from 'react'
import { SmallSection } from 'components/styled/Section'
import * as Style from './style'
import { Badge } from 'components/styled'
import { useMainContext } from 'components/Context'

const Podcast = () => {
  const {
    state: { videos },
  } = useMainContext()

  return (
    <>
      <Style.TitleContainer>
        <h1>TT TIME Podcast</h1>
        <h2>第1季 後疫情時代 新貿易進行式</h2>
      </Style.TitleContainer>
      <SmallSection>
        <Style.Content>
          {videos.map(({ audio, title, badge, content }, index) => (
            <Style.PodcastItem key={`podcast-${index}`}>
              <Style.ContentContainer>
                <Style.PodcastTitle>
                  <Badge>{badge}</Badge>
                  <div>{title}</div>
                </Style.PodcastTitle>
                <Style.PodcastText>{content[0]}</Style.PodcastText>
                <div dangerouslySetInnerHTML={{ __html: audio.iframeCode }} />
              </Style.ContentContainer>
            </Style.PodcastItem>
          ))}
        </Style.Content>
      </SmallSection>
    </>
  )
}

export default Podcast
