import {RiMenuAddLine} from 'react-icons/ri'
import Header from '../Header'
import Categories from '../Categories'

import TrendingItemCard from '../TrendingItemCard'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  CategoriesSavedVideosContainer,
  SavedVideosContainer,
  SavedBar,
  SavedBarlogoContainer,
  SavedHeading,
  VideosContainer,
  NoSavedVideosContainer,
  NoSavedVideoTitle,
  NoSavedVideoImage,
  NoSavedVideoDescription,
} from './styledComponents'

const SavedVideos = () => {
  const renderSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos} = value

        return (
          <SavedVideosContainer
            data-testid="savedVideos"
            isDarkTheme={isDarkTheme}
          >
            <SavedBar data-test-id="banner" isDarkTheme={isDarkTheme}>
              <SavedBarlogoContainer>
                <RiMenuAddLine />
              </SavedBarlogoContainer>
              <SavedHeading isDarkTheme={isDarkTheme}>
                Saved Videos
              </SavedHeading>
            </SavedBar>
            {savedVideos.length > 0 ? (
              <VideosContainer>
                {savedVideos.map(eachItem => (
                  <TrendingItemCard key={eachItem.id} details={eachItem} />
                ))}
              </VideosContainer>
            ) : (
              <NoSavedVideosContainer isDarkTheme={isDarkTheme}>
                <NoSavedVideoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideoTitle isDarkTheme={isDarkTheme}>
                  No saved videos found
                </NoSavedVideoTitle>
                <NoSavedVideoDescription isDarkTheme={isDarkTheme}>
                  You can save your videos while watching them
                </NoSavedVideoDescription>
              </NoSavedVideosContainer>
            )}
          </SavedVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return (
    <>
      <Header />
      <CategoriesSavedVideosContainer>
        <Categories />
        {renderSavedVideos()}
      </CategoriesSavedVideosContainer>
    </>
  )
}

export default SavedVideos
