import styled from '@emotion/styled'
import ResposiveContainer from 'components/styled/Container'
import { lessThanMd, md } from 'config/breakpoints'
import { Image } from '@chakra-ui/core'

export const OuterContainer = styled.div`
  background: #f6d50c;
  height: 70px;

  ${lessThanMd} {
    height: 150px;
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

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: 500;
    margin-right: 20px;
  }

  ${lessThanMd} {
    ${(props) => (props.isHiddenOnSP ? 'display: none !important;' : '')}

    margin-top: 10px;
  }

  ${md} {
    flex: 1;
    justify-content: center;
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
  width: auto;
  height: 40px;
`

export const TradeImage = styled(Image)`
  width: auto;
  height: 36px;
`
