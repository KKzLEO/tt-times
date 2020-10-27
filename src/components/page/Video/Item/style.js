import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid rgb(226, 232, 240);
  width: 100%;
  cursor: pointer;
  transition: box-shadow 0.5s ease;

  &:hover {
    ${(props) =>
      props.hover ? 'box-shadow: 2px 5px 40px 0 rgba(0,0,0,.2);' : ''}
  }
`

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  width: 100%;
`

export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
`

export const ContentContainer = styled.div`
  padding: 20px;
`

export const Badge = styled.span`
  background: #fff001;
  padding: 2px 5px;
  border-radius: 3px;
  font-weight: 700;
`
