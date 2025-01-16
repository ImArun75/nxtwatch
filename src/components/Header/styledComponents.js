import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 30px;
  box-shadow: 10px 6px 6px #f8fafc;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
`

export const ItemsContainer = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
`

export const HeaderLogo = styled.img`
  width: 80px;
  height: 20px;
`

export const ProfileItem = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 20px;
`

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  margin-left: 20px;
`

export const LogoutButton = styled.button`
  font-family: 'Roboto';
  border: ${props =>
    props.isDark ? '2px solid #ffffff' : '2px solid #4f46e5'};
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  font-size: 14px;
  padding: 8px 24px;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  margin-left: 20px;
`
export const PopUpCard = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
`
export const CardText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  font-weight: 500;
  margin: 0px;
`
export const CardButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
  column-gap: 25px;
`
export const CancelButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-weight: 500;
  padding: 7px 10px;
  background-color: transparent;
  border-radius: 3px;
  border: ${props =>
    props.isDark ? '1px solid #94a3b8' : '1px solid #475569'};
  cursor: pointer;
`
export const ConfirmButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  color: #f9f9f9;
  border: none;
  font-weight: 500;
  padding: 8px 10px;
  background-color: #3b82f6;
  border-radius: 3px;
  cursor: pointer;
`
