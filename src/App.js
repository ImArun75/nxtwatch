import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
    isSave: false,
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onChangeCategory = id => {
    this.setState({activeCategory: id})
  }

  toggleSave = () => {
    this.setState(prevState => ({isSave: !prevState.isSave}))
  }

  onChangeSavedVideos = videoDetails => {
    const {savedVideos} = this.state
    const isIdPresent = savedVideos.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (isIdPresent === undefined) {
      this.setState(previousValue => ({
        savedVideos: [...previousValue.savedVideos, videoDetails],
      }))
    } else {
      this.setState(previousValue => ({
        savedVideos: previousValue.savedVideos.filter(
          eachVideo => eachVideo.id !== videoDetails.id,
        ),
      }))
    }

    this.toggleSave()
  }

  render() {
    const {isDarkTheme, activeCategory, isSave, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          activeCategory,
          savedVideos,
          isSave,
          onChangeTheme: this.onChangeTheme,
          onChangeCategory: this.onChangeCategory,
          onChangeSavedVideos: this.onChangeSavedVideos,
          toggleSave: this.toggleSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}
export default App
