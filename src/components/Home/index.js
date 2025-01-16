import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {FaSearch, FaTimes} from 'react-icons/fa'

import Header from '../Header'
import Categories from '../Categories'

import NxtWatchContext from '../../context/NxtWatchContext'

import ItemCard from '../ItemCard'

import {
  HomeContainer,
  HomeBgContainer,
  LoaderContainer,
  HomeInputItemsContainer,
  InputContainer,
  CustomInput,
  SearchButton,
  BannerContainer,
  BannerDetails,
  BannerContext,
  BannerDisc,
  VideoItemsContainer,
  BannerLogo,
  BannerCloseButton,
  BannerButton,
  NoItemsContainer,
  NoItemImg,
  NoItemsHeading,
  NoItemsDisc,
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

class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: apiConstants.initial,
    isShowPopup: true,
    homeData: [],
  }

  componentDidMount() {
    this.getDetails()
  }

  modifiedData = data => {
    const modifiedHomeData = data.videos.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      thumbnailUrl: eachItem.thumbnail_url,
      channel: eachItem.channel,
      viewCount: eachItem.view_count,
      publishedAt: eachItem.published_at,
    }))

    this.setState({homeData: modifiedHomeData, apiStatus: apiConstants.success})
  }

  getDetails = async () => {
    this.setState({apiStatus: apiConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()

      this.modifiedData(data)
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  changeSearch = e => {
    this.setState({searchInput: e.target.value})
  }

  bannerClose = () => {
    this.setState({isShowPopup: false})
  }

  seachButtonClicked = () => {
    this.setState({searchInput: ''})
    return this.getDetails()
  }

  retryButton = () => {
    this.getDetails()
  }

  changeSearch = e => {
    this.setState({searchInput: e.target.value})
  }

  renderPopUp = () => (
    <BannerContainer data-testid="banner">
      <BannerDetails>
        <BannerContext>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerDisc>Buy Nxt Watch Premium prepaid plans with UPI</BannerDisc>
          <BannerButton>GET IT NOW</BannerButton>
        </BannerContext>
        <BannerCloseButton data-testid="close" onClick={this.bannerClose}>
          <FaTimes size="20" />
        </BannerCloseButton>
      </BannerDetails>
    </BannerContainer>
  )

  renderSuccessDetails = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const {isShowPopup, homeData, searchInput} = this.state

        return (
          <>
            <HomeBgContainer data-testid="home" isDarkTheme={isDarkTheme}>
              {isShowPopup && this.renderPopUp()}
              <HomeInputItemsContainer>
                <InputContainer>
                  <CustomInput
                    isDarkTheme={isDarkTheme}
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.changeSearch}
                  />
                  <SearchButton
                    type="button"
                    isDarkTheme={isDarkTheme}
                    onClick={this.seachButtonClicked}
                    data-testid="searchButton"
                  >
                    <FaSearch
                      size="14"
                      style={{color: isDarkTheme ? '#909090' : '#383838'}}
                    />
                  </SearchButton>
                </InputContainer>
                {homeData.length > 0 ? (
                  <VideoItemsContainer>
                    {homeData.map(eachItem => (
                      <ItemCard key={eachItem.id} details={eachItem} />
                    ))}
                  </VideoItemsContainer>
                ) : (
                  <NoItemsContainer>
                    <NoItemImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
                      alt="no videos"
                    />
                    <NoItemsHeading>No Search Results Found</NoItemsHeading>
                    <NoItemsDisc>
                      Try different key words or remove search filter
                    </NoItemsDisc>
                    <FailureButton onClick={this.retryButton}>
                      Retry
                    </FailureButton>
                  </NoItemsContainer>
                )}
              </HomeInputItemsContainer>
            </HomeBgContainer>
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

  renderHomeDetails = () => {
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
          {this.renderHomeDetails()}
        </HomeContainer>
      </>
    )
  }
}

export default Home
