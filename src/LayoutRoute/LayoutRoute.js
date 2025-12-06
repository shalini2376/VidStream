import Header from '../Header'
import HomePageFilterSection from '../HomePageFilterSection'
import {MainContainer, ContentContainer} from './StyledComponent'
import ThemeContext from '../context/ThemeContext'

const LayoutRoute = ({children}) => (
  <>
    <Header />
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <MainContainer bgColor={isDark ? '#181818' : '#f9f9f9'}>
            <HomePageFilterSection />
            <ContentContainer>{children}</ContentContainer>
          </MainContainer>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default LayoutRoute
