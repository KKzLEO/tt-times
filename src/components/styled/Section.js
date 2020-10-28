import styled from '@emotion/styled'
import { sm, md, lg, xl } from 'config/breakpoints'
import Container from './Container'

const Section = styled(Container)`
  margin-top: 40px;
  margin-bottom: 40px;

  ${sm} {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  ${md} {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  ${lg} {
    margin-top: 120px;
    margin-bottom: 120px;
  }

  ${xl} {
    margin-top: 150px;
    margin-bottom: 150px;
  }
`

export const SmallSection = styled(Container)`
  margin-top: 40px;
  margin-bottom: 40px;
`

export default Section
