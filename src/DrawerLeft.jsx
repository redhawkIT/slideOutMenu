import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class DrawerLeft extends Component {
  render() {
    return (
      <div>
        <Drawer open={this.props.open}>
          <MenuItem onTouchTap={this.props.close}>Close</MenuItem>
          <MenuItem>New Request</MenuItem>
          <MenuItem>Requests</MenuItem>
          <MenuItem>Systems</MenuItem>
        </Drawer>
      </div>
    )
  }
}
