import React from 'react'
import * as Style from './style'
import { Link, useRouteMatch } from 'react-router-dom'

import HomeIcon from 'assets/images/home.png'
import ComputerIcon from 'assets/images/computer.png'
import DocumentIcon from 'assets/images/document.png'
import VolumeIcon from 'assets/images/volume.png'

export const routes = [
  {
    pathname: '/tt-times/video',
    src: ComputerIcon,
    name: 'Video',
    key: 'video',
  },
  {
    pathname: '/tt-times/podcast',
    src: VolumeIcon,
    name: 'Podcast',
    key: 'podcast',
  },
  {
    pathname: '/tt-times/blog',
    src: DocumentIcon,
    name: 'Blog',
    key: 'blog',
  },
  {
    pathname: '/tt-times',
    src: HomeIcon,
    name: 'Home',
    key: 'default',
  },
]

const Navigations = (props) => {
  const match = useRouteMatch('/tt-times/:page/')
  const page = match?.params?.page || 'default'

  return (
    <Style.Navigations>
      {routes.map(({ src, pathname, name, key }, index) => (
        <Link to={pathname} key={`route-${index}`}>
          <Style.Navigation active={page === key}>
            <span>{name}</span>
            <Style.NavIcon src={src} alt={name} />
          </Style.Navigation>
        </Link>
      ))}
    </Style.Navigations>
  )
}

export default Navigations
