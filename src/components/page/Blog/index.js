import React from 'react'
import { SmallSection } from 'components/styled/Section'
import { TitleContainer } from 'components/page/Podcast/style'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Image,
} from '@chakra-ui/core'
import * as Style from './style'
import { useMainContext } from 'components/Context'

const Blog = () => {
  const {
    state: { videos },
  } = useMainContext()

  return (
    <Style.Blog>
      <TitleContainer>
        <h1>TT TIME Blog</h1>
        <h2>第1季 後疫情時代 新貿易進行式</h2>
      </TitleContainer>
      <SmallSection>
        <Accordion>
          {videos.map(({ badge, title, content, imageUrl }, index) => (
            <AccordionItem key={`article-${index}`}>
              <AccordionHeader>
                <Style.Container>
                  <Style.CustomBadge>{badge}</Style.CustomBadge>
                  <Style.Title>{title}</Style.Title>
                </Style.Container>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={4}>
                <Style.ImageContainer>
                  <Image src={imageUrl} alt={title} />
                </Style.ImageContainer>
                {content.map((section, index) => (
                  <Style.Section
                    key={`blog-article-${index}-section`}
                    dangerouslySetInnerHTML={{ __html: section }}
                  />
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </SmallSection>
    </Style.Blog>
  )
}

export default Blog
