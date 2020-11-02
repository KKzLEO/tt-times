import styled from '@emotion/styled'
import ResposiveContainer from 'components/styled/Container'
import FacebookIcon from '@material-ui/icons/Facebook'
import { lessThanMd } from 'config/breakpoints'
import { Image } from '@chakra-ui/core'

export const OuterContainer = styled.div`
  background: #f6d50c;
  height: 70px;

  ${lessThanMd} {
    height: 200px;
  }
`

export const Container = styled(ResposiveContainer)`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  ${lessThanMd} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Facebook = styled(FacebookIcon)`
  color: #3a549e;
  font-size: 40px !important;
  cursor: pointer;
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

    margin-top: 10px;
  }
`

export const Back = styled.span`
  display: flex;
  align-items: center;
  font-weight: 900;
  cursor: pointer;

  ${lessThanMd} {
    margin-top: 10px;
  }
`

export const Share = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const CRDIImage = styled(Image)`
  width: 122px;
  height: 36px;
`

export const TradeImage = styled(Image)`
  width: 136px;
  height: 40px;
`
