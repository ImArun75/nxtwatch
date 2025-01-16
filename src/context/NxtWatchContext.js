import React from 'react'

const NxtWatchContext = React.createContext({
  isActiveDarkTheme: false,
  savedVideos: [],
  isSave: false,
  toggleSave: () => {},
  onChangeTheme: () => {},
  onChangeSavedVideos: () => {},
  onChangeCategory: () => {},
})

export default NxtWatchContext
