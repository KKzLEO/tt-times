import styled from '@emotion/styled'
import { sm, md, lg, xl } from 'config/breakpoints'

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  ${sm} {
    max-width: 540px;
  }

  ${md} {
    max-width: 720px;
  }

  ${lg} {
    max-width: 960px;
  }

  ${xl} {
    max-width: 1200px;
  }
`

export default Container
