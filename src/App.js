import './App.css'
import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import VideoDetailedView from './VideoDetailedView'
import Trending from './Trending'
import Gaming from './Gaming'
import SavedVideos from './SavedVideos'
import NotFound from './NotFound'
import ThemeContext from './context/ThemeContext'
import LayoutRoute from './LayoutRoute/LayoutRoute'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'

class App extends Component {
  state = {
    isDark: false,
    savedVideos: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  addToSavedVideos = video => {
    this.setState(prevState => {
      const isAlreadySaved = prevState.savedVideos.find(
        savedVideoObj => savedVideoObj.id === video.id,
      )
      if (isAlreadySaved) {
        return {savedVideos: prevState.savedVideos}
      }
      return {savedVideos: [...prevState.savedVideos, video]}
    })
  }

  removeFromSavedVideos = videoId => {
    this.setState(prev => ({
      savedVideos: prev.savedVideos.filter(v => v.id !== videoId),
    }))
  }

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          savedVideos,
          changeTheme: this.changeTheme,
          addToSavedVideos: this.addToSavedVideos,
          removeFromSavedVideos: this.removeFromSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />

          <ProtectedRoute
            exact
            path="/"
            render={() => (
              <LayoutRoute>
                <Home />
              </LayoutRoute>
            )}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            render={routeProps => (
              <LayoutRoute>
                <VideoDetailedView {...routeProps} />
              </LayoutRoute>
            )}
          />

          <ProtectedRoute
            exact
            path="/trending"
            render={() => (
              <LayoutRoute>
                <Trending />
              </LayoutRoute>
            )}
          />

          <ProtectedRoute
            exact
            path="/gaming"
            render={() => (
              <LayoutRoute>
                <Gaming />
              </LayoutRoute>
            )}
          />

          <ProtectedRoute
            exact
            path="/saved-videos"
            render={() => (
              <LayoutRoute>
                <SavedVideos />
              </LayoutRoute>
            )}
          />
          <ProtectedRoute
            exact
            path="/not-found"
            render={() => (
              <LayoutRoute>
                <NotFound />
              </LayoutRoute>
            )}
          />

          <Route
            path="*"
            render={() => (
              <LayoutRoute>
                <NotFound />
              </LayoutRoute>
            )}
          />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
