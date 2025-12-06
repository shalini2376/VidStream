import Cookies from 'js-cookie'
import {Component} from 'react'
import {IoMdSearch, IoIosClose} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import ThemeContext from '../context/ThemeContext'
import HomePageVideosSection from '../HomePageVideosSection'
import {
  HomeContainer,
  InputDiv,
  SearchBtn,
  HomeVideosDiv,
  OnlyVideosContainer,
  SearchField,
  BannerContainer,
  BannerImage,
  CustomButton,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  Heading,
  Text,
} from './StyledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    // eslint-disable-next-line
    searchInput: '',
    videoThumbnailList: [],
    isBannerDisplayed: true,
  }

  componentDidMount() {
    this.getHomePageData()
  }

  onClickCloseBtn = () => {
    this.setState(prevState => ({
      isBannerDisplayed: !prevState.isBannerDisplayed,
    }))
  }

  OnChangeSearchValue = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickSearchBtn = () => {
    this.getHomePageData()
  }

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.getHomePageData()
    }
  }

  getHomePageData = async () => {
    const {searchInput} = this.state
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const api = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(api, options)
      const data = await response.json()
      // console.log(data.videos)
      if (response.ok) {
        this.setState({
          apiStatus: apiStatusConstant.success,
          videoThumbnailList: data.videos,
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

  renderBannerView = () => {
    const {isBannerDisplayed} = this.state
    if (!isBannerDisplayed) {
      return null
    }
    return (
      <BannerContainer data-testid="banner">
        <CustomButton
          data-testid="close"
          alignSelf="end"
          right="0"
          top="0"
          border="none"
          outline="none"
          position="absolute"
          fontSize="20"
          onClick={this.onClickCloseBtn}
        >
          <IoIosClose />
        </CustomButton>
        <BannerImage
          alt="nxt watch logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <Text color="#000000">
          Buy Nxt Watch Premium prepaid plans with UPI
        </Text>
        <CustomButton border="1px solid #000000" padding="8px 12px">
          GET IT NOW
        </CustomButton>
      </BannerContainer>
    )
  }

  renderHomeContainer = () => {
    const {videoThumbnailList, apiStatus} = this.state

    const renderVideoSection = () => {
      if (apiStatus === apiStatusConstant.failure) {
        return this.renderFailerView()
      }

      if (
        apiStatus === apiStatusConstant.success &&
        videoThumbnailList.length === 0
      ) {
        return this.renderNoVideosView()
      }

      return (
        <OnlyVideosContainer>
          {videoThumbnailList.map(thumbnailDetails => (
            <HomePageVideosSection
              key={thumbnailDetails.id}
              thumbnailDetails={thumbnailDetails}
            />
          ))}
        </OnlyVideosContainer>
      )
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <HomeVideosDiv>
                {this.renderBannerView()}
                <InputDiv>
                  <SearchField
                    bgColor={isDark ? '#181818' : '#ffffff'}
                    color={isDark ? '#ffffff' : '#181818'}
                    type="search"
                    placeholder="Search"
                    onChange={this.OnChangeSearchValue}
                    onKeyDown={this.handleKeyDown}
                  />
                  <SearchBtn
                    bgColor={isDark ? '#231f20' : '#d7dfe9'}
                    type="button"
                    onClick={this.onClickSearchBtn}
                    data-testid="searchButton "
                  >
                    <IoMdSearch />
                  </SearchBtn>
                </InputDiv>
                {renderVideoSection()}
              </HomeVideosDiv>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderNoVideosView = () => (
    <FailureContainer>
      <FailureImage
        alt="no videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      />
      <Heading>No Search results found</Heading>
      <p>Try different key words or remove search filter</p>
      <CustomButton
        color="#ffffff"
        bgColor="#3b82f6"
        border="none"
        outline="none"
        padding="8px 12px"
        fontSize="15"
        onClick={this.getHomePageData}
      >
        Retry
      </CustomButton>
    </FailureContainer>
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
            <Heading color={isDark ? '#ffffff' : 'inherit'}>
              Oops! Something Went Wrong
            </Heading>
            <Text color={isDark ? '#94a3b8' : 'inherit'}>
              We are having some trouble to complete your request.Please Try
              Again.
            </Text>
            <CustomButton
              color="#ffffff"
              bgColor="#4f46e5"
              border="none"
              outline="none"
              padding="8px 12px"
              fontSize="15"
              onClick={this.getHomePageData}
              borderRadius="6px"
            >
              Retry
            </CustomButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    const {apiStatus} = this.state
    let view
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        view = this.renderLoaderView()
        break
      default:
        view = this.renderHomeContainer()
    }
    return (
      <>
        <ThemeContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <HomeContainer
                data-testid="home"
                color={isDark ? '#ffffff' : '#000000'}
                bgColor={isDark ? '#181818' : '#f9f9f9'}
              >
                {view}
              </HomeContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default Home
