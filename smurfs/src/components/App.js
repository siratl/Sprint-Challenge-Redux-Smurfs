import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Loader from 'react-loader-spinner';
import Smurfs from './Smurfs';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs()
  }
  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        {(this.props.fetchingSmurfs) && (
          <Loader type="ThreeDots" color="#88CCFF" height="60" width="60" />
        )}
        {this.props.error ? (
          <div>{this.props.error}</div>
        ) : (
          <Smurfs smurfs={this.props.smurfs} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error,
});

export default connect(
  mapStateToProps,
  { fetchSmurfs },
)(App);
