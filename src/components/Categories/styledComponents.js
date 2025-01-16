import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  box-size: border-box;
  min-height: 90vh;
`

export const ItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0px;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.bgColor};

  padding-left: 14px;
`

export const ItemValue = styled.p`
  font-size: 16px;
  color: ${props => props.textcolor};
  font-weight: 600px;
  margin-left: 12px;
  font-weight: ${props => props.fontWeight};
`

export const BottomSection = styled.div`
  margin-left: 15px;
`

export const ContactUsHeading = styled.p`
  font-size: 16px;
  color: #1e293b;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#0f0f0f')};
`

export const EachItemContainer = styled.li`
  cursor: pointer;
`

export const SocialMediaContainer = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0px;
  list-style-type: none;
`

export const ImgLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
`

export const Discription = styled.p`
  font-size: 14px;
  color: #231f20;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#0f0f0f')};
`
