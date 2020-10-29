import React from 'react'
import { SmallSection } from 'components/styled/Section'
import { TitleContainer } from 'components/page/Podcast/style'
import { Badge } from 'components/styled'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/core'
import * as Style from './style'

const articles = [
  {
    badge: 'EP1',
    title: '商務會展停擺怎麼辦？線上貿易搶先做！',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    badge: 'EP2',
    title: '不只是美學話題，端莊時尚商機',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    badge: 'EP3',
    title: '宅經濟當道，另類商機逆勢成長',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    badge: 'EP1',
    title: '商務會展停擺怎麼辦？線上貿易搶先做！',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    badge: 'EP1',
    title: '商務會展停擺怎麼辦？線上貿易搶先做！',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`,
  },
]

const Podcast = () => {
  return (
    <>
      <TitleContainer>
        <h1>TT Time Blog</h1>
        <h2>第1季 後疫情時代 新貿易進行式</h2>
      </TitleContainer>
      <SmallSection>
        <Accordion allowMultiple>
          {articles.map(({ badge, title, content }, index) => (
            <AccordionItem key={`article-${index}`}>
              <AccordionHeader>
                <Box flex="1" textAlign="left" lineHeight="3">
                  <Badge>{badge}</Badge>
                  <Style.Title>{title}</Style.Title>
                </Box>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={4}>{content}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </SmallSection>
    </>
  )
}

export default Podcast
