import React from 'react'
import * as Style from './style'
import TRADE_LOGO from 'assets/images/trade-logo.png'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ShareIcon from 'assets/images/share.png'

const Footer = (props) => {
  const onBackClick = () => {
    window.scrollTo(0)
  }

  return (
    <Style.OuterContainer>
      <Style.Container>
        <Style.LogoContainer isHiddenOnSP></Style.LogoContainer>
        <Style.LogoContainer>
          <Style.CRDIImage htmlHeight={40} htmlWidth={136} src={TRADE_LOGO} />
        </Style.LogoContainer>
        <Style.Back onClick={onBackClick}>
          <Style.Share src={ShareIcon} alt="share" />
          Go to top
          <ArrowForwardIosIcon />
        </Style.Back>
      </Style.Container>
    </Style.OuterContainer>
  )
}

Footer.propTypes = {}

export default Footer
