import React from 'react'
import * as Style from './style'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined'
import { Link, useRouteMatch } from 'react-router-dom'

export const routes = [
  {
    pathname: '/',
    Icon: HomeOutlinedIcon,
    name: '首頁',
    key: 'default'
  },
  {
    pathname: '/video',
    Icon: TheatersOutlinedIcon,
    name: '影片',
    key: 'video'
  },
  {
    pathname: '/podcast',
    Icon: MusicNoteOutlinedIcon,
    name: 'PODCAST',
    key: 'podcast'
  },
  {
    pathname: '/blog',
    Icon: BookmarkBorderOutlinedIcon,
    name: '部落格',
    key: 'blog'
  },
]

const Navigations = (props) => {
  const match = useRouteMatch('/:page/')
  const page = match?.params?.page || 'default'

  return (
    <Style.Navigations>
      {routes.map(({ Icon, pathname, name, key }, index) => (
        <Link to={pathname} key={`route-${index}`}>
          <Style.Navigation active={page === key}>
            <Icon />
            <span>{name}</span>
          </Style.Navigation>
        </Link>
      ))}
    </Style.Navigations>
  )
}

export default Navigations
