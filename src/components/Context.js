import { createContext, useReducer, useContext } from 'react'
import EP1 from 'assets/images/ep1.jpg'
import EP2 from 'assets/images/ep2.jpg'
import EP3 from 'assets/images/ep3.jpg'

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
      audio: {
        iframeCode: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/914080300%3Fsecret_token%3Ds-5vCwAwA5JEM&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-388759348" title="TTtime" target="_blank" style="color: #cccccc; text-decoration: none;">TTtime</a> · <a href="https://soundcloud.com/user-388759348/ttime-ep1/s-5vCwAwA5JEM" title="TTime EP1" target="_blank" style="color: #cccccc; text-decoration: none;">TTime EP1</a></div>`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        turpis lectus, imperdiet sit amet sem nec, placerat gravida
        massa. Ut id blandit leo. Nam ultricies mollis interdum.
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nam sodales erat ac est
        sagittis fermentum. Donec mattis leo ex, sit amet mollis mauris
        commodo vitae. Donec maximus diam eu est pretium malesuada.
        Vestibulum sit amet orci ut ante consectetur consectetur.
        Suspendisse sagittis libero risus, eget mattis tellus maximus
        et. Donec iaculis turpis at suscipit elementum. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Sed nec sollicitudin turpis. In hac
        habitasse platea dictumst. Maecenas suscipit faucibus metus
        vitae lacinia. Quisque bibendum maximus auctor. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.`,
      },
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
      turpis lectus, imperdiet sit amet sem nec, placerat gravida
      massa. Ut id blandit leo. Nam ultricies mollis interdum.
      Pellentesque habitant morbi tristique senectus et netus et
      malesuada fames ac turpis egestas. Nam sodales erat ac est
      sagittis fermentum. Donec mattis leo ex, sit amet mollis mauris
      commodo vitae. Donec maximus diam eu est pretium malesuada.
      Vestibulum sit amet orci ut ante consectetur consectetur.
      Suspendisse sagittis libero risus, eget mattis tellus maximus
      et. Donec iaculis turpis at suscipit elementum. Class aptent
      taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Sed nec sollicitudin turpis. In hac
      habitasse platea dictumst. Maecenas suscipit faucibus metus
      vitae lacinia. Quisque bibendum maximus auctor. Interdum et
      malesuada fames ac ante ipsum primis in faucibus.`,
    },
    2: {
      imageUrl: EP2,
      imageAlt: '不只是美學話題，端莊時尚商機',
      title: '不只是美學話題，端莊時尚商機',
      badge: 'EP2',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
      audio: {
        iframeCode: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/918884062%3Fsecret_token%3Ds-XPVmcRY1XZT&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-388759348" title="TTtime" target="_blank" style="color: #cccccc; text-decoration: none;">TTtime</a> · <a href="https://soundcloud.com/user-388759348/ttime-ep2/s-XPVmcRY1XZT" title="TTime EP2-端莊時尚" target="_blank" style="color: #cccccc; text-decoration: none;">TTime EP2-端莊時尚</a></div>`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        turpis lectus, imperdiet sit amet sem nec, placerat gravida
        massa. Ut id blandit leo. Nam ultricies mollis interdum.
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nam sodales erat ac est
        sagittis fermentum. Donec mattis leo ex, sit amet mollis mauris
        commodo vitae. Donec maximus diam eu est pretium malesuada.
        Vestibulum sit amet orci ut ante consectetur consectetur.
        Suspendisse sagittis libero risus, eget mattis tellus maximus
        et. Donec iaculis turpis at suscipit elementum. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Sed nec sollicitudin turpis. In hac
        habitasse platea dictumst. Maecenas suscipit faucibus metus
        vitae lacinia. Quisque bibendum maximus auctor. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.`,
      },
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
      turpis lectus, imperdiet sit amet sem nec, placerat gravida
      massa. Ut id blandit leo. Nam ultricies mollis interdum.
      Pellentesque habitant morbi tristique senectus et netus et
      malesuada fames ac turpis egestas. Nam sodales erat ac est
      sagittis fermentum. Donec mattis leo ex, sit amet mollis mauris
      commodo vitae. Donec maximus diam eu est pretium malesuada.
      Vestibulum sit amet orci ut ante consectetur consectetur.
      Suspendisse sagittis libero risus, eget mattis tellus maximus
      et. Donec iaculis turpis at suscipit elementum. Class aptent
      taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Sed nec sollicitudin turpis. In hac
      habitasse platea dictumst. Maecenas suscipit faucibus metus
      vitae lacinia. Quisque bibendum maximus auctor. Interdum et
      malesuada fames ac ante ipsum primis in faucibus.`,
    },
    3: {
      imageUrl: EP3,
      imageAlt: '宅經濟當道，另類商機逆勢成長',
      title: '宅經濟當道，另類商機逆勢成長',
      badge: 'EP3',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
      audio: {
        iframeCode: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/921829804%3Fsecret_token%3Ds-3UOEU7xBOO2&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-388759348" title="TTtime" target="_blank" style="color: #cccccc; text-decoration: none;">TTtime</a> · <a href="https://soundcloud.com/user-388759348/ttime-ep3-podcast/s-3UOEU7xBOO2" title="TTime EP3 宅經濟 Podcast" target="_blank" style="color: #cccccc; text-decoration: none;">TTime EP3 宅經濟 Podcast</a></div>`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        turpis lectus, imperdiet sit amet sem nec, placerat gravida
        massa. Ut id blandit leo. Nam ultricies mollis interdum.
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nam sodales erat ac est
        sagittis fermentum. Donec mattis leo ex, sit amet mollis mauris
        commodo vitae. Donec maximus diam eu est pretium malesuada.
        Vestibulum sit amet orci ut ante consectetur consectetur.
        Suspendisse sagittis libero risus, eget mattis tellus maximus
        et. Donec iaculis turpis at suscipit elementum. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Sed nec sollicitudin turpis. In hac
        habitasse platea dictumst. Maecenas suscipit faucibus metus
        vitae lacinia. Quisque bibendum maximus auctor. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.`,
      },
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
      turpis lectus, imperdiet sit amet sem nec, placerat gravida
      massa. Ut id blandit leo. Nam ultricies mollis interdum.
      Pellentesque habitant morbi tristique senectus et netus et
      malesuada fames ac turpis egestas. Nam sodales erat ac est
      sagittis fermentum. Donec mattis leo ex, sit amet mollis mauris
      commodo vitae. Donec maximus diam eu est pretium malesuada.
      Vestibulum sit amet orci ut ante consectetur consectetur.
      Suspendisse sagittis libero risus, eget mattis tellus maximus
      et. Donec iaculis turpis at suscipit elementum. Class aptent
      taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Sed nec sollicitudin turpis. In hac
      habitasse platea dictumst. Maecenas suscipit faucibus metus
      vitae lacinia. Quisque bibendum maximus auctor. Interdum et
      malesuada fames ac ante ipsum primis in faucibus.`,
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
