import { Component } from 'react'
import Loader from 'react-loader-spinner'
import { FaCircle } from 'react-icons/fa'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { RiMenuAddLine } from 'react-icons/ri'
import { formatDistanceToNow } from 'date-fns'

import ReactPlayer from 'react-player'

import Cookies from 'js-cookie'

import Header from '../Header'

import Categories from '../Categories'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItemContainer,
  LoaderContainer,
  HomeContainer,
  RenderVideoItemsDetails,
  ChannelLogo,
  VideoDetails,
  VideoTitle,
  VideoChannelName,
  VideoReview,
  VideoViews,
  PublishContainer,
  VideoPublistAt,
  VideoDiscriptionContainer,
  ProfileContainer,
  ProfileDetails,
  VideoSubscriber,
  VideoDescription,
  VideoReviewRatingContainer,
  LikeButton,
  DislikeButton,
  ShareButton,
  VideoRatingContainer,
  Buttontext,
  FailureContainer,
  FailureHeading,
  FailureDisc,
  FailureImage,
  FailureInst,
  FailureButton,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videoDetails: [],
    userThought: '',
  }

  componentDidMount() {
    this.getDetails()
  }

  modifiedData = data => {
    const modifiedChannelData = {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    }

    const modifiedVideoData = {
      id: data.id,
      title: data.title,
      videoUrl: data.video_url,
      thumbnailUrl: data.thumbnail_url,
      channel: modifiedChannelData,
      viewCount: data.view_count,
      publishedAt: data.published_at,
      description: data.description,
      isSaved: false,
    }

    this.setState({
      videoDetails: modifiedVideoData,
      apiStatus: apiConstants.success,
    })
  }

  getDetails = async () => {
    this.setState({ apiStatus: apiConstants.inProgress })

    const { match } = this.props
    const { params } = match

    const { id } = params

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()

      this.modifiedData(data.video_details)
    } else {
      this.setState({ apiStatus: apiConstants.failure })
    }
  }

  isLikeButtonClicked = () => {
    this.setState(prevState => ({
      userThought: prevState.userThought === 'Like' ? '' : 'Like',
    }))
  }

  isDislikeButtonClicked = () => {
    this.setState(prevState => ({
      userThought: prevState.userThought === 'DisLike' ? '' : 'DisLike',
    }))
  }

  renderVideo = () => {
    const { videoDetails } = this.state
    const { videoUrl } = videoDetails
    return <ReactPlayer url={videoUrl} controls width="98%" height="450px" />
  }

  renderSuccessDetails = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const { isDarkTheme, savedVideos, onChangeSavedVideos } = value

        const { videoDetails, userThought } = this.state
        const isSave = savedVideos.find(
          eachVideo => eachVideo.id === videoDetails.id,
        )

        const isShareButtonClicked = () => {
          onChangeSavedVideos(videoDetails)
        }

        const {
          title,
          description,
          channel,
          viewCount,
          publishedAt,
        } = videoDetails

        const { name, profileImageUrl, subscriberCount } = channel

        const date = new Date(publishedAt)

        const modifiedDate = new Date(date.setHours(0, 0, 0, 0))

        let distance = formatDistanceToNow(modifiedDate, {
          includeSeconds: true,
        })
        distance = distance
          .replace(/(over|almost|about|less than|more than)/gi, '')
          .trim()

        const textColor = isDarkTheme ? '#94a3b8' : '#64748b'
        const iconColor = isDarkTheme ? '#94a3b8' : '#64748b'

        return (
          <RenderVideoItemsDetails
            data-testid="videoItemDetails"
            isDarkTheme={isDarkTheme}
          >
            {this.renderVideo()}
            <VideoDiscriptionContainer>
              <VideoDetails>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <VideoReviewRatingContainer>
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
                  <VideoRatingContainer>
                    <LikeButton
                      type="button"
                      onClick={this.isLikeButtonClicked}
                    >
                      <AiFillLike
                        style={{
                          color: userThought === 'Like' ? '#2563eb' : iconColor,
                          width: '20px',
                          height: '20px',
                        }}
                      />
                      <Buttontext
                        textColor={
                          userThought === 'Like' ? '#2563eb' : textColor
                        }
                      >
                        Like
                      </Buttontext>
                    </LikeButton>
                    <DislikeButton
                      type="button"
                      onClick={this.isDislikeButtonClicked}
                    >
                      <AiFillDislike
                        style={{
                          color:
                            userThought === 'DisLike' ? '#2563eb' : iconColor,
                          width: '20px',
                          height: '20px',
                        }}
                      />
                      <Buttontext
                        textColor={
                          userThought === 'DisLike' ? '#2563eb' : textColor
                        }
                      >
                        Dislike
                      </Buttontext>
                    </DislikeButton>
                    <ShareButton type="button" onClick={isShareButtonClicked}>
                      <RiMenuAddLine
                        style={{
                          color: isSave ? '#2563eb' : iconColor,
                          width: '20px',
                          height: '20px',
                        }}
                      />
                      <Buttontext textColor={isSave ? '#2563eb' : textColor}>
                        {isSave ? 'Saved' : 'Save'}
                      </Buttontext>
                    </ShareButton>
                  </VideoRatingContainer>
                </VideoReviewRatingContainer>

                <hr className="line" />
                <ProfileContainer>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <ProfileDetails>
                    <VideoChannelName isDarkTheme={isDarkTheme}>
                      {name}
                    </VideoChannelName>
                    <VideoSubscriber isDarkTheme={isDarkTheme}>
                      {subscriberCount} subscribers
                    </VideoSubscriber>
                    <VideoDescription isDarkTheme={isDarkTheme}>
                      {description}
                    </VideoDescription>
                  </ProfileDetails>
                </ProfileContainer>
              </VideoDetails>
            </VideoDiscriptionContainer>
          </RenderVideoItemsDetails>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureDetails = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const { isDarkTheme } = value

        const imgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer isDarkTheme={isDarkTheme}>
            <FailureImage src={imgUrl} alt="failure view" />
            <FailureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDisc isDarkTheme={isDarkTheme}>
              We are having some trouble completing your request.
            </FailureDisc>
            <FailureInst isDarkTheme={isDarkTheme}>
              Please try again.
            </FailureInst>
            <FailureButton onClick={this.retryButton}>Retry</FailureButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoadingView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const { isDarkTheme } = value

        return (
          <LoaderContainer data-testid="loader" isDarkTheme={isDarkTheme}>
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideoDetails = () => {
    const { apiStatus } = this.state

    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccessDetails()
      case apiConstants.failure:
        return this.renderFailureDetails()
      case apiConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <HomeContainer data-testid="home">
          <Categories />
          <VideoItemContainer data-testid="videoItemDetails">
            {this.renderVideoDetails()}
          </VideoItemContainer>
        </HomeContainer>
      </>
    )
  }
}

export default VideoItemDetails
