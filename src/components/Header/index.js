import {Navigate, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'

import Popup from 'reactjs-popup'
import {FiSun, FiLogOut} from 'react-icons/fi'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import './index.css'

import {
  HeaderContainer,
  Logo,
  IconsContainer,
  ProfileLogo,
  Logout,
  ThemeButton,
  ButtonsContainer,
  smallLogout,
} from './styledComponents'

const Header = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const backgrodunColor = isDarkTheme ? '#313131' : '#f1f5f9'
      const buttonColor = isDarkTheme ? 'white' : 'skyblue'

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        window.location.href = '/login'
      }

      return (
        <HeaderContainer style={{backgroundColor: `${backgrodunColor}`}}>
          <Logo
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
          />
          <IconsContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={() => toggleTheme()}
            >
              {isDarkTheme ? (
                <FiSun
                  style={{
                    fontSize: 30,
                    marginRight: 12,
                    cursor: 'pointer',
                    color: 'white',
                  }}
                />
              ) : (
                <FaMoon
                  style={{fontSize: 30, marginRight: 12, cursor: 'pointer'}}
                />
              )}
            </ThemeButton>
            <ProfileLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <Logout
                    style={{
                      borderColor: `${buttonColor}`,
                      color: `${buttonColor}`,
                    }}
                  >
                    Logout
                  </Logout>
                }
              >
                {close => (
                  <div className="model-container">
                    <div style={{textAlign: 'center'}}>
                      <p>Are you sure, you want to logout?</p>
                    </div>
                    <ButtonsContainer>
                      <button
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="trigger-button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </button>
                    </ButtonsContainer>
                  </div>
                )}
              </Popup>
            </div>

            <div className="mobile-popup-container">
              <Popup
                modal
                trigger={
                  <Logout
                    style={{
                      borderColor: `${buttonColor}`,
                      color: `${buttonColor}`,
                    }}
                  >
                    <FiLogOut style={{fonSize: 30}} />
                  </Logout>
                }
              >
                {close => (
                  <div className="model-container">
                    <div style={{textAlign: 'center'}}>
                      <p>Are you sure, you want to logout?</p>
                    </div>
                    <ButtonsContainer>
                      <button
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="trigger-button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </button>
                    </ButtonsContainer>
                  </div>
                )}
              </Popup>
            </div>
          </IconsContainer>
        </HeaderContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default Header
