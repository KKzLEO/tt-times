import React from 'react'
import * as Style from './style'
import CDRI_LOGO from 'assets/images/cdri-logo.png'
import TRADE_LOGO from 'assets/images/trade-logo.png'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ShareIcon from 'assets/images/share.png'

const Footer = (props) => {
  const onFacebookClick = () => {
    window.open('https://www.facebook.com/MITleader/', '_blank')
  }

  const onBackClick = () => {
    window.scrollTo(0)
  }

  return (
    <Style.OuterContainer>
      <Style.Container>
        <Style.Facebook onClick={onFacebookClick} />
        <Style.LogoContainer>
          <span>主辦單位</span>
          <Style.CRDIImage htmlHeight={40} htmlWidth={136} src={TRADE_LOGO} />
        </Style.LogoContainer>
        <Style.LogoContainer>
          <span>執行單位</span>
          <Style.TradeImage htmlHeight={36} htmlWidth={122} src={CDRI_LOGO} />
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
