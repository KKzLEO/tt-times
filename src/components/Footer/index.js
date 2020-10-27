import React from 'react'
import * as Style from './style'
import CDRI_LOGO from 'assets/images/cdri-logo.png'
import TRADE_LOGO from 'assets/images/trade-logo.png'
import CDRI_LOGO_SP from 'assets/images/cdri-logo-sp.png'
import TRADE_LOGO_SP from 'assets/images/trade-logo-sp.png'
import { Image } from '@chakra-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { createBreakpoint } from 'react-use'
import { breakpoints } from 'config/breakpoints'

const useBreakpoint = createBreakpoint(breakpoints)

const Footer = (props) => {
  const breakpoint = useBreakpoint()

  const getConfig = () => {
    if (breakpoint === '_xs') {
      return {
        htmlHeight: 50,
        htmlWidth: 50,
        trade: TRADE_LOGO_SP,
        cdri: CDRI_LOGO_SP,
      }
    }

    return {
      htmlHeight: 50,
      htmlWidth: 170,
      trade: TRADE_LOGO,
      cdri: CDRI_LOGO,
    }
  }

  const config = getConfig()

  return (
    <Style.OuterContainer>
      <Style.Container>
        <Style.Facebook />
        <Style.LogoContainer>
          <span>主辦單位</span>
          <Image {...config} src={config.trade} />
        </Style.LogoContainer>
        <Style.LogoContainer>
          <span>執行單位</span>
          <Image {...config} src={config.cdri} />
        </Style.LogoContainer>
        <Style.Back>
          BACK
          <ArrowForwardIosIcon />
        </Style.Back>
      </Style.Container>
    </Style.OuterContainer>
  )
}

Footer.propTypes = {}

export default Footer
