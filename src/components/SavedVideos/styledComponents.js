import styled from 'styled-components'

export const CategoriesSavedVideosContainer = styled.div`
  max-height: 90vh;
  display: flex;
`

export const SavedVideosContainer = styled.div`
  max-height: 90vh;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

export const SavedBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  padding-left: 40px;
`

export const SavedBarlogoContainer = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: #ff0000;
`

export const SavedHeading = styled.h1`
  font-size: 28px;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#0f0f0f')};
`
export const VideosContainer = styled.ul`
  list-style-type: none;
  padding-left: 14px;
  margin-left: 0px;
`
export const NoSavedVideosContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 85%;
`
export const NoSavedVideoImage = styled.img`
  width: 40%;
`
export const NoSavedVideoTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f1f5f9' : '#1e293b')};
  text-align: center;
`
export const NoSavedVideoDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f1f1f1' : '#475569')};
  font-size: 20px;
  text-align: center;
`
export const ThumbnailImg = styled.img`
  width: 350px;
  height: 200px;
`

export const ListDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 10px;
`

export const VideoDetails = styled.div`
  margin-left: 14px;
`

export const VideoTitle = styled.p`
  font-size: 18px;
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
  font-size: 14px;
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
export const ListItemCard = styled.li`
  display: flex;
  margin-left: 0px;
  margin-bottom: 40px;
  font-family: Roboto;
`
