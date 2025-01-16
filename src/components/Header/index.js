import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HeaderContainer,
  ItemsContainer,
  HeaderLogo,
  ProfileItem,
  ThemeButton,
  LogoutButton,
  PopUpCard,
  CardText,
  CardButtonContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => {
  const clickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, onChangeTheme} = value

        const changeTheme = () => onChangeTheme()

        const headerLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <>
            <HeaderContainer isDarkTheme={isDarkTheme}>
              <Link to="/">
                <HeaderLogo src={headerLogo} alt="website logo" />
              </Link>
              <ItemsContainer>
                <ThemeButton data-testid="theme" onClick={changeTheme}>
                  {isDarkTheme ? (
                    <FiSun size="20px" style={{color: '#cccccc'}} />
                  ) : (
                    <FaMoon size="20px" />
                  )}
                </ThemeButton>

                <ProfileItem
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                      Logout
                    </LogoutButton>
                  }
                  contentStyle={{
                    background: isDarkTheme ? ' #313131' : '#ffffff',
                    borderRadius: '10px',
                    width: '25%',
                    border: '0px',
                  }}
                >
                  {close => (
                    <PopUpCard>
                      <CardText isDarkTheme={isDarkTheme}>
                        Are you sure, you want to logout?
                      </CardText>
                      <CardButtonContainer>
                        <CancelButton
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                          isDarkTheme={isDarkTheme}
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          isDarkTheme={isDarkTheme}
                          type="button"
                          onClick={clickLogout}
                        >
                          Confirm
                        </ConfirmButton>
                      </CardButtonContainer>
                    </PopUpCard>
                  )}
                </Popup>
              </ItemsContainer>
            </HeaderContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
