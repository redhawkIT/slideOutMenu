import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBarTop from './AppBarTop'
import Login from './Login'
import SearchBarFuzzyFilter from './SearchBarFuzzyFilter'
import TextScroll from './TextScroll'
import Actions from './Actions'
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

  _render(isLogin) {
    if (isLogin) {
      return (
        <div>
          <AppBarTop logout={this.handleLogout}/>
          <TextScroll/>
          <SearchBarFuzzyFilter/>
          <br/>
          <Actions/>
        </div>
      )

    } else {
      return <Login login={this.handleLogin}/>
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          {this._render(this.state.isLogin)}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
