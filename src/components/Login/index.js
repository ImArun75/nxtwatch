import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  MainContainer,
  LoginCart,
  LoginLogo,
  InputContainer,
  LableText,
  LoginShowPassContainer,
  ShowPassHeading,
  CustomChecBox,
  CustomInput,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errMsg: '',
    isShowButtonClicked: false,
    isFormFailed: false,
  }

  successSubmitForm = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  failureSubmitForm = errorMsg => {
    this.setState({errMsg: errorMsg, isFormFailed: true})
  }

  submitForm = async e => {
    e.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const loginApi = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginApi, options)
    const data = await response.json()
    if (response.ok === true) {
      this.successSubmitForm(data.jwt_token)
    } else {
      this.failureSubmitForm(data.error_msg)
    }
  }

  changeUsername = e => {
    this.setState({username: e.target.value})
  }

  changePassword = e => {
    this.setState({password: e.target.value})
  }

  changeShowInput = () => {
    this.setState(prevState => ({
      isShowButtonClicked: !prevState.isShowButtonClicked,
    }))
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <InputContainer>
          <LableText htmlFor="username">USERNAME</LableText>
          <CustomInput
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={this.changeUsername}
          />
        </InputContainer>
      </>
    )
  }

  renderPassword = () => {
    const {password, isShowButtonClicked} = this.state

    return (
      <>
        <InputContainer>
          <LableText htmlFor="password">PASSWORD</LableText>
          {isShowButtonClicked ? (
            <CustomInput
              type="text"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.changePassword}
            />
          ) : (
            <CustomInput
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.changePassword}
            />
          )}
        </InputContainer>
      </>
    )
  }

  renderShowPass = () => (
    <LoginShowPassContainer>
      <CustomChecBox
        type="checkbox"
        id="checkbox"
        onChange={this.changeShowInput}
      />
      <ShowPassHeading htmlFor="checkbox">Show Password</ShowPassHeading>
    </LoginShowPassContainer>
  )

  render() {
    const {errMsg, isFormFailed} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <MainContainer>
        <LoginCart onSubmit={this.submitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          {this.renderUsername()}
          {this.renderPassword()}
          {this.renderShowPass()}
          <LoginButton type="submit">Login</LoginButton>
          {isFormFailed && <ErrorMsg>*{errMsg}</ErrorMsg>}
        </LoginCart>
      </MainContainer>
    )
  }
}

export default Login
