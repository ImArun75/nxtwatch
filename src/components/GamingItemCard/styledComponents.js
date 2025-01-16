import styled from 'styled-components'

export const ListItemCard = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  margin-bottom: 40px;
  font-family: Roboto;
`

export const ThumbnailImg = styled.img`
  width: 180px;
  height: 220px;
`

export const VideoDetails = styled.div`
  margin-left: 0px;
`

export const VideoTitle = styled.p`
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#212121')};
`

export const VideoViews = styled.p`
  font-size: 12px;
  margin-right: 14px;
  color: ${props => (props.isDarkTheme ? '#606060' : '#212121')};
`

export const VideoPublistAt = styled.p`
  font-size: 12px;
  margin-left: 6px;
  color: #616e7c;
`
