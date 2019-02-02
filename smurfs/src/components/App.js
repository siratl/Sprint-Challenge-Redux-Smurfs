import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf, deleteSmurf } from '../actions';
import Loader from 'react-loader-spinner';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  addSmurf = smurf => {
    this.props.addSmurf(smurf);
  };

  deleteSmurf = id => {
    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <SmurfForm addSmurf={this.addSmurf} />
        {this.props.fetchingSmurfs && (
          <Loader type="ThreeDots" color="#88CCFF" height="60" width="60" />
        )}
        {this.props.error ? (
          <div>{this.props.error}</div>
        ) : (
          <Smurfs smurfs={this.props.smurfs} deleteSmurf={this.deleteSmurf} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  deletingSmurf: state.deleteSmurf,
  updatingSmurf: state.updatingSmurf,
  error: state.error,
});

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf, deleteSmurf },
)(App);
