import {Component} from 'react'
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'

// jwt_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'

import {
  LoginContainer,
  LoginCard,
  NxtWatchLogo,
  LoginForm,
  LoginLabel,
  LoginInputField,
  LoginButton,
  ErrorMessage,
} from './StyledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeCheckbox = event => {
    const isChecked = event.target.checked
    this.setState({
      showPassword: isChecked,
    })
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookie.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  formSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    // console.log(userDetails)
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    try {
      const response = await fetch(loginApiUrl, options)
      const data = await response.json()
      // console.log(data)
      if (response.ok) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.setState({
          errorMsg: data.error_msg,
        })
      }
    } catch (error) {
      console.log(`Network Error: ${error}`)
      this.setState({
        errorMsg: 'Something went wrong. Please try again.',
      })
    }
  }

  render() {
    const {username, password, showPassword, errorMsg} = this.state
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginCard>
          <NxtWatchLogo
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />
          <LoginForm onSubmit={this.formSubmit}>
            <LoginLabel htmlFor="username">USERNAME</LoginLabel>
            <br />
            <LoginInputField
              onChange={this.onChangeUserName}
              value={username}
              type="text"
              id="username"
              placeholder="USERNAME"
            />
            <br />
            <br />
            <LoginLabel htmlFor="password">PASSWORD</LoginLabel>
            <br />
            <LoginInputField
              onChange={this.onChangePassword}
              value={password}
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
            />
            <br />
            <LoginLabel htmlFor="showPassword">
              <LoginInputField
                id="showPassword"
                onChange={this.onChangeCheckbox}
                type="checkbox"
                margin="0px"
              />
              Show Password
            </LoginLabel>
            <br />
            <LoginButton type="submit">Login</LoginButton>
            {errorMsg && <ErrorMessage>{`* ${errorMsg}`}</ErrorMessage>}
          </LoginForm>
        </LoginCard>
      </LoginContainer>
    )
  }
}

export default Login
