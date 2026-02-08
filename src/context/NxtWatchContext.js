import React from 'react'

const NxtWatchContext = React.createContext({
  isActiveDarkTheme: false,
  savedVideos: [],
  onChangeTheme: () => { },
  onChangeSavedVideos: () => { },
  onChangeCategory: () => { },
})

export default NxtWatchContext
