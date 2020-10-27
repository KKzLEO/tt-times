import styled from '@emotion/styled'
import ResposiveContainer from 'components/styled/Container'
import { sm, md, lg, xl, lessThanMd } from 'config/breakpoints'
import { Image } from '@chakra-ui/core'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'

const ACTIVE = '#f6d50c'
const NORMAL = '#555'

export const OuterContainer = styled.div`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  position: sticky;
  top: 0;
  z-index: 10;
  background: white;
`

export const Container = styled(ResposiveContainer)`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${sm} {
    height: 60px;
  }

  ${md} {
    height: 70px;
  }

  ${lg} {
    height: 80px;
  }

  ${xl} {
    height: 100px;
  }
`

export const Navigations = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;

  a {
    text-decoration: none;
    color: #555;
  }
`

export const NavigationsSP = styled(Navigations)`
  flex-direction: column;
`

export const Navigation = styled.span`
  height: 100%;
  width: 100px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.active ? ACTIVE : NORMAL)};
  margin-right: 20px;

  span {
    &:after {
      content: '';
      display: block;
      background-color: ${ACTIVE};
      height: 2px;
      width: ${(props) => (props.active ? '60%' : '0')};
      margin-top: 3px;
      transition: width 0.3s ease-in;
    }
  }

  &:hover {
    color: ${ACTIVE};

    span:after {
      width: 60%;
    }

    svg {
      color: ${ACTIVE};
    }
  }

  svg {
    color: ${(props) => (props.active ? ACTIVE : NORMAL)};
    /* margin-right: 2px; */
  }

  ${lessThanMd} {
    display: none;
  }
`

export const Logo = styled(Image)`
  cursor: pointer;
  height: 40px;
  width: 60px;
  margin-left: 20px;

  ${sm} {
    height: 40px;
    width: 60px;
    margin-left: 20px;
  }

  ${md} {
    height: 60px;
    width: 90px;
    margin-left: 0px;
  }

  ${lg} {
    height: 60px;
    width: 90px;
    margin-left: 0px;
  }

  ${xl} {
    height: 80px;
    width: 120px;
    margin-left: 0px;
  }
`

export const NavigationItemSP = styled(ListItem)`
  ${(props) =>
    props.active ? '  background-color: rgba(0, 0, 0, 0.04) !important; ' : ''}
`

export const Menu = styled(Button)`
  display: none !important;

  ${lessThanMd} {
    display: block !important;
  }
`
