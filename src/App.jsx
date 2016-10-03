import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBarTop from './AppBarTop'
import Login from './Login'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)

    this.state = {
      isLogin: false
    }
  }

  handleLogin() {
    this.setState({isLogin: true})
  }

  handleLogout() {
    this.setState({isLogin: false})
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          {!this.state.isLogin ? <Login login={this.handleLogin}/> : <AppBarTop logout={this.handleLogout}/>}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
