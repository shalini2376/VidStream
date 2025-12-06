import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {GiSaveArrow} from 'react-icons/gi'
import ThemeContext from '../context/ThemeContext'
import {
  FilterSection,
  VideosFilterListContainer,
  FilterButton,
  ContactUsContainer,
  Span,
  SocialMediaButtonContainer,
  Image,
  BtnLink,
  Para,
} from './StyledComponent'

const filterListItems = [
  {id: '', label: 'Home', icon: IoMdHome},
  {id: 'trending', label: 'Trending', icon: FaFire},
  {id: 'gaming', label: 'Gaming', icon: SiYoutubegaming},
  {id: 'saved-videos', label: 'Saved Videos', icon: GiSaveArrow},
]

class HomePageFilterSection extends Component {
  render() {
    const {location} = this.props
    // console.log(location)
    const currentPath = location.pathname.replace('/', '')
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <FilterSection bgColor={isDark ? '#231f20' : '#ffffff'}>
              <VideosFilterListContainer>
                {filterListItems.map(({id, label, icon: Icon}) => (
                  <li key={id}>
                    <BtnLink to={`/${id}`}>
                      <FilterButton
                        bgColor={currentPath === id ? '#909090' : 'Transparent'}
                        color={isDark ? '#ffffff' : '#000000'}
                      >
                        <Span
                          color={currentPath === id ? '#ff0000' : '#7e858e'}
                        >
                          <Icon />
                        </Span>
                        {label}
                      </FilterButton>
                    </BtnLink>
                  </li>
                ))}
              </VideosFilterListContainer>
              <ContactUsContainer>
                <Para color={isDark ? '#ffffff' : 'inherit'}>CONTACT US</Para>
                <SocialMediaButtonContainer>
                  <Image
                    alt="facebook logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  />
                  <Image
                    alt="twitter logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  />
                  <Image
                    alt="linked in logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  />
                </SocialMediaButtonContainer>
                <Para color={isDark ? '#94a3b8' : 'inherit'}>
                  Enjoy! Now to see your channels and recommendations!
                </Para>
              </ContactUsContainer>
            </FilterSection>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(HomePageFilterSection)
