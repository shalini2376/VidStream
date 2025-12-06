import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  savedVideos: [],
  changeTheme: () => {},
  addToSavedVideos: () => {},
  removeFromSavedVideos: () => {},
})

export default ThemeContext
