import Header from 'components/Header'
import GlobalStyle from 'components/styled/Global'
import Home from 'components/page/Home'
import Video from 'components/page/Video'
import Podcast from 'components/page/Podcast'
import Blog from 'components/page/Blog'
import Footer from 'components/Footer'
import ScrollToTop from 'components/ScrollToTop'
import MainContexProvider from 'components/Context'
import { ThemeProvider } from '@chakra-ui/core'
import { theme } from '@chakra-ui/core'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <MainContexProvider>
          <ScrollToTop>
            <Switch>
              <Route path="/tt-times/video">
                <Video />
              </Route>
              <Route path="/tt-times/podcast">
                <Podcast />
              </Route>
              <Route path="/tt-times/blog">
                <Blog />
              </Route>
              <Route path="/tt-times/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </ScrollToTop>
        </MainContexProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
