import { Global, css } from '@emotion/core'
import 'normalize.css'
import 'assets/scss/font.scss'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
          font-family: Noto Sans TC, sans-serif !important;
        }

        #root {
          height: 100%;
        }

        div {
          box-sizing: border-box;
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
          font-family: Noto Sans TC, sans-serif !important;
        }
      `}
    />
  )
}

export default GlobalStyle
