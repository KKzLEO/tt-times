import React from 'react'
import MVPLOGO from 'assets/images/mvpLogo_Black.png'
import * as Style from './style'
import IconBg from 'assets/images/mvp_icon@3x.png'

const OuterHeader = (props) => {
  return (
    <Style.Container>
      <Style.Logo
        src={MVPLOGO}
        alt="logo"
        onClick={() =>
          (window.location.href = 'https://mvp-plan.cdri.org.tw/index')
        }
      />

      <Style.Login
        onClick={() =>
          (window.location.href = 'https://mvp-plan.cdri.org.tw/login')
        }
        bgUrl={IconBg}
      />
    </Style.Container>
  )
}

export default OuterHeader
