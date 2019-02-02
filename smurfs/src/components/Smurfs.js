import React from 'react';
import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div className="smurfs">
      {props.smurfs.map(smurf => (
        <div key={smurf.name} className="smurfsCardsWrapper">
          <span
            className="deletebtn"
            onClick={() => props.deleteSmurf(smurf.id)}
          >
            delete
          </span>
          <Smurf smurf={smurf} />
        </div>
      ))}
    </div>
  );
};

export default Smurfs;
