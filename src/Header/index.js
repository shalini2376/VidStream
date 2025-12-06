import {FaMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {BsSun} from 'react-icons/bs'
import Cookie from 'js-cookie'
import ThemeContext from '../context/ThemeContext'
import {
  HeaderContainer,
  LogoImg,
  HeaderNav,
  CustomButton,
  PopupBtnContainer,
  PopupDiv,
  Image,
} from './StyledComponent'

const Header = props => {
  const confirmLogOut = () => {
    const {history} = props
    Cookie.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const onClickThemeBtn = () => {
          changeTheme()
        }

        return (
          <HeaderContainer bgColor={isDark ? '#231f20' : '#ffffff'}>
            <Link to="/">
              <LogoImg
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <HeaderNav>
              <li>
                <CustomButton
                  type="button"
                  bgColor={isDark ? 'transparent' : '#ffffff'}
                  color={isDark ? '#ffffff' : '000000'}
                  onClick={onClickThemeBtn}
                  fontSize="24"
                  data-testid="theme"
                >
                  {isDark ? <BsSun /> : <FaMoon />}
                </CustomButton>
              </li>
              <li>
                <Image
                  alt="profile"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                />
              </li>
              <li>
                <Popup
                  modal
                  trigger={
                    <CustomButton
                      type="button"
                      bgColor="transparent"
                      color={isDark ? '#ffffff' : '#3b82f6'}
                      fontSize="15"
                      border={
                        isDark ? '2px solid #ffffff' : '2px solid #3b82f6'
                      }
                      padding="8px 12px"
                      borderRadius="6px"
                    >
                      Logout
                    </CustomButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupDiv>
                      <p>Are you sure, you want to logout?</p>
                      <PopupBtnContainer>
                        <CustomButton
                          bgColor="transparent"
                          border="1px solid #ffffff"
                          color="#ffffff"
                          borderRadius="5px"
                          onClick={close}
                        >
                          Cancel
                        </CustomButton>
                        <CustomButton
                          bgColor="#3b82f6"
                          border="none"
                          color="#ffffff"
                          borderRadius="5px"
                          fontSize="14"
                          onClick={confirmLogOut}
                        >
                          Confirm
                        </CustomButton>
                      </PopupBtnContainer>
                    </PopupDiv>
                  )}
                </Popup>
              </li>
            </HeaderNav>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(Header)
