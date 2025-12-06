import {Component} from 'react'
import {GiSaveArrow} from 'react-icons/gi'
import {formatDistanceToNowStrict} from 'date-fns'
import ThemeContext from '../context/ThemeContext'
import {
  SavedVideosContainer,
  Header,
  IconButton,
  Heading,
  NoSavedVideosContainer,
  Image,
  Para,
  DisplaySavedVideos,
  ViewsAndTimeDiv,
  LinkTag,
  Div,
} from './StyledComponent'

class SavedVideos extends Component {
  renderSavedVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, savedVideos} = value
        return (
          <>
            <Header bgColor={isDark ? '#181818' : '#d7dfe9'}>
              <IconButton bgColor={isDark ? '#000000' : '#cbd5e1'}>
                <GiSaveArrow />
              </IconButton>
              <Heading marginLeft="5" color={isDark ? '#ffffff' : '#000000'}>
                Saved Videos
              </Heading>
            </Header>
            <DisplaySavedVideos>
              {savedVideos.map(video => (
                <li key={video.id}>
                  <LinkTag to={`/videos/${video.id}`} key={video.id}>
                    <Div>
                      <Image alt="video thumbnail" src={video.thumbnail_url} />
                      <div>
                        <Para color={isDark ? '#ffffff' : '#000000'}>
                          {video.title}
                        </Para>
                        <Para color={isDark ? '#94a3b8' : 'inherit'}>
                          {video.channel.name}
                        </Para>
                        <ViewsAndTimeDiv>
                          <Para color={isDark ? '#94a3b8' : 'inherit'}>
                            {video.view_count} Views
                          </Para>
                          <Para color={isDark ? '#94a3b8' : 'inherit'}>
                            {formatDistanceToNowStrict(
                              new Date(video.published_at),
                              {
                                addSuffix: true,
                              },
                            )}
                          </Para>
                        </ViewsAndTimeDiv>
                      </div>
                    </Div>
                  </LinkTag>
                </li>
              ))}
            </DisplaySavedVideos>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderNoSavedVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoSavedVideosContainer>
            <Image
              alt="no saved videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            />
            <Heading color={isDark ? '#ffffff' : '#000000'} marginBottom="7">
              No Saved Videos Found
            </Heading>
            <Para color={isDark ? '#94a3b8' : 'inherit'}>
              You can save your videos while watching them
            </Para>
          </NoSavedVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, savedVideos = []} = value
          return (
            <SavedVideosContainer
              data-testid="savedVideos"
              bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}
            >
              {savedVideos.length === 0
                ? this.renderNoSavedVideos()
                : this.renderSavedVideosView()}
            </SavedVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SavedVideos
