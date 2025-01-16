import styled from 'styled-components'

export const ListItemCard = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 40px;
  width: 300px;
  font-family: Roboto;
`

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 160px;
`

export const ListDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
`

export const ChannelLogo = styled.img`
  width: 30px;
  height: 30px;
`

export const VideoDetails = styled.div`
  margin-left: 14px;
`

export const VideoTitle = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#212121')};
`

export const VideoChannelName = styled.p`
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#606060' : '#212121')};
`

export const VideoReview = styled.div`
  margin-left: 14px;
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
`

export const VideoViews = styled.p`
  font-size: 12px;
  margin-right: 14px;
  color: ${props => (props.isDarkTheme ? '#606060' : '#212121')};
`

export const VideoPublistAt = styled.p`
  font-size: 12px;
  margin-left: 6px;
  color: ${props => (props.isDarkTheme ? '#606060' : '#212121')};
`

export const PublishContainer = styled.div`
  display: flex;
  align-items: center;
`
