import {Component} from 'react'

import Header from '../Header'
import Categories from '../Categories'

import {
  SideBarAndView,
  NotFoundContainer,
  NotFoundImage,
  NotFoundTitle,
  NotFoundDescription,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

class NotFound extends Component {
  renderNotFoundView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NotFoundContainer isDarkTheme={isDarkTheme}>
            <NotFoundImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <NotFoundTitle isDarkTheme={isDarkTheme}>
              Page Not Found
            </NotFoundTitle>
            <NotFoundDescription isDarkTheme={isDarkTheme}>
              we are sorry, the page you requested could not be found.
            </NotFoundDescription>
          </NotFoundContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <SideBarAndView>
          <Categories />
          {this.renderNotFoundView()}
        </SideBarAndView>
      </>
    )
  }
}

export default NotFound
