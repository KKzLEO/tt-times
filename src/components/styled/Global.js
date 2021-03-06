import { Global, css } from '@emotion/core'
import 'normalize.css'
import 'assets/scss/font.scss'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
          font-family: 'Share Tech', 'Noto Sans TC', '微軟正黑體',
            'Microsoft JhengHei', 'PingFang TC', 'Helvetica Neue', Helvetica,
            Arial, sans-serif;
          height: 100%;
        }

        #root {
          height: 100%;
        }

        body {
          height: 100%;
        }

        div,
        a,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        td,
        label {
          font-family: 'Share Tech', 'Noto Sans TC', '微軟正黑體',
            'Microsoft JhengHei', 'PingFang TC', 'Helvetica Neue', Helvetica,
            Arial, sans-serif;
        }
      `}
    />
  )
}

export default GlobalStyle
