import styled from '@emotion/styled'
import ResposiveContainer from 'components/styled/Container'
import FacebookIcon from '@material-ui/icons/Facebook'
import { lessThanMd } from 'config/breakpoints'

export const OuterContainer = styled.div`
  background: #f6d50c;
  height: 70px;
`

export const Container = styled(ResposiveContainer)`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`

export const Facebook = styled(FacebookIcon)`
  color: white;
  font-size: 32px !important;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: 500;
    margin-right: 20px;
  }

  ${lessThanMd} {
    span {
      display: none;
    }
  }
`

export const Back = styled.span`
  display: flex;
  align-items: center;
  font-weight: 900;
`
