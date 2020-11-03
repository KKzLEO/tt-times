import styled from '@emotion/styled'
import { Badge } from 'components/styled'

export const Title = styled.span`
  font-size: 18px;
`

export const Blog = styled.div`
  button {
    &:focus {
      box-shadow: none;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: fit-content;
  padding: 20px 0 0 0;
  flex-wrap: wrap;
  text-align: left;
`

export const CustomBadge = styled(Badge)`
  margin-right: 10px;
  margin-bottom: 10px;
`

export const ImageContainer = styled.div`
  img {
    width: 400px;
    margin: 0 auto 20px auto;
  }
`

export const Section = styled.div`
  margin-bottom: 10px;

  a {
    color: blue;
    text-decoration: underline;
  }
`
