import React, { Component } from 'react';
import Controls from '../components/Controls';
import Display from '../components/Display';
import Header from '../components/Headers';
import { handleAPI } from '../services/APICall';

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

  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await handleAPI(this.state.url, this.state.method, this.state.body);
    this.setState({ res });
  }

  render() {
    const { url, rawJson, res } = this.state;
    return (
      <div>
        <Header />
        <Controls 
          url={url} 
          rawJson={rawJson}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        {res ? <Display res={res} /> : null}
      </div>
    );
  }
}