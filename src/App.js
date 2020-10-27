import Header from 'components/Header'
import GlobalStyle from 'components/styled/Global'
import Home from 'components/page/Home'
import Video from 'components/page/Video'
import Footer from 'components/Footer'
import ScrollToTop from 'components/ScrollToTop'
import MainContexProvider from 'components/Context'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Header />
      <MainContexProvider>
        <ScrollToTop>
          <Switch>
            <Route path="/video">
              <Video />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </MainContexProvider>
    </Router>
  )
}

export default App
