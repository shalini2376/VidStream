import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../context/ThemeContext'
import {
  GamingContainer,
  GamingHeader,
  GamingHeading,
  GamingIconButton,
  GamingVideosDiv,
  GamingThumbnailImg,
  GamingVideoTitle,
  GamingVideoText,
  GamingVideosContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  CustomButton,
  LinkTag,
} from './StyledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingDataList: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const gamingApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(gamingApiUrl, options)
      const data = await response.json()
      if (response.ok) {
        this.setState({
          gamingDataList: data.videos,
          apiStatus: apiStatusConstant.success,
        })
      } else {
        this.setState({
          apiStatus: apiStatusConstant.failure,
        })
      }
    } catch (error) {
      console.log(`Network Error: ${error}`)
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  renderLoaderView = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  renderGamingView = () => {
    const {gamingDataList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <GamingHeader bgColor={isDark ? '#181818' : '#d7dfe9'}>
                <GamingIconButton bgColor={isDark ? '#000000' : '#cbd5e1'}>
                  <SiYoutubegaming />
                </GamingIconButton>
                <GamingHeading color={isDark ? '#ffffff' : '#000000'}>
                  Gaming
                </GamingHeading>
              </GamingHeader>
              <GamingVideosContainer>
                {gamingDataList.map(gamingData => (
                  <LinkTag key={gamingData.id} to={`/videos/${gamingData.id}`}>
                    <GamingVideosDiv key={gamingData.id}>
                      <GamingThumbnailImg
                        alt="video thumbnail"
                        src={gamingData.thumbnail_url}
                      />
                      <GamingVideoTitle color={isDark ? '#ffffff' : '#000000'}>
                        {gamingData.title}
                      </GamingVideoTitle>
                      <GamingVideoText>
                        {gamingData.view_count} Watching Worldwide
                      </GamingVideoText>
                    </GamingVideosDiv>
                  </LinkTag>
                ))}
              </GamingVideosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailerView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureContainer>
            <FailureImage
              alt="failure view"
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
            />
            <GamingVideoTitle color={isDark ? '#ffffff' : '#1e293b'}>
              Oops Something Went Wrong
            </GamingVideoTitle>
            <GamingVideoText color={isDark ? '#ffffff' : '#475569'}>
              We are having some trouble to complete your request.Please Try
              Again.
            </GamingVideoText>
            <CustomButton onClick={this.getGamingData}>Try Again</CustomButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    const {apiStatus} = this.state
    let view
    switch (apiStatus) {
      case apiStatusConstant.failure:
        view = this.renderFailerView()
        break
      case apiStatusConstant.success:
        view = this.renderGamingView()
        break
      case apiStatusConstant.inProgress:
        view = this.renderLoaderView()
        break
      default:
        view = null
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <GamingContainer
              data-testid="gaming"
              bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}
            >
              {view}
            </GamingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
