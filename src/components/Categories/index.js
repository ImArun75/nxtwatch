import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

import {
  CategoriesContainer,
  ItemsContainer,
  ListItem,
  ItemValue,
  BottomSection,
  ContactUsHeading,
  EachItemContainer,
  SocialMediaContainer,
  ImgLogo,
  Discription,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

const Categories = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, activeCategory, onChangeCategory} = value

      const textcolor = isDarkTheme ? '#ffffff' : '#181818'
      const activeTabbg = isDarkTheme ? '#383838' : '#f1f5f9'

      const changeHome = () => {
        onChangeCategory('Home')
      }

      const changeTrending = () => {
        onChangeCategory('Trending')
      }

      const changeGaming = () => {
        onChangeCategory('Gaming')
      }

      const changeSavedVideos = () => {
        onChangeCategory('SavedVideos')
      }

      return (
        <CategoriesContainer isDarkTheme={isDarkTheme}>
          <ItemsContainer>
            <Link to="/" className="link-item">
              <ListItem
                onClick={changeHome}
                bgColor={activeCategory === 'Home' ? activeTabbg : null}
                textcolor={textcolor}
              >
                <AiFillHome
                  style={{
                    color: activeCategory === 'Home' ? '#ff0000' : '#606060',
                  }}
                />
                <ItemValue
                  textcolor={textcolor}
                  fontWeight={activeCategory === 'Home' ? 'bold' : '400'}
                >
                  Home
                </ItemValue>
              </ListItem>
            </Link>
            <Link to="/trending" className="link-item">
              <ListItem
                onClick={changeTrending}
                bgColor={activeCategory === 'Trending' ? activeTabbg : null}
              >
                <FaFire
                  style={{
                    color:
                      activeCategory === 'Trending' ? '#ff0000' : '#606060',
                  }}
                />
                <ItemValue
                  textcolor={textcolor}
                  fontWeight={activeCategory === 'Trending' ? 'bold' : '400'}
                >
                  Trending
                </ItemValue>
              </ListItem>
            </Link>
            <Link to="/gaming" className="link-item">
              <ListItem
                onClick={changeGaming}
                bgColor={activeCategory === 'Gaming' ? activeTabbg : null}
                textcolor={textcolor}
              >
                <SiYoutubegaming
                  style={{
                    color: activeCategory === 'Gaming' ? '#ff0000' : '#606060',
                  }}
                />
                <ItemValue
                  textcolor={textcolor}
                  fontWeight={activeCategory === 'Gaming' ? 'bold' : '400'}
                >
                  Gaming
                </ItemValue>
              </ListItem>
            </Link>
            <Link to="/saved-videos" className="link-item">
              <ListItem
                onClick={changeSavedVideos}
                bgColor={activeCategory === 'SavedVideos' ? activeTabbg : null}
                textcolor={textcolor}
              >
                <RiMenuAddLine
                  style={{
                    color:
                      activeCategory === 'SavedVideos' ? '#ff0000' : '#606060',
                  }}
                />
                <ItemValue
                  textcolor={textcolor}
                  fontWeight={activeCategory === 'SavedVideos' ? 'bold' : '400'}
                >
                  Saved videos
                </ItemValue>
              </ListItem>
            </Link>
          </ItemsContainer>
          <BottomSection>
            <ContactUsHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </ContactUsHeading>
            <SocialMediaContainer>
              <EachItemContainer>
                <ImgLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </EachItemContainer>
              <EachItemContainer>
                <ImgLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </EachItemContainer>
              <EachItemContainer>
                <ImgLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </EachItemContainer>
            </SocialMediaContainer>
            <Discription isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </Discription>
          </BottomSection>
        </CategoriesContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Categories
