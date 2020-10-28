import React from 'react'
import VIDEO_BANNER from 'assets/images/video-banner.jpg'
import * as Style from './style'
import Section from 'components/styled/Section'
import VideoItem from './Item'
import { Grid } from '@chakra-ui/core'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import SingleVideoPage from '../SingleVideo'
import { useMainContext } from 'components/Context'

const Video = (props) => {
  const match = useRouteMatch()
  const { state: { videos } } = useMainContext()

  return (
    <Switch>
      <Route path={`${match.path}/:videoId`}>
        <SingleVideoPage />
      </Route>
      <Route path={match.path}>
        <Style.Banner src={VIDEO_BANNER} />
        <Section>
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(3, 1fr)',
            ]}
            rowGap={[3, 3, 4, 5]}
            columnGap={4}
          >
            {videos.map((props, index) => (
              <VideoItem key={`video-${index}`} {...props} hover />
            ))}
          </Grid>
        </Section>
      </Route>
    </Switch>
  )
}

Video.propTypes = {}

export default Video
