import {Link} from 'react-router-dom'

import {
  ListItemCard,
  ThumbnailImg,
  VideoDetails,
  VideoTitle,
  VideoViews,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

const GamingItemCard = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {details} = props
      const {id, title, thumbnailUrl, viewCount} = details

      return (
        <>
          <Link to={`/videos/${id}`} className="link-item">
            <ListItemCard>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <VideoViews isDarkTheme={isDarkTheme}>
                  {viewCount} views
                </VideoViews>
              </VideoDetails>
            </ListItemCard>
          </Link>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GamingItemCard
