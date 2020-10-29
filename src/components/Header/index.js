import React from 'react'
import * as Style from './style'
import Navigations from './Navigations'
import NavigationsSP from './NavigationsSP'
import LOGO from 'assets/images/logo.png'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/tt-times/')
  }

  return (
    <Style.OuterContainer>
      <Style.Container>
        <Style.Logo
          src={LOGO}
          htmlWidth="120"
          htmlHeight="80"
          alt="LOGO"
          onClick={handleClick}
        />
        <Navigations />
        <NavigationsSP />
      </Style.Container>
    </Style.OuterContainer>
  )
}

Header.propTypes = {}

export default Header
