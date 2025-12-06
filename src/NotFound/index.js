import ThemeContext from '../context/ThemeContext'
import {
  NotFoundContainer,
  Image,
  Heading,
  Para,
  CustomButton,
} from './StyledComponent'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <NotFoundContainer bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}>
          <Image
            alt="not found"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          />
          <Heading color={isDark ? '#ffffff' : 'inherit'}>
            {' '}
            Page Not Found{' '}
          </Heading>
          <Para color={isDark ? '#94a3b8' : 'inherit'}>
            we are sorry, the page you requested could not be found.
          </Para>
          <CustomButton>Retry</CustomButton>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
