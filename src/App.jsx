import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBarTop from './AppBarTop'
import Login from './Login'
import './App.css'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBarTop/>
          <Login/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
