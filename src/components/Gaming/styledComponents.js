import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-height: 90vh;
  display: flex;
`

export const VideoItemContainer = styled.div`
  max-height: 90vh;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};

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

export const TrendingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#e2e8f0')};
  width: 100%;
  padding-left: 40px;
`

export const TrendingLogoContainer = styled.div`
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

export const TrendingHeading = styled.h1`
  font-size: 28px;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#0f0f0f')};
`

export const CardItemContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 10px;
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
