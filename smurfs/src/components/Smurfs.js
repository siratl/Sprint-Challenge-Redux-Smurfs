import React from 'react';
import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div className="smurfs">
      <div className="smurfsCardsWrapper">
        {props.smurfs.map(smurf => (
          <Smurf key={smurf.name} smurf={smurf} />
        ))}
      </div>
    </div>
  );
};

export default Smurfs;
