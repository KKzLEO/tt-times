import styled from '@emotion/styled'
import { sm, md, lg, xl } from 'config/breakpoints'

const ratio = 0.5625

export const Iframe = styled.iframe`
  width: 100%;
  margin: 0 auto;
  height: calc(100vw * ${ratio});

  ${sm} {
    height: calc(100vw * ${ratio});
  }

  ${md} {
    height: calc(80vw * ${ratio});
  }

  ${lg} {
    height: calc(70vw * ${ratio});
  }

  ${xl} {
    height: calc(60vw * ${ratio});
  }
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0 auto;
  width: 100vw;

  ${sm} {
    width: 100vw;
  }

  ${md} {
    width: 80vw;
  }

  ${lg} {
    width: 70vw;
  }

  ${xl} {
    width: 60vw;
  }
`

export const TitleContainer = styled.div`
  padding: 20px;
  width: 100%;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 24px;
  color: #2e338e;
  font-weight: 500;
`
