import {Component} from 'react'
import Cookie from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {GiSaveArrow} from 'react-icons/gi'
import {formatDistanceToNowStrict} from 'date-fns'
import ThemeContext from '../context/ThemeContext'
import {
  DetailVideosContainer,
  DetailContainer,
  TitleHeading,
  ViewsCountAndLikeDislikeDiv,
  ViewsAndTimeDiv,
  LikeDislikeAndSaveBtnDiv,
  CustomButton,
  ChannelLogoAndNameDiv,
  Image,
  ChannelNameAndSubscribersDiv,
  LoaderContainer,
  Para,
  Hr,
  FailureContainer,
  FailureImage,
  Heading,
} from './StyledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailedView extends Component {
  state = {
    videoDetail: {},
    apiStatus: apiStatusConstant.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const jwtToken = Cookie.get('jwt_token')
    const {match} = this.props
    const {id} = match.params
    const videoDetailApi = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(videoDetailApi, options)
      const data = await response.json()
      if (response.ok) {
        this.setState({
          videoDetail: data.video_details,
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

  handleLikeBtn = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: prevState.isLiked ? prevState.isDisliked : false,
    }))
  }

  handleDislikeBtn = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: prevState.isDisliked ? prevState.isLiked : false,
    }))
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
            <Heading color={isDark ? '#ffffff' : '#1e293b'}>
              Oops Something Went Wrong
            </Heading>
            <Para color={isDark ? '#ffffff' : '#475569'}>
              We are having some trouble to complete your request.Please Try
              Again.
            </Para>
            <CustomButton
              onClick={this.getVideoDetails}
              bgColor="#4f46e5"
              color="#ffffff"
              padding="8px 12px"
            >
              Try Again
            </CustomButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoDetailsView = () => {
    const {videoDetail, isLiked, isDisliked, isSaved} = this.state
    const {channel} = videoDetail
    const formattedDate = formatDistanceToNowStrict(
      new Date(videoDetail.published_at),
      {
        addSuffix: true,
      },
    )
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, addToSavedVideos, removeFromSavedVideos} = value
          return (
            <DetailContainer>
              <ReactPlayer url={videoDetail.video_url} controls />
              <TitleHeading color={isDark ? '#ffffff' : 'inherit'}>
                {videoDetail.title}
              </TitleHeading>
              <ViewsCountAndLikeDislikeDiv
                color={isDark ? '#94a3b8' : 'inherit'}
              >
                <ViewsAndTimeDiv>
                  <p>{videoDetail.view_count} Views</p>
                  <p>{formattedDate}</p>
                </ViewsAndTimeDiv>
                <LikeDislikeAndSaveBtnDiv>
                  <CustomButton
                    onClick={this.handleLikeBtn}
                    bgColor="transparent"
                    color={isLiked ? '#2563eb ' : '#64748b'}
                  >
                    {' '}
                    <AiOutlineLike /> Like
                  </CustomButton>
                  <CustomButton
                    onClick={this.handleDislikeBtn}
                    bgColor="transparent"
                    color={isDisliked ? '#2563eb ' : '#64748b'}
                  >
                    {' '}
                    <BiDislike /> Dislike
                  </CustomButton>
                  <CustomButton
                    onClick={() => {
                      this.setState(prevState => {
                        const updatedState = !prevState.isSaved
                        if (updatedState) {
                          addToSavedVideos(videoDetail)
                        } else {
                          removeFromSavedVideos(videoDetail.id)
                        }
                        return {isSaved: updatedState}
                      })
                    }}
                    color={isSaved ? '#2563eb ' : '#64748b'}
                    bgColor="transparent"
                  >
                    <GiSaveArrow />
                    <span>{isSaved ? 'Saved' : 'Save'}</span>
                  </CustomButton>
                </LikeDislikeAndSaveBtnDiv>
              </ViewsCountAndLikeDislikeDiv>
              <Hr />
              <ChannelLogoAndNameDiv>
                <Image alt="channel logo" src={channel.profile_image_url} />
                <ChannelNameAndSubscribersDiv
                  color={isDark ? '#94a3b8' : 'inherit'}
                >
                  <Para>{channel.name}</Para>
                  <Para>{channel.subscriber_count}</Para>
                  <Para color={isDark ? '#ffffff' : 'inherit'}>
                    {videoDetail.description}
                  </Para>
                </ChannelNameAndSubscribersDiv>
              </ChannelLogoAndNameDiv>
            </DetailContainer>
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
        view = this.renderVideoDetailsView()
        break
      case apiStatusConstant.failure:
        view = this.renderFailerView()
        break
      default:
        view = null
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <DetailVideosContainer
              data-testid="videoItemDetails"
              bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}
            >
              {view}
            </DetailVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetailedView
