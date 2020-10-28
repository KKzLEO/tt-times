import React from 'react'
import { SmallSection } from 'components/styled/Section'
import * as Style from './style'
import { Badge } from 'components/styled'
import EP1 from 'assets/images/podcast1.jpg'
import EP2 from 'assets/images/podcast2.jpg'
import EP3 from 'assets/images/podcast3.jpg'

const podcasts = [
  {
    imageUrl: EP1,
    audioUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/914080300%3Fsecret_token%3Ds-5vCwAwA5JEM',
    badge: 'EP1',
    title: '商務會展停擺怎麼辦？線上貿易搶先做！',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
    turpis lectus, imperdiet sit amet sem nec, placerat gravida
    massa. Ut id blandit leo. Nam ultricies mollis interdum.
    Pellentesque habitant morbi tristique senectus et netus et
    malesuada fames ac turpis egestas. Nam sodales erat ac est
    sagittis fermentum. Donec mattis leo ex, sit amet mollis mauris
    commodo vitae. Donec maximus diam eu est pretium malesuada.
    Vestibulum sit amet orci ut ante consectetur consectetur.
    Suspendisse sagittis libero risus, eget mattis tellus maximus
    et. Donec iaculis turpis at suscipit elementum. Class aptent
    taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Sed nec sollicitudin turpis. In hac
    habitasse platea dictumst. Maecenas suscipit faucibus metus
    vitae lacinia. Quisque bibendum maximus auctor. Interdum et
    malesuada fames ac ante ipsum primis in faucibus.`,
  },
  {
    imageUrl: EP2,
    audioUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/914080300%3Fsecret_token%3Ds-5vCwAwA5JEM',
    badge: 'EP1',
    title: '商務會展停擺怎麼辦？線上貿易搶先做！',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
    turpis lectus, imperdiet sit amet sem nec, placerat gravida
    massa. Ut id blandit leo. Nam ultricies mollis interdum.
    Pellentesque habitant morbi tristique senectus et netus et
    malesuada fames ac turpis egestas. Nam sodales erat ac est
    sagittis fermentum. Donec mattis leo ex, sit amet mollis mauris
    commodo vitae. Donec maximus diam eu est pretium malesuada.
    Vestibulum sit amet orci ut ante consectetur consectetur.
    Suspendisse sagittis libero risus, eget mattis tellus maximus
    et. Donec iaculis turpis at suscipit elementum. Class aptent
    taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Sed nec sollicitudin turpis. In hac
    habitasse platea dictumst. Maecenas suscipit faucibus metus
    vitae lacinia. Quisque bibendum maximus auctor. Interdum et
    malesuada fames ac ante ipsum primis in faucibus.`,
  },
  {
    imageUrl: EP3,
    audioUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/914080300%3Fsecret_token%3Ds-5vCwAwA5JEM',
    badge: 'EP1',
    title: '商務會展停擺怎麼辦？線上貿易搶先做！',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
    turpis lectus, imperdiet sit amet sem nec, placerat gravida
    massa. Ut id blandit leo. Nam ultricies mollis interdum.
    Pellentesque habitant morbi tristique senectus et netus et
    malesuada fames ac turpis egestas. Nam sodales erat ac est
    sagittis fermentum. Donec mattis leo ex, sit amet mollis mauris
    commodo vitae. Donec maximus diam eu est pretium malesuada.
    Vestibulum sit amet orci ut ante consectetur consectetur.
    Suspendisse sagittis libero risus, eget mattis tellus maximus
    et. Donec iaculis turpis at suscipit elementum. Class aptent
    taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Sed nec sollicitudin turpis. In hac
    habitasse platea dictumst. Maecenas suscipit faucibus metus
    vitae lacinia. Quisque bibendum maximus auctor. Interdum et
    malesuada fames ac ante ipsum primis in faucibus.`,
  },
]

const Podcast = () => {
  return (
    <>
      <Style.TitleContainer>
        <h1>TT Time Podcast</h1>
        <h2>第1季 後疫情時代 新貿易進行式</h2>
      </Style.TitleContainer>
      <SmallSection>
        <Style.Content>
          {podcasts.map(
            ({ imageUrl, audioUrl, title, content, badge }, index) => (
              <Style.PodcastItem key={`podcast-${index}`}>
                <Style.PodcastImg src={imageUrl} />
                <Style.ContentContainer>
                  <Style.PodcastTitle>
                    <Badge>{badge}</Badge>
                    <div>{title}</div>
                  </Style.PodcastTitle>
                  <Style.PodcastText>{content}</Style.PodcastText>
                  <Style.Audio src={audioUrl} controls></Style.Audio>
                </Style.ContentContainer>
              </Style.PodcastItem>
            )
          )}
        </Style.Content>
      </SmallSection>
    </>
  )
}

export default Podcast
