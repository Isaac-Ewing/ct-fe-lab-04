import React, { Component } from 'react';
import Controls from '../components/Controls';
import Display from '../components/Display';

export default class APIContainer extends Component {
  state = {
    url: '',
    method: '',
    rawJson: '',
    res: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleRes = (res) => {
    this.setState({ res });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
  }

  render() {
    const { url, rawJson, res } = this.state;
    return (
      <div>
        <Controls 
          url={url} 
          rawJson={rawJson}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <Display res={res} />
      </div>
    );
  }
}