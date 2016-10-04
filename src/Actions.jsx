import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleExpandable = () => (
  <Card>
    <CardHeader
      title="Title"
      subtitle="Subtitle"
      actAsExpander={false}
      showExpandableButton={false}
    />
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
    <CardText expandable={false}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

const Actions = () => {
  return (
    <div className="row around-xs">
      <div className="col-xs-4">
        <div className="box">
          <CardExampleExpandable/>
        </div>
      </div>
      <div className="col-xs-4">
        <div className="box">
          <CardExampleExpandable/>
        </div>
      </div>
      <div className="col-xs-4">
        <div className="box">
          <CardExampleExpandable/>
        </div>
      </div>
      <div className="col-xs-4">
        <div className="box">
          <CardExampleExpandable/>
        </div>
      </div>
      <div className="col-xs-4">
        <div className="box">
          <CardExampleExpandable/>
        </div>
      </div>
      <div className="col-xs-4">
        <div className="box">
          <CardExampleExpandable/>
        </div>
      </div>
    </div>
  )
}
export default Actions;
