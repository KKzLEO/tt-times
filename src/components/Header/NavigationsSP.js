import React, { useState } from 'react'
import * as Style from './style'
import MenuIcon from '@material-ui/icons/Menu'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { routes } from './Navigations'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const NavigationsSP = () => {
  const match = useRouteMatch('/tt-times/:page/')
  const history = useHistory()
  const page = match?.params?.page || 'default'
  const [open, setOpen] = useState(false)

  const handleItemClick = (path) => () => {
    history.push(path)
    setOpen(false)
  }

  return (
    <>
      <Style.Menu onClick={() => setOpen(true)}>
        <MenuIcon />
      </Style.Menu>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <List>
          {routes.map(({ pathname, name, key }) => (
            <Style.NavigationItemSP
              button
              key={key}
              onClick={handleItemClick(pathname)}
              active={key === page}
            >
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={name} />
            </Style.NavigationItemSP>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default NavigationsSP
