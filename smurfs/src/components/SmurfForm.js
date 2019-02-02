import React, { Component } from 'react';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';

class SmurfForm extends Component {
  state = {
    smurf: {
      name: '',
      age: '',
      height: '',
    },
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: '',
      },
    });
    document.getElementById('smurfForm').reset();
  };

  handleChange = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="smurfForm">
        <Form onSubmit={this.addSmurf} id="smurfForm">
          <FormText>Complete Form Below to add Smurf</FormText>
          <FormGroup row>
            <Label for="name" sm={2}>
              <strong> Name </strong>
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                onChange={this.handleChange}
                placeholder="Name"
                value={this.state.smurf.name}
                name="name"
                id="name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="age" sm={2}>
              <strong>Age</strong>
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                onChange={this.handleChange}
                placeholder="Age"
                value={this.state.smurf.age}
                name="age"
                id="age"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="height" sm={2}>
              <strong>Height</strong>
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                onChange={this.handleChange}
                placeholder="Height"
                value={this.state.smurf.height}
                name="height"
                id="height"
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 1 }}>
              <Button type="submit">Add to village</Button>
            </Col>
          </FormGroup>
        </Form>
      
          <img className='smurfGif' alt='smurf Wink' src="https://orig00.deviantart.net/3161/f/2012/243/8/4/handy_winking_by_kiss_the_iconist-d5d47rx.gif" />
      
      </div>
    );
  }
}

export default SmurfForm;
