import {formatDistanceToNowStrict} from 'date-fns'
import {
  VideosThumbnailContainer,
  VideosDiv,
  DescriptionDiv,
  ViewsAndTimeDiv,
  Image,
  DescriptionText,
  LinkTag,
} from './StyledComponent'

const HomePageVideosSection = props => {
  const {thumbnailDetails} = props
  const formattedData = {
    id: thumbnailDetails.id,
    title: thumbnailDetails.title,
    thumbnailUrl: thumbnailDetails.thumbnail_url,
    channel: thumbnailDetails.channel,
    viewCount: thumbnailDetails.view_count,
    publishedAt: thumbnailDetails.published_at,
  }

  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = formattedData
  const formattedChannelData = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }
  const {name, profileImageUrl} = formattedChannelData
  const formattedDate = formatDistanceToNowStrict(new Date(publishedAt), {
    addSuffix: true,
  })
  return (
    <LinkTag to={`/videos/${id}`}>
      <VideosThumbnailContainer>
        <VideosDiv>
          <Image src={thumbnailUrl} alt="video thumbnail" width="100%" />
          <DescriptionDiv>
            <Image
              src={profileImageUrl}
              alt="channel logo"
              width="30px"
              height="30px"
            />
            <div>
              <DescriptionText marginTop="0" marginBottom="0">
                {title}
              </DescriptionText>
              <DescriptionText color="#475569">{name}</DescriptionText>
              <ViewsAndTimeDiv>
                <DescriptionText color="#475569" marginTop="0">
                  {viewCount} Views
                </DescriptionText>
                <DescriptionText color="#475569" marginTop="0">
                  {formattedDate}
                </DescriptionText>
              </ViewsAndTimeDiv>
            </div>
          </DescriptionDiv>
        </VideosDiv>
      </VideosThumbnailContainer>
    </LinkTag>
  )
}
export default HomePageVideosSection
