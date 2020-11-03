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
  display: flex;
  justify-content: center;

  img {
    width: 400px;
    margin-bottom: 20px;
  }
`

export const Section = styled.div`
  a {
    color: blue;
    text-decoration: underline;
  }
`
