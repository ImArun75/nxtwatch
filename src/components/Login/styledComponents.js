import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
  font-family: Roboto;
`

export const LoginCart = styled.form`
  padding: 50px 35px;
  width: 350px;
  box-shadow: 0px 3px 14px #94a3b8;
  background-color: #f9f9f9;
  border: none;
  display: flex;
  flex-direction: column;
`

export const LoginLogo = styled.img`
  width: 140px;
  height: 30px;
  align-self: center;
  margin-bottom: 30px;
`
export const InputContainer = styled.div`
  margin: 10px 0px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`

export const LableText = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 6px;
`

export const CustomChecBox = styled.input`
    width: 20px;
    height 20px;
    margin-right: 14px;
    cursor: pointer;
    outline: none;
`
export const CustomInput = styled.input`
  padding: 4px 12px;
  background-color: transparant;
  border: 1px solid #475569;
  outline: none;
  font-size: 16px;
  border-radius: 6px;
  height: 35px;
`

export const LoginShowPassContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ShowPassHeading = styled.label`
  font-size: 16px;
  color: #0f0f0f;
`

export const LoginButton = styled.button`
  font-size: 16px;
  padding: 10px 26px;
  border: none;
  border-radius: 8px;
  background-color: #4f46e5;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  margin: 10px 0px;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 12px;
`
