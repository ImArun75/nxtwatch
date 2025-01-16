import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {FaCircle} from 'react-icons/fa'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ListItemCard,
  ThumbnailImg,
  ListDetails,
  ChannelLogo,
  VideoDetails,
  VideoTitle,
  VideoChannelName,
  VideoReview,
  VideoViews,
  PublishContainer,
  VideoPublistAt,
} from './styledComponents'

import './index.css'

const ItemCard = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {details} = props
      const {id, title, thumbnailUrl, channel, publishedAt, viewCount} = details
      const modifiedChannel = {
        name: channel.name,
        profileImageUrl: channel.profile_image_url,
      }

      const date = new Date(publishedAt)

      const modifiedDate = new Date(date.setHours(0, 0, 0, 0))

      let distance = formatDistanceToNow(modifiedDate, {includeSeconds: true})
      distance = distance
        .replace(/(over|almost|about|less than|more than)/gi, '')
        .trim()

      return (
        <Link to={`/videos/${id}`} className="link-item">
          <ListItemCard>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <ListDetails>
              <ChannelLogo
                src={modifiedChannel.profileImageUrl}
                alt="channel logo"
              />
              <VideoDetails>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <VideoChannelName isDarkTheme={isDarkTheme}>
                  {modifiedChannel.name}
                </VideoChannelName>
                <VideoReview>
                  <VideoViews isDarkTheme={isDarkTheme}>
                    {viewCount} views
                  </VideoViews>
                  <PublishContainer>
                    <FaCircle size="4" color="#616e7c" />
                    <VideoPublistAt isDarkTheme={isDarkTheme}>
                      {distance} ago
                    </VideoPublistAt>
                  </PublishContainer>
                </VideoReview>
              </VideoDetails>
            </ListDetails>
          </ListItemCard>
        </Link>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default ItemCard
