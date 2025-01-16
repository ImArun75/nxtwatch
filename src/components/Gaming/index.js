import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Cookies from 'js-cookie'

import Header from '../Header'

import Categories from '../Categories'

import GamingItemCard from '../GamingItemCard'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItemContainer,
  LoaderContainer,
  HomeContainer,
  CardItemContainer,
  TrendingContainer,
  TrendingLogoContainer,
  TrendingHeading,
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

class Gaming extends Component {
  state = {
    trendingDetails: [],
  }

  componentDidMount() {
    this.getDetails()
  }

  modifiedData = data => {
    const modifiedHomeData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      thumbnailUrl: eachItem.thumbnail_url,
      viewCount: eachItem.view_count,
    }))

    this.setState({
      trendingDetails: modifiedHomeData,
      apiStatus: apiConstants.success,
    })
  }

  getDetails = async () => {
    this.setState({apiStatus: apiConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()

      this.modifiedData(data.videos)
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccessDetails = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const {trendingDetails} = this.state

        return (
          <>
            <VideoItemContainer data-testid="gaming" isDarkTheme={isDarkTheme}>
              <TrendingContainer
                data-test-id="banner"
                isDarkTheme={isDarkTheme}
              >
                <TrendingLogoContainer>
                  <SiYoutubegaming />
                </TrendingLogoContainer>
                <TrendingHeading isDarkTheme={isDarkTheme}>
                  Gaming
                </TrendingHeading>
              </TrendingContainer>
              <CardItemContainer>
                {trendingDetails.map(eachItem => (
                  <GamingItemCard key={eachItem.id} details={eachItem} />
                ))}
              </CardItemContainer>
            </VideoItemContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureDetails = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

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
        const {isDarkTheme} = value

        return (
          <LoaderContainer data-testid="loader" isDarkTheme={isDarkTheme}>
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideoDetails = () => {
    const {apiStatus} = this.state

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
        <HomeContainer>
          <Categories />
          {this.renderVideoDetails()}
        </HomeContainer>
      </>
    )
  }
}

export default Gaming
