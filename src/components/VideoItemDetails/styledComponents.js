import styled from 'styled-components'

export const RenderVideoItemsDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const HomeContainer = styled.div`
  max-height: 90vh;
  display: flex;
`

export const VideoItemContainer = styled.div`
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

export const LoaderContainer = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 10px;
`

export const VideoDetails = styled.div``
export const VideoTitle = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#212121')};
`

export const VideoChannelName = styled.p`
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#212121')};
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
  color: ${props => (props.isDarkTheme ? '#909090' : '#212121')};
`

export const VideoPublistAt = styled.p`
  font-size: 12px;
  margin-left: 6px;
  color: ${props => (props.isDarkTheme ? '#909090' : '#212121')};
`

export const PublishContainer = styled.div`
  display: flex;
  align-items: center;
`

export const VideoDiscriptionContainer = styled.div`
  padding 20px 0px;
  margin-left: 0px;
`

export const VideoReviewRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const VideoRatingContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LikeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: transparent;
  column-gap: 5px;
  cursor: pointer;
  margin-left: 24px;
`

export const DislikeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: transparent;
  column-gap: 5px;
  cursor: pointer;
  margin-left: 24px;
`

export const ShareButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: transparent;
  column-gap: 5px;
  cursor: pointer;
  margin-left: 24px;
  margin-right: 30px;
`

export const Buttontext = styled.p`
  font-family: 'Roboto';
  color: ${props => props.textColor};
  font-size: 16px;
  margin: 0px;
`
export const ProfileContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const ProfileDetails = styled.div`
  margin: 0px 30px;
  padding-top: 0px;
`

export const VideoSubscriber = styled.p`
  font-size: 11px;
  color: #616e7c;
  font-weight: 400;
`

export const VideoDescription = styled.p`
  font-size: 14px;
  color: #0f0f0f;
  font-weight: 500;
  margin-top: 40px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#212121')};
`
export const FailureContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#f9f9f9')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
`

export const FailureImage = styled.img`
  width: 280px;
  height: 280px;
`

export const FailureHeading = styled.h1`
  font-size: 34px;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#0f0f0f')};
`

export const FailureDisc = styled.p`
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#616e7c')};
`

export const FailureInst = styled.p`
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#616e7c')};
`
export const FailureButton = styled.button`
  font-size: 14px;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 8px 28px;
  background-color: #4f46e5;
  cursor: pointer;
  outline: none;
`
