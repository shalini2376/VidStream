import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {formatDistanceToNowStrict} from 'date-fns'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import ThemeContext from '../context/ThemeContext'
import {
  TrendingContainer,
  TrendingHeader,
  TrendingHeading,
  TrendingVideosContianer,
  TrendingThumbnailImg,
  TrandingDescriptionContainer,
  Heading,
  Para,
  TimeDiv,
  LoaderContainer,
  TrendingIconButton,
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

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    // eslint-disable-next-line
    trendingDataList: [],
  }

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const trendingApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(trendingApiUrl, options)
      const data = await response.json()
      this.setState({
        apiStatus: apiStatusConstant.success,
        trendingDataList: data.videos,
      })
    } catch (error) {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
      console.log(`Network Error: ${error}`)
    }
  }

  renderLoaderView = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

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
            <Heading color={isDark ? '#ffffff' : '#1e293b'}>
              Oops Something Went Wrong
            </Heading>
            <Para color={isDark ? '#ffffff' : '#475569'}>
              We are having some trouble to complete your request.Please Try
              Again.
            </Para>
            <CustomButton onClick={this.getTrendingData}>
              Try Again
            </CustomButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrendingView = () => {
    const {trendingDataList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <TrendingHeader bgColor={isDark ? '#181818' : '#d7dfe9'}>
                <TrendingIconButton bgColor={isDark ? '#000000' : '#cbd5e1'}>
                  <FaFire />
                </TrendingIconButton>
                <TrendingHeading color={isDark ? '#ffffff' : '#000000'}>
                  Trending
                </TrendingHeading>
              </TrendingHeader>
              {trendingDataList.map(trendingVideo => (
                <LinkTag
                  key={trendingVideo.id}
                  to={`/videos/${trendingVideo.id}`}
                >
                  <TrendingVideosContianer key={trendingVideo.id}>
                    <TrendingThumbnailImg
                      alt="video thumbnail"
                      src={trendingVideo.thumbnail_url}
                    />
                    <TrandingDescriptionContainer>
                      <Heading color={isDark ? '#ffffff' : '#000000'}>
                        {trendingVideo.title}
                      </Heading>
                      <Para>{trendingVideo.channel.name}</Para>
                      <TimeDiv>
                        <p>{trendingVideo.view_count} Views</p>
                        <p>
                          {formatDistanceToNowStrict(
                            new Date(trendingVideo.published_at),
                            {
                              addSuffix: true,
                            },
                          )}
                        </p>
                      </TimeDiv>
                    </TrandingDescriptionContainer>
                  </TrendingVideosContianer>
                </LinkTag>
              ))}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  render() {
    const {apiStatus} = this.state
    let view
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        view = this.renderLoaderView()
        break
      case apiStatusConstant.success:
        view = this.renderTrendingView()
        break
      case apiStatusConstant.failure:
        view = this.renderFailerView()
        break
      default:
        view = null
    }
    return (
      <>
        <ThemeContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <TrendingContainer
                data-testid="trending"
                bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}
              >
                {view}
              </TrendingContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default Trending
