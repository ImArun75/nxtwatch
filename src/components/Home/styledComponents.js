import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-height: 90vh;
  display: flex;
`
export const HomeBgContainer = styled.div`
  max-height: 90vh;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`

export const HomeInputItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 14px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: ${props =>
    props.isDarkTheme ? '1px solid #cccccc' : '1px solid #cbd5e1'};
  width: 50%;
`
export const CustomInput = styled.input`
  padding: 8px 20px;
  width: 100%;
  outline: none;
  background-color: transparent;
  border: none;
  color: ${props => (props.isDark ? '#f8fafc' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 15px;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px 40px;
  margin-bottom: 20px;
  margin-left: 0px;
  width: 100%;
`

export const BannerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const BannerLogo = styled.img`
  width: 80px;
  height: 20px;
`

export const BannerDisc = styled.p`
  font-size: 16px;
`

export const BannerButton = styled.button`
  border: 2px solid #231f20;
  color: #231f20;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  padding: 8px 26px;
`

export const BannerContext = styled.div`
  width: 260px;
`

export const BannerCloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
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

export const SearchButton = styled.button`
  padding: 8px 40px;
  cursor: pointer;
  border-right: none;
  border-top: none;
  border-bottom: none;
  background-color: ${props => (props.isDarkTheme ? '#383838' : '#f1f1f1')};
  border-left: ${props =>
    props.isDarkTheme ? '2px solid #606060' : '2px solid #cbd5e1'};
`

export const VideoItemsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  padding-left: 0px;
  margin-left: 0px;
  flex-wrap: wrap;
  align-flex: flex-start;
  overflow-y: scroll;
  max-height: 70vh;
  flex-grow: 1;
  flex-shrink: 1;
`

export const NoItemsContainer = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
`

export const NoItemImg = styled.img`
  width: 180px;
  height: 180px;
`
export const NoItemsHeading = styled.h1`
  color: #313131;
  font-size: 26px;
`

export const NoItemsDisc = styled.p`
  color: #909090;
  font-size: 18px;
`
export const FailureContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
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
