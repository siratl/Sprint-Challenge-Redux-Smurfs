import React from 'react';
import { CardTitle, CardText } from 'reactstrap';

const Smurf = props => {
  return (
    <div className="smurf">
      <CardTitle>
        <h4>{props.smurf.name}</h4>
      </CardTitle>
      <CardText>{props.smurf.height} tall</CardText>
      <CardText>{props.smurf.age} smurf years old</CardText>
    </div>
  );
};

export default Smurf;
