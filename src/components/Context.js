import { createContext, useReducer, useContext } from 'react'
import EP1 from 'assets/images/ep1.jpg'

export const MainContext = createContext({})

export const useMainContext = () => useContext(MainContext)

const initState = {
  videoObj: {
    1: {
      imageUrl: EP1,
      imageAlt: '商務會展停擺怎麼辦？線上貿易搶先做！',
      title: '商務會展停擺怎麼辦？線上貿易搶先做！',
      badge: 'EP1',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
    },
    2: {
      imageUrl: EP1,
      imageAlt: '商務會展停擺怎麼辦？線上貿易搶先做！',
      title: '商務會展停擺怎麼辦？線上貿易搶先做！',
      badge: 'EP2',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
    },
    3: {
      imageUrl: EP1,
      imageAlt: '商務會展停擺怎麼辦？線上貿易搶先做！',
      title: '商務會展停擺怎麼辦？線上貿易搶先做！',
      badge: 'EP3',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
    },
    4: {
      imageUrl: EP1,
      imageAlt: '商務會展停擺怎麼辦？線上貿易搶先做！',
      title: '商務會展停擺怎麼辦？線上貿易搶先做！',
      badge: 'EP3',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
    },
    5: {
      imageUrl: EP1,
      imageAlt: '商務會展停擺怎麼辦？線上貿易搶先做！',
      title: '商務會展停擺怎麼辦？線上貿易搶先做！',
      badge: 'EP3',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
    },
    6: {
      imageUrl: EP1,
      imageAlt: '商務會展停擺怎麼辦？線上貿易搶先做！',
      title: '商務會展停擺怎麼辦？線上貿易搶先做！',
      badge: 'EP3',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
    },
    7: {
      imageUrl: EP1,
      imageAlt: '商務會展停擺怎麼辦？線上貿易搶先做！',
      title: '商務會展停擺怎麼辦？線上貿易搶先做！',
      badge: 'EP3',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
    },
    8: {
      imageUrl: EP1,
      imageAlt: '商務會展停擺怎麼辦？線上貿易搶先做！',
      title: '商務會展停擺怎麼辦？線上貿易搶先做！',
      badge: 'EP3',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
    },
    9: {
      imageUrl: EP1,
      imageAlt: '商務會展停擺怎麼辦？線上貿易搶先做！',
      title: '商務會展停擺怎麼辦？線上貿易搶先做！',
      badge: 'EP3',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
    },
    10: {
      imageUrl: EP1,
      imageAlt: '商務會展停擺怎麼辦？線上貿易搶先做！',
      title: '商務會展停擺怎麼辦？線上貿易搶先做！',
      badge: 'EP3',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
    },
  },
}

const reducer = (state, action) => {
	switch (action.type) {
		default:
			return state
	}
}

const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const videos = Object.entries(state.videoObj).map(([key, item]) => ({
    ...item,
    id: key,
  }))


  return (
    <MainContext.Provider value={{ state: { ...state, videos, dispatch } }}>
      {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider
