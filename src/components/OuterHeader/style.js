import styled from '@emotion/styled'
import { sm, md, lg, xl, lessThanXl } from 'config/breakpoints'

export const Container = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #f1ede5;

  svg {
    font-size: 30px;
    color: #555;
    cursor: pointer;
  }

  ${lessThanXl} {
    height: 50px;
    padding: 10px;
  }
`

export const Logo = styled.img`
  height: 36px;
  width: auto;

  ${lessThanXl} {
    width: 200px;
    height: 24px;
  }
`

export const Login = styled.div`
  background-position: -30px -90px;
  width: 30px;
  height: 30px;
  background-size: 60px;
  color: #000;
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
  overflow: hidden;
  position: relative;
  transition: all 0.35s ease-out;
  color: #fff;
  padding: 0 !important;
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.bgUrl});
  background-size: 60px;
  background-repeat: no-repeat;
`
