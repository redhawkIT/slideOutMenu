import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const style = {
  marginRight: 0
}

const ButtonClose = () => (
  <div>
    <FloatingActionButton mini={true} style={style}>
      X
    </FloatingActionButton>
  </div>
)

export default class DrawerLeft extends Component {
  render() {
    return (
      <div>
        <Drawer open={this.props.open}>
          <MenuItem onTouchTap={this.props.close}>Close</MenuItem>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}
