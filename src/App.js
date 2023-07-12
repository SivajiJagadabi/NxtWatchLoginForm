import {Component} from 'react'
import {Route, Switch, Redirect, Routes} from 'react-router-dom'
import './App.css'
import VideoDetailView from './components/VideoDetailView'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {isDarkTheme: false, savedVideos: [], activeTab: 'Home'}

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state

    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)

    // If no elements satisfy the testing function, -1 is returned.

    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {isDarkTheme, savedVideos, activeTab} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          activeTab,
          savedVideos,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route path="/login" component={LoginForm} />

          <ProtectedRoute exact path="/" component={Home} />

          <ProtectedRoute path="/videos/:id" component={VideoDetailView} />
          <ProtectedRoute path="/trending" component={Trending} />
          <ProtectedRoute path="/gaming" component={Gaming} />
          <ProtectedRoute path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App

/* <Routes>
                    <Route path='/login' element={<LoginForm />} />

                    <Route exact path='/' element={<Home />} />

                    <Route path='/videos/:id' element={<VideoDetailView />} />
                    <Route path='/trending' element={<Trending />} />
                    <Route path='/gaming' element={<Gaming />} />
                    <Route path='/saved-videos' element={<SavedVideos />} />
                    <Route path='/not-found' element={<NotFound />} />
                </Routes> */
